```markdown
# InvokeAI Development Patterns

> Auto-generated skill from repository analysis

## Overview
This skill teaches you the core development patterns and coding conventions used in the InvokeAI repository, a Python-based project. You'll learn how to structure files, write imports and exports, follow commit message conventions, and understand the project's testing patterns. While no specific automation workflows were detected, this guide provides best practices and suggested commands for common development tasks.

## Coding Conventions

### File Naming
- Use **snake_case** for all file and module names.
  - Example: `image_processor.py`, `utils/helpers.py`

### Import Style
- Use **relative imports** within the package.
  - Example:
    ```python
    from .utils import process_image
    from ..models import ModelLoader
    ```

### Export Style
- Use **named exports** by explicitly listing public symbols in `__all__`.
  - Example:
    ```python
    __all__ = ['process_image', 'ModelLoader']
    ```

### Commit Messages
- Follow the **conventional commit** style.
- Use prefixes like `fix` to indicate the type of change.
- Keep commit messages concise but descriptive (average length: ~86 characters).
  - Example:  
    ```
    fix: resolve image loading issue on Windows platforms
    ```

## Workflows

### Adding a New Feature
**Trigger:** When implementing a new functionality.
**Command:** `/add-feature`

1. Create a new Python file using snake_case naming.
2. Use relative imports to reference existing modules.
3. Add your function or class and include it in `__all__` if exporting.
4. Write or update corresponding test files (`*.test.*`).
5. Commit your changes using the conventional commit style (e.g., `feat: add new image filter`).

### Fixing a Bug
**Trigger:** When resolving a bug or issue.
**Command:** `/fix-bug`

1. Identify the problematic code section.
2. Apply the fix, maintaining coding conventions.
3. Update or add tests to cover the bug fix.
4. Commit with a `fix:` prefix and a clear description (e.g., `fix: correct off-by-one error in loop`).

### Writing Tests
**Trigger:** When adding or updating tests.
**Command:** `/write-test`

1. Create or update test files matching the `*.test.*` pattern (e.g., `image_processor.test.py`).
2. Write tests for new or modified functionality.
3. Run tests to ensure correctness.

## Testing Patterns

- Test files follow the `*.test.*` naming pattern (e.g., `module.test.py`).
- The specific testing framework is not detected; use standard Python testing practices (e.g., `unittest`, `pytest`).
- Place tests alongside or within a dedicated `tests/` directory.
- Example test file:
  ```python
  import unittest
  from ..image_processor import process_image

  class TestProcessImage(unittest.TestCase):
      def test_basic(self):
          result = process_image('input.png')
          self.assertIsNotNone(result)
  ```

## Commands
| Command      | Purpose                                      |
|--------------|----------------------------------------------|
| /add-feature | Scaffold and add a new feature/module        |
| /fix-bug     | Apply and commit a bug fix                   |
| /write-test  | Create or update test files for your changes |
```
