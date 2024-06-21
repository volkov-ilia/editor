import typescript from "rollup-plugin-typescript2"
import { terser } from "rollup-plugin-terser"

const config = {
  input: ["index.ts"],
  output: [
    {
      file: "lib/index.cjs",
      format: "cjs",
    },
    {
      file: "lib/index.esm.js",
      format: "esm",
    },
  ],
  plugins: [
    typescript({
      typescript: require("typescript"),
    }),
    terser(),
  ],
}

export default config
