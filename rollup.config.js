import { babel } from "@rollup/plugin-babel";
import postcss from "rollup-plugin-postcss";
import autoprefixer from "autoprefixer";;

export default {
  input: "src/nano-expansion.js",
  output: {
    file: "dist/nano-expansion.js",
    format: "umd",
    name: "NanoExpansion"
  },
  plugins: [
    babel({
      babelHelpers: "bundled",
      presets: ["@babel/preset-env"],
    }),
    postcss({
      extract: true,
      plugins: [
        autoprefixer(),
      ],
    })
  ],
};
