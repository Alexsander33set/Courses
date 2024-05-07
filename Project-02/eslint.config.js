import js from "@eslint/js";

export default [
  js.configs.recommended,  
  {
    rules: {
          semi: "error",
          "prefer-const": "error"
      },
    env: {
      browser: true,
      node: true,
    },
  }
];