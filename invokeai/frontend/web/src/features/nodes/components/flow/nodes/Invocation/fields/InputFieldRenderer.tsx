import { FloatFieldInput } from 'features/nodes/components/flow/nodes/Invocation/fields/FloatField/FloatFieldInput';
import { FloatFieldInputAndSlider } from 'features/nodes/components/flow/nodes/Invocation/fields/FloatField/FloatFieldInputAndSlider';
import { FloatFieldSlider } from 'features/nodes/components/flow/nodes/Invocation/fields/FloatField/FloatFieldSlider';
import ChatGPT4oModelFieldInputComponent from 'features/nodes/components/flow/nodes/Invocation/fields/inputs/ChatGPT4oModelFieldInputComponent';
import { FloatFieldCollectionInputComponent } from 'features/nodes/components/flow/nodes/Invocation/fields/inputs/FloatFieldCollectionInputComponent';
import { FloatGeneratorFieldInputComponent } from 'features/nodes/components/flow/nodes/Invocation/fields/inputs/FloatGeneratorFieldComponent';
import FluxKontextModelFieldInputComponent from 'features/nodes/components/flow/nodes/Invocation/fields/inputs/FluxKontextModelFieldInputComponent';
import { ImageFieldCollectionInputComponent } from 'features/nodes/components/flow/nodes/Invocation/fields/inputs/ImageFieldCollectionInputComponent';
import { ImageGeneratorFieldInputComponent } from 'features/nodes/components/flow/nodes/Invocation/fields/inputs/ImageGeneratorFieldComponent';
import Imagen3ModelFieldInputComponent from 'features/nodes/components/flow/nodes/Invocation/fields/inputs/Imagen3ModelFieldInputComponent';
import Imagen4ModelFieldInputComponent from 'features/nodes/components/flow/nodes/Invocation/fields/inputs/Imagen4ModelFieldInputComponent';
import { IntegerFieldCollectionInputComponent } from 'features/nodes/components/flow/nodes/Invocation/fields/inputs/IntegerFieldCollectionInputComponent';
import { IntegerGeneratorFieldInputComponent } from 'features/nodes/components/flow/nodes/Invocation/fields/inputs/IntegerGeneratorFieldComponent';
import ModelIdentifierFieldInputComponent from 'features/nodes/components/flow/nodes/Invocation/fields/inputs/ModelIdentifierFieldInputComponent';
import { StringFieldCollectionInputComponent } from 'features/nodes/components/flow/nodes/Invocation/fields/inputs/StringFieldCollectionInputComponent';
import { StringGeneratorFieldInputComponent } from 'features/nodes/components/flow/nodes/Invocation/fields/inputs/StringGeneratorFieldComponent';
import { IntegerFieldInput } from 'features/nodes/components/flow/nodes/Invocation/fields/IntegerField/IntegerFieldInput';
import { IntegerFieldInputAndSlider } from 'features/nodes/components/flow/nodes/Invocation/fields/IntegerField/IntegerFieldInputAndSlider';
import { IntegerFieldSlider } from 'features/nodes/components/flow/nodes/Invocation/fields/IntegerField/IntegerFieldSlider';
import { StringFieldDropdown } from 'features/nodes/components/flow/nodes/Invocation/fields/StringField/StringFieldDropdown';
import { StringFieldInput } from 'features/nodes/components/flow/nodes/Invocation/fields/StringField/StringFieldInput';
import { StringFieldTextarea } from 'features/nodes/components/flow/nodes/Invocation/fields/StringField/StringFieldTextarea';
import { useInputFieldInstance } from 'features/nodes/hooks/useInputFieldInstance';
import { useInputFieldTemplateOrThrow } from 'features/nodes/hooks/useInputFieldTemplateOrThrow';
import {
  isBoardFieldInputInstance,
  isBoardFieldInputTemplate,
  isBooleanFieldInputInstance,
  isBooleanFieldInputTemplate,
  isChatGPT4oModelFieldInputInstance,
  isChatGPT4oModelFieldInputTemplate,
  isCLIPEmbedModelFieldInputInstance,
  isCLIPEmbedModelFieldInputTemplate,
  isCLIPGEmbedModelFieldInputInstance,
  isCLIPGEmbedModelFieldInputTemplate,
  isCLIPLEmbedModelFieldInputInstance,
  isCLIPLEmbedModelFieldInputTemplate,
  isCogView4MainModelFieldInputInstance,
  isCogView4MainModelFieldInputTemplate,
  isColorFieldInputInstance,
  isColorFieldInputTemplate,
  isControlLoRAModelFieldInputInstance,
  isControlLoRAModelFieldInputTemplate,
  isControlNetModelFieldInputInstance,
  isControlNetModelFieldInputTemplate,
  isEnumFieldInputInstance,
  isEnumFieldInputTemplate,
  isFloatFieldCollectionInputInstance,
  isFloatFieldCollectionInputTemplate,
  isFloatFieldInputInstance,
  isFloatFieldInputTemplate,
  isFloatGeneratorFieldInputInstance,
  isFloatGeneratorFieldInputTemplate,
  isFluxKontextModelFieldInputInstance,
  isFluxKontextModelFieldInputTemplate,
  isFluxMainModelFieldInputInstance,
  isFluxMainModelFieldInputTemplate,
  isFluxReduxModelFieldInputInstance,
  isFluxReduxModelFieldInputTemplate,
  isFluxVAEModelFieldInputInstance,
  isFluxVAEModelFieldInputTemplate,
  isImageFieldCollectionInputInstance,
  isImageFieldCollectionInputTemplate,
  isImageFieldInputInstance,
  isImageFieldInputTemplate,
  isImageGeneratorFieldInputInstance,
  isImageGeneratorFieldInputTemplate,
  isImagen3ModelFieldInputInstance,
  isImagen3ModelFieldInputTemplate,
  isImagen4ModelFieldInputInstance,
  isImagen4ModelFieldInputTemplate,
  isIntegerFieldCollectionInputInstance,
  isIntegerFieldCollectionInputTemplate,
  isIntegerFieldInputInstance,
  isIntegerFieldInputTemplate,
  isIntegerGeneratorFieldInputInstance,
  isIntegerGeneratorFieldInputTemplate,
  isIPAdapterModelFieldInputInstance,
  isIPAdapterModelFieldInputTemplate,
  isLLaVAModelFieldInputInstance,
  isLLaVAModelFieldInputTemplate,
  isLoRAModelFieldInputInstance,
  isLoRAModelFieldInputTemplate,
  isMainModelFieldInputInstance,
  isMainModelFieldInputTemplate,
  isModelIdentifierFieldInputInstance,
  isModelIdentifierFieldInputTemplate,
  isSchedulerFieldInputInstance,
  isSchedulerFieldInputTemplate,
  isSD3MainModelFieldInputInstance,
  isSD3MainModelFieldInputTemplate,
  isSDXLMainModelFieldInputInstance,
  isSDXLMainModelFieldInputTemplate,
  isSDXLRefinerModelFieldInputInstance,
  isSDXLRefinerModelFieldInputTemplate,
  isSigLipModelFieldInputInstance,
  isSigLipModelFieldInputTemplate,
  isSpandrelImageToImageModelFieldInputInstance,
  isSpandrelImageToImageModelFieldInputTemplate,
  isStringFieldCollectionInputInstance,
  isStringFieldCollectionInputTemplate,
  isStringFieldInputInstance,
  isStringFieldInputTemplate,
  isStringGeneratorFieldInputInstance,
  isStringGeneratorFieldInputTemplate,
  isT2IAdapterModelFieldInputInstance,
  isT2IAdapterModelFieldInputTemplate,
  isT5EncoderModelFieldInputInstance,
  isT5EncoderModelFieldInputTemplate,
  isVAEModelFieldInputInstance,
  isVAEModelFieldInputTemplate,
} from 'features/nodes/types/field';
import type { NodeFieldElement } from 'features/nodes/types/workflow';
import { memo } from 'react';
import type { Equals } from 'tsafe';
import { assert } from 'tsafe';

