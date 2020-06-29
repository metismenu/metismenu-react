export default [
  {
    input: 'dist/esm/index.js',
    output: [
      {
        dir: 'dist/cjs',
        format: 'cjs'
      }
    ],
    external: [
      "react",
      "tslib",
      "metismenujs"
    ]
  }
]