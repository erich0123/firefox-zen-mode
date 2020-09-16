console.debug("zen-mode - background page loaded");

let isZen = false;

const startZen = () => {
  const theme = {
    properties: {
      navigator_toolbox_display: "none",
    },
  };

  browser.theme.update(theme);

  isZen = true;
};

const stopZen = () => {
  browser.theme.reset();
  isZen = false;
};

const toggleZen = () => {
  if (isZen) stopZen();
  else startZen();
};

browser.browserAction.onClicked.addListener(startZen);

browser.commands.onCommand.addListener((command) => {
  if (command === "toggle-zen") toggleZen();
});
