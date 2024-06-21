import babel from "@rollup/plugin-babel"
import commonjs from "@rollup/plugin-commonjs"
import json from "@rollup/plugin-json"
import del from "rollup-plugin-delete"
import peerDepsExternal from "rollup-plugin-peer-deps-external"
import { terser } from "rollup-plugin-terser"
import { nodeResolve } from "@rollup/plugin-node-resolve"
import ts from "@rollup/plugin-typescript"
import packageJson from "./package.json"
import dts from "rollup-plugin-dts"

const extensions = [".js", ".ts"]

const configJS = {
  input: ["src/index.ts"],
  output: [
    {
      file: packageJson.main,
      sourcemap: true,
      format: "cjs",
    },
    {
      file: packageJson.module,
      sourcemap: true,
      format: "esm",
    },
  ],
  plugins: [
    ts({ tsconfig: "./tsconfig.json" }),
    commonjs({ exclude: ["components/**"], include: ["node_modules/**"] }),
    babel({
      exclude: /node_modules/,
      babelHelpers: "runtime",
      plugins: ["@babel/plugin-transform-runtime"],
      extensions,
    }),
    peerDepsExternal(),
    json(),
    nodeResolve({ extensions }),
    del({
      targets: ["lib/declaration", "lib/**/*.js", "lib/**/*.cjs", "lib/**/*.ejs", "lib/**/*.ts", "lib/**/*.map"],
    }),
    terser(),
  ],
  external: [/nestjs/],
}

const configTypes = {
  input: "lib/declaration/index.d.ts",
  output: [{ file: "lib/index.d.ts", format: "esm" }],
  plugins: [dts()],
}

const commonConfig = [configJS, configTypes]

export default commonConfig
