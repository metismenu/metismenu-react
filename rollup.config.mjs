import typescript from "@rollup/plugin-typescript";

export default [
  {
    input: "src/index.tsx",
    output: [
      {
        file: "dist/index.js",
        format: "cjs",
      },
      {
        file: "dist/index.mjs",
        format: "esm",
      },
    ],
    plugins: [
      typescript(),
    ],
    external: [
      "react",
      "tslib",
      "metismenujs",
    ],
  },
];
