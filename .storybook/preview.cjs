import "../src/assets/css/design-system.css";
import "../src/assets/css/global.css";
import "../src/assets/css/reset.css";

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  layout: "centered",
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/
    }
  }
};
