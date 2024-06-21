import babel from "@rollup/plugin-babel"
import commonjs from "@rollup/plugin-commonjs"
import image from "@rollup/plugin-image"
import url from "@rollup/plugin-url"
import json from "@rollup/plugin-json"
import postcss from "rollup-plugin-postcss"
import del from "rollup-plugin-delete"
import peerDepsExternal from "rollup-plugin-peer-deps-external"
import { terser } from "rollup-plugin-terser"
import path from "path"
import { nodeResolve } from "@rollup/plugin-node-resolve"

const extensions = [".js", ".jsx", ".ts", ".tsx"]

const config = {
  input: ["index.ts"],
  output: [
    {
      file: "lib/index.d.ts",
      format: "es",
    },
  ],
  plugins: [
    postcss({
      extract: path.resolve("lib/main.css"),
      extensions: [".css"],
    }),
    babel({
      exclude: /node_modules/,
      babelHelpers: "runtime",
      plugins: ["@babel/plugin-transform-runtime"],
      extensions,
    }),
    commonjs({ exclude: ["components/**"], include: ["node_modules/**"] }),
    peerDepsExternal(),
    image(),
    json(),
    url({
      include: ["**/*.woff", "**/*.woff2"],
      limit: Infinity,
    }),
    nodeResolve({ extensions }),
    del({
      targets: ["lib/**/*.js", "lib/**/*.css", "lib/**/*.cjs", "lib/**/*.ejs", "lib/**/*.ts"],
    }),
    terser(),
  ],
  external: [/react/, /next/, /styled-jsx/, /clsx/, /string-hash/, /classnames/],
}

export default config
