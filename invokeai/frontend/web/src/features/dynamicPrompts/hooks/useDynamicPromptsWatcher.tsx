import { useAppSelector, useAppStore } from 'app/store/storeHooks';
import { debounce } from 'es-toolkit/compat';
import {
  isErrorChanged,
  isLoadingChanged,
  parsingErrorChanged,
  promptsChanged,
  selectDynamicPromptsMaxPrompts,
} from 'features/dynamicPrompts/store/dynamicPromptsSlice';
import { getShouldProcessPrompt } from 'features/dynamicPrompts/util/getShouldProcessPrompt';
import { selectPresetModifiedPrompts } from 'features/nodes/util/graph/graphBuilderUtils';
import { useFeatureStatus } from 'features/system/hooks/useFeatureStatus';
import { useEffect, useMemo } from 'react';
import { utilitiesApi } from 'services/api/endpoints/utilities';

const DYNAMIC_PROMPTS_DEBOUNCE_MS = 1000;

/**
 * This hook watches for changes to state that should trigger dynamic prompts to be updated.
 */
export const useDynamicPromptsWatcher = () => {
  const { getState, dispatch } = useAppStore();
  // The prompt to process is derived from the preset-modified prompts
  const presetModifiedPrompts = useAppSelector(selectPresetModifiedPrompts);
  const maxPrompts = useAppSelector(selectDynamicPromptsMaxPrompts);

  const dynamicPrompting = useFeatureStatus('dynamicPrompting');

  const debouncedUpdateDynamicPrompts = useMemo(
    () =>
      debounce(async (positivePrompt: string, maxPrompts: number) => {
        // Try to fetch the dynamic prompts and store in state
        try {
          const req = dispatch(
            utilitiesApi.endpoints.dynamicPrompts.initiate(
              {
                prompt: positivePrompt,
                max_prompts: maxPrompts,
              },
              { subscribe: false }
            )
          );

          const res = await req.unwrap();

          dispatch(promptsChanged(res.prompts));
          dispatch(parsingErrorChanged(res.error));
          dispatch(isErrorChanged(false));
        } catch {
          dispatch(isErrorChanged(true));
          dispatch(isLoadingChanged(false));
        }
      }, DYNAMIC_PROMPTS_DEBOUNCE_MS),
    [dispatch]
  );

  useEffect(() => {
    if (!dynamicPrompting) {
      return;
    }

    // Before we execute, imperatively check the dynamic prompts query cache to see if we have already fetched this prompt
    const state = getState();

    const cachedPrompts = utilitiesApi.endpoints.dynamicPrompts.select({
      prompt: presetModifiedPrompts.positive,
      max_prompts: maxPrompts,
    })(state).data;

    if (cachedPrompts) {
      // Yep we already did this prompt, use the cached result
      dispatch(promptsChanged(cachedPrompts.prompts));
      dispatch(parsingErrorChanged(cachedPrompts.error));
      return;
    }

    // If the prompt is not in the cache, check if we should process it - this is just looking for dynamic prompts syntax
    if (!getShouldProcessPrompt(presetModifiedPrompts.positive)) {
      dispatch(promptsChanged([presetModifiedPrompts.positive]));
      dispatch(parsingErrorChanged(undefined));
      dispatch(isErrorChanged(false));
      return;
    }

    // If we are here, we need to process the prompt
    if (!state.dynamicPrompts.isLoading) {
      dispatch(isLoadingChanged(true));
    }

    debouncedUpdateDynamicPrompts(presetModifiedPrompts.positive, maxPrompts);
  }, [debouncedUpdateDynamicPrompts, dispatch, dynamicPrompting, getState, maxPrompts, presetModifiedPrompts]);
};
