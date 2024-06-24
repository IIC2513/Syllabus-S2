La configuración para ESLint es la siguiente

```javascript
// eslint.config.mjs
import { builtinModules } from 'module';

export default [
  {
    ignores: ["node_modules/**"],  // Archivos y directorios a ignorar
  },
  {
    files: ["**/*.js"],  // Patrón de archivos a los que se aplicará esta configuración
    languageOptions: {
      ecmaVersion: 2021,
      sourceType: "module",
      globals: {
        ...builtinModules.reduce((acc, mod) => {
          acc[mod] = "readonly";
          return acc;
        }, {}),
        browser: true,
        node: true
      }
    },
    rules: {
      "no-undef": "error",
      "quotes": ["warn", "double"],
      "no-console": "error",
      "semi": ["error", "always"],
      "no-var": "warn",
      "func-names": "error",
      "no-trailing-spaces": "warn",
      "space-before-blocks": ["error", "always"],
      "quote-props": ["error", "consistent"],
      "no-unused-vars": "error”,
      "indent": ["error", 2],
      "no-eval": "error",
      "camelcase": ["warn", { "properties": "never" }],
      "no-multiple-empty-lines": ["error", { "max": 1 }],
    }
  }
```

Todo esto se debe colocar en el archivo `eslint.config.mjs` tras realizar la instalación de ESLint.
