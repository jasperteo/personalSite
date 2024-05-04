import antfu from "@antfu/eslint-config";

export default antfu(
  {
    typescript: { tsconfigPath: "tsconfig.json" },
    astro: true,
    react: true,
    unocss: true,
    lessOpinionated: true,
    stylistic: false,
    ignores: ["eslint.config.js", "dist"],
  },
  {
    rules: {
      "ts/no-use-before-define": "off",
      "ts/consistent-type-definitions": "off",
    },
  }
);