import BoardFieldInputComponent from './inputs/BoardFieldInputComponent';
import BooleanFieldInputComponent from './inputs/BooleanFieldInputComponent';
import CLIPEmbedModelFieldInputComponent from './inputs/CLIPEmbedModelFieldInputComponent';
import CLIPGEmbedModelFieldInputComponent from './inputs/CLIPGEmbedModelFieldInputComponent';
import CLIPLEmbedModelFieldInputComponent from './inputs/CLIPLEmbedModelFieldInputComponent';
import CogView4MainModelFieldInputComponent from './inputs/CogView4MainModelFieldInputComponent';
import ColorFieldInputComponent from './inputs/ColorFieldInputComponent';
import ControlLoRAModelFieldInputComponent from './inputs/ControlLoraModelFieldInputComponent';
import ControlNetModelFieldInputComponent from './inputs/ControlNetModelFieldInputComponent';
import EnumFieldInputComponent from './inputs/EnumFieldInputComponent';
import FluxMainModelFieldInputComponent from './inputs/FluxMainModelFieldInputComponent';
import FluxReduxModelFieldInputComponent from './inputs/FluxReduxModelFieldInputComponent';
import FluxVAEModelFieldInputComponent from './inputs/FluxVAEModelFieldInputComponent';
import ImageFieldInputComponent from './inputs/ImageFieldInputComponent';
import IPAdapterModelFieldInputComponent from './inputs/IPAdapterModelFieldInputComponent';
import LLaVAModelFieldInputComponent from './inputs/LLaVAModelFieldInputComponent';
import LoRAModelFieldInputComponent from './inputs/LoRAModelFieldInputComponent';
import MainModelFieldInputComponent from './inputs/MainModelFieldInputComponent';
import RefinerModelFieldInputComponent from './inputs/RefinerModelFieldInputComponent';
import SchedulerFieldInputComponent from './inputs/SchedulerFieldInputComponent';
import SD3MainModelFieldInputComponent from './inputs/SD3MainModelFieldInputComponent';
import SDXLMainModelFieldInputComponent from './inputs/SDXLMainModelFieldInputComponent';
import SigLipModelFieldInputComponent from './inputs/SigLipModelFieldInputComponent';
import SpandrelImageToImageModelFieldInputComponent from './inputs/SpandrelImageToImageModelFieldInputComponent';
import T2IAdapterModelFieldInputComponent from './inputs/T2IAdapterModelFieldInputComponent';
import T5EncoderModelFieldInputComponent from './inputs/T5EncoderModelFieldInputComponent';
import VAEModelFieldInputComponent from './inputs/VAEModelFieldInputComponent';

