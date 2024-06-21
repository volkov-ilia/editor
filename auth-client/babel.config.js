module.exports = {
  presets: [
    [
      "next/babel",
      {
        "styled-jsx": {
          optimizeForSpeed: true,
          plugins: ["styled-jsx-plugin-postcss"],
        },
      },
    ],
    "@babel/preset-typescript",
  ],
  plugins: [
    ["@babel/plugin-proposal-private-property-in-object", { loose: true }],
    ["@babel/plugin-proposal-class-properties", { loose: true }],
    ["@babel/plugin-proposal-private-methods", { loose: true }],
  ],
}
