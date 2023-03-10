const viteTsconfig = require("vite-tsconfig-paths");
const tsconfigPaths = viteTsconfig.default;
const svgr = require("vite-plugin-svgr");
const { mergeConfig } = require("vite");

module.exports = {
  stories: ["../src/**/*.story.mdx", "../src/**/*.story.@(js|jsx|ts|tsx)"],
  addons: [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-interactions"
  ],
  framework: "@storybook/react",
  core: {
    builder: "@storybook/builder-vite"
  },
  features: {
    storyStoreV7: true
  },
  async viteFinal(config) {
    return mergeConfig(config, {
      plugins: [
        tsconfigPaths(),
        svgr({
          svgrOptions: {}
        })
      ]
    });
  }
};