type Props = {
  nodeId: string;
  fieldName: string;
  settings?: NodeFieldElement['data']['settings'];
};

export const InputFieldRenderer = memo(({ nodeId, fieldName, settings }: Props) => {
  const field = useInputFieldInstance(fieldName);
  const template = useInputFieldTemplateOrThrow(fieldName);

  // When deciding which component to render, first we check the type of the template, which is more efficient than the
  // instance type check. The instance type check uses zod and is slower.

  if (isStringFieldCollectionInputTemplate(template)) {
    if (!isStringFieldCollectionInputInstance(field)) {
      return null;
    }
    return <StringFieldCollectionInputComponent nodeId={nodeId} field={field} fieldTemplate={template} />;
  }

  if (isStringFieldInputTemplate(template)) {
    if (!isStringFieldInputInstance(field)) {
      return null;
    }
    if (!settings || settings.type !== 'string-field-config') {
      if (template.ui_component === 'textarea') {
        return <StringFieldTextarea nodeId={nodeId} field={field} fieldTemplate={template} />;
      } else {
        return <StringFieldInput nodeId={nodeId} field={field} fieldTemplate={template} />;
      }
    }
    if (settings.component === 'input') {
      return <StringFieldInput nodeId={nodeId} field={field} fieldTemplate={template} />;
    } else if (settings.component === 'textarea') {
      return <StringFieldTextarea nodeId={nodeId} field={field} fieldTemplate={template} />;
    } else if (settings.component === 'dropdown') {
      return <StringFieldDropdown nodeId={nodeId} field={field} fieldTemplate={template} settings={settings} />;
    } else {
      assert<Equals<never, typeof settings>>(false, 'Unexpected settings');
    }
  }

  if (isBooleanFieldInputTemplate(template)) {
    if (!isBooleanFieldInputInstance(field)) {
      return null;
    }
    return <BooleanFieldInputComponent nodeId={nodeId} field={field} fieldTemplate={template} />;
  }

  if (isIntegerFieldInputTemplate(template)) {
    if (!isIntegerFieldInputInstance(field)) {
      return null;
    }
    if (!settings || settings.type !== 'integer-field-config') {
      return <IntegerFieldInput nodeId={nodeId} field={field} fieldTemplate={template} />;
    }

    if (settings.component === 'number-input') {
      return <IntegerFieldInput nodeId={nodeId} field={field} fieldTemplate={template} settings={settings} />;
    }

    if (settings.component === 'slider') {
      return <IntegerFieldSlider nodeId={nodeId} field={field} fieldTemplate={template} settings={settings} />;
    }

    if (settings.component === 'number-input-and-slider') {
      return <IntegerFieldInputAndSlider nodeId={nodeId} field={field} fieldTemplate={template} settings={settings} />;
    }

    assert<Equals<never, typeof settings.component>>(false, 'Unexpected settings.component');
  }

  if (isFloatFieldInputTemplate(template)) {
    if (!isFloatFieldInputInstance(field)) {
      return null;
    }

    if (!settings || settings.type !== 'float-field-config') {
      return <FloatFieldInput nodeId={nodeId} field={field} fieldTemplate={template} />;
    }

    if (settings.component === 'number-input') {
      return <FloatFieldInput nodeId={nodeId} field={field} fieldTemplate={template} settings={settings} />;
    }

    if (settings.component === 'slider') {
      return <FloatFieldSlider nodeId={nodeId} field={field} fieldTemplate={template} settings={settings} />;
    }

    if (settings.component === 'number-input-and-slider') {
      return <FloatFieldInputAndSlider nodeId={nodeId} field={field} fieldTemplate={template} settings={settings} />;
    }

    assert<Equals<never, typeof settings.component>>(false, 'Unexpected settings.component');
  }

  if (isIntegerFieldCollectionInputTemplate(template)) {
    if (!isIntegerFieldCollectionInputInstance(field)) {
      return null;
    }
    return <IntegerFieldCollectionInputComponent nodeId={nodeId} field={field} fieldTemplate={template} />;
  }

  if (isFloatFieldCollectionInputTemplate(template)) {
    if (!isFloatFieldCollectionInputInstance(field)) {
      return null;
    }
    return <FloatFieldCollectionInputComponent nodeId={nodeId} field={field} fieldTemplate={template} />;
  }

  if (isEnumFieldInputTemplate(template)) {
    if (!isEnumFieldInputInstance(field)) {
      return null;
    }
    return <EnumFieldInputComponent nodeId={nodeId} field={field} fieldTemplate={template} />;
  }

  if (isImageFieldCollectionInputTemplate(template)) {
    if (!isImageFieldCollectionInputInstance(field)) {
      return null;
    }
    return <ImageFieldCollectionInputComponent nodeId={nodeId} field={field} fieldTemplate={template} />;
  }

  if (isImageFieldInputTemplate(template)) {
    if (!isImageFieldInputInstance(field)) {
      return null;
    }
    return <ImageFieldInputComponent nodeId={nodeId} field={field} fieldTemplate={template} />;
  }

  if (isBoardFieldInputTemplate(template)) {
    if (!isBoardFieldInputInstance(field)) {
      return null;
    }
    return <BoardFieldInputComponent nodeId={nodeId} field={field} fieldTemplate={template} />;
  }

  if (isMainModelFieldInputTemplate(template)) {
    if (!isMainModelFieldInputInstance(field)) {
      return null;
    }
    return <MainModelFieldInputComponent nodeId={nodeId} field={field} fieldTemplate={template} />;
  }

  if (isModelIdentifierFieldInputTemplate(template)) {
    if (!isModelIdentifierFieldInputInstance(field)) {
      return null;
    }
    return <ModelIdentifierFieldInputComponent nodeId={nodeId} field={field} fieldTemplate={template} />;
  }

  if (isSDXLRefinerModelFieldInputTemplate(template)) {
    if (!isSDXLRefinerModelFieldInputInstance(field)) {
      return null;
    }
    return <RefinerModelFieldInputComponent nodeId={nodeId} field={field} fieldTemplate={template} />;
  }

  if (isVAEModelFieldInputTemplate(template)) {
    if (!isVAEModelFieldInputInstance(field)) {
      return null;
    }
    return <VAEModelFieldInputComponent nodeId={nodeId} field={field} fieldTemplate={template} />;
  }

  if (isT5EncoderModelFieldInputTemplate(template)) {
    if (!isT5EncoderModelFieldInputInstance(field)) {
      return null;
    }
    return <T5EncoderModelFieldInputComponent nodeId={nodeId} field={field} fieldTemplate={template} />;
  }
  if (isCLIPEmbedModelFieldInputTemplate(template)) {
    if (!isCLIPEmbedModelFieldInputInstance(field)) {
      return null;
    }
    return <CLIPEmbedModelFieldInputComponent nodeId={nodeId} field={field} fieldTemplate={template} />;
  }

  if (isCLIPLEmbedModelFieldInputTemplate(template)) {
    if (!isCLIPLEmbedModelFieldInputInstance(field)) {
      return null;
    }
    return <CLIPLEmbedModelFieldInputComponent nodeId={nodeId} field={field} fieldTemplate={template} />;
  }

  if (isCLIPGEmbedModelFieldInputTemplate(template)) {
    if (!isCLIPGEmbedModelFieldInputInstance(field)) {
      return null;
    }
    return <CLIPGEmbedModelFieldInputComponent nodeId={nodeId} field={field} fieldTemplate={template} />;
  }

  if (isControlLoRAModelFieldInputTemplate(template)) {
    if (!isControlLoRAModelFieldInputInstance(field)) {
      return null;
    }
    return <ControlLoRAModelFieldInputComponent nodeId={nodeId} field={field} fieldTemplate={template} />;
  }

  if (isLLaVAModelFieldInputTemplate(template)) {
    if (!isLLaVAModelFieldInputInstance(field)) {
      return null;
    }
    return <LLaVAModelFieldInputComponent nodeId={nodeId} field={field} fieldTemplate={template} />;
  }

  if (isFluxVAEModelFieldInputTemplate(template)) {
    if (!isFluxVAEModelFieldInputInstance(field)) {
      return null;
    }
    return <FluxVAEModelFieldInputComponent nodeId={nodeId} field={field} fieldTemplate={template} />;
  }

  if (isLoRAModelFieldInputTemplate(template)) {
    if (!isLoRAModelFieldInputInstance(field)) {
      return null;
    }
    return <LoRAModelFieldInputComponent nodeId={nodeId} field={field} fieldTemplate={template} />;
  }

  if (isControlNetModelFieldInputTemplate(template)) {
    if (!isControlNetModelFieldInputInstance(field)) {
      return null;
    }
    return <ControlNetModelFieldInputComponent nodeId={nodeId} field={field} fieldTemplate={template} />;
  }

  if (isIPAdapterModelFieldInputTemplate(template)) {
    if (!isIPAdapterModelFieldInputInstance(field)) {
      return null;
    }
    return <IPAdapterModelFieldInputComponent nodeId={nodeId} field={field} fieldTemplate={template} />;
  }

  if (isT2IAdapterModelFieldInputTemplate(template)) {
    if (!isT2IAdapterModelFieldInputInstance(field)) {
      return null;
    }
    return <T2IAdapterModelFieldInputComponent nodeId={nodeId} field={field} fieldTemplate={template} />;
  }

  if (isSpandrelImageToImageModelFieldInputTemplate(template)) {
    if (!isSpandrelImageToImageModelFieldInputInstance(field)) {
      return null;
    }
    return <SpandrelImageToImageModelFieldInputComponent nodeId={nodeId} field={field} fieldTemplate={template} />;
  }

  if (isSigLipModelFieldInputTemplate(template)) {
    if (!isSigLipModelFieldInputInstance(field)) {
      return null;
    }
    return <SigLipModelFieldInputComponent nodeId={nodeId} field={field} fieldTemplate={template} />;
  }

  if (isFluxReduxModelFieldInputTemplate(template)) {
    if (!isFluxReduxModelFieldInputInstance(field)) {
      return null;
    }
    return <FluxReduxModelFieldInputComponent nodeId={nodeId} field={field} fieldTemplate={template} />;
  }

  if (isImagen3ModelFieldInputTemplate(template)) {
    if (!isImagen3ModelFieldInputInstance(field)) {
      return null;
    }
    return <Imagen3ModelFieldInputComponent nodeId={nodeId} field={field} fieldTemplate={template} />;
  }

  if (isImagen4ModelFieldInputTemplate(template)) {
    if (!isImagen4ModelFieldInputInstance(field)) {
      return null;
    }
    return <Imagen4ModelFieldInputComponent nodeId={nodeId} field={field} fieldTemplate={template} />;
  }

  if (isFluxKontextModelFieldInputTemplate(template)) {
    if (!isFluxKontextModelFieldInputInstance(field)) {
      return null;
    }
    return <FluxKontextModelFieldInputComponent nodeId={nodeId} field={field} fieldTemplate={template} />;
  }

  if (isChatGPT4oModelFieldInputTemplate(template)) {
    if (!isChatGPT4oModelFieldInputInstance(field)) {
      return null;
    }
    return <ChatGPT4oModelFieldInputComponent nodeId={nodeId} field={field} fieldTemplate={template} />;
  }

  if (isColorFieldInputTemplate(template)) {
    if (!isColorFieldInputInstance(field)) {
      return null;
    }
    return <ColorFieldInputComponent nodeId={nodeId} field={field} fieldTemplate={template} />;
  }

  if (isFluxMainModelFieldInputTemplate(template)) {
    if (!isFluxMainModelFieldInputInstance(field)) {
      return null;
    }
    return <FluxMainModelFieldInputComponent nodeId={nodeId} field={field} fieldTemplate={template} />;
  }

  if (isSD3MainModelFieldInputTemplate(template)) {
    if (!isSD3MainModelFieldInputInstance(field)) {
      return null;
    }
    return <SD3MainModelFieldInputComponent nodeId={nodeId} field={field} fieldTemplate={template} />;
  }

  if (isCogView4MainModelFieldInputTemplate(template)) {
    if (!isCogView4MainModelFieldInputInstance(field)) {
      return null;
    }
    return <CogView4MainModelFieldInputComponent nodeId={nodeId} field={field} fieldTemplate={template} />;
  }

  if (isSDXLMainModelFieldInputTemplate(template)) {
    if (!isSDXLMainModelFieldInputInstance(field)) {
      return null;
    }
    return <SDXLMainModelFieldInputComponent nodeId={nodeId} field={field} fieldTemplate={template} />;
  }

  if (isSchedulerFieldInputTemplate(template)) {
    if (!isSchedulerFieldInputInstance(field)) {
      return null;
    }
    return <SchedulerFieldInputComponent nodeId={nodeId} field={field} fieldTemplate={template} />;
  }

  if (isFloatGeneratorFieldInputTemplate(template)) {
    if (!isFloatGeneratorFieldInputInstance(field)) {
      return null;
    }
    return <FloatGeneratorFieldInputComponent nodeId={nodeId} field={field} fieldTemplate={template} />;
  }

  if (isIntegerGeneratorFieldInputTemplate(template)) {
    if (!isIntegerGeneratorFieldInputInstance(field)) {
      return null;
    }
    return <IntegerGeneratorFieldInputComponent nodeId={nodeId} field={field} fieldTemplate={template} />;
  }

  if (isStringGeneratorFieldInputTemplate(template)) {
    if (!isStringGeneratorFieldInputInstance(field)) {
      return null;
    }
    return <StringGeneratorFieldInputComponent nodeId={nodeId} field={field} fieldTemplate={template} />;
  }

  if (isImageGeneratorFieldInputTemplate(template)) {
    if (!isImageGeneratorFieldInputInstance(field)) {
      return null;
    }
    return <ImageGeneratorFieldInputComponent nodeId={nodeId} field={field} fieldTemplate={template} />;
  }

  return null;
});

InputFieldRenderer.displayName = 'InputFieldRenderer';
