# Engage Capital Coding Conventions

To maintain high code quality, readability, and trace-ability across the project, all new and modified TypeScript/React files should adhere to the following documentation conventions.

## 1. File Headers
Every file must begin with a standardized header block that details its purpose, author, and creation/modification date.

```typescript
/**
 * ============================================================================
 * File: <FileName>
 * Author: Atonnydev
 * Date: <YYYY-MM-DD>
 * Component/Module: <Name of Component or Module>
 * Description: <Brief description of what this file does, its role in the 
 *              architecture, and any significant dependencies.>
 * ============================================================================
 */
```

## 2. Function / Component Headers
Major functions, React components, and API routes must be preceded by a JSDoc-style block that describes their parameters, return values, and core behavior.

```typescript
/**
 * Component: <ComponentName>
 * Description: <What the component renders or what the function computes>
 * 
 * @param {Type} <ParamName> - <Description of the parameter>
 * @returns {Type} <Description of the return value>
 */
```

## 3. General Best Practices
- **Variables/State**: Use clear, descriptive names. Avoid abbreviations like `val` or `str`. Use `userBalance` or `applicationStatus`.
- **Comments**: Explain *why* something is done, not *what* is done (the code should explain what).
- **Hooks**: Custom hooks should also include a descriptive header explaining the side effects and the returned state.
