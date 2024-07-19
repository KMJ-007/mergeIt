chrome.browserAction.onClicked.addListener(function (tab) {
  chrome.windows.getCurrent({ populate: true }, function (currentWindow) {
    chrome.windows.getAll({ populate: true }, function (windows) {
      windows.forEach(function (window) {
        if (window.id === currentWindow.id) return;
        window.tabs.forEach(function (tab) {
          chrome.tabs.move(tab.id, { windowId: currentWindow.id, index: -1 });
        });
      });
    });
  });
});
