chrome.commands.onCommand.addListener(function(command) {
  switch(command) {
    case 'move-tab-left':
      moveCurrentTab(-1);
      break;
    case 'move-tab-right':
      moveCurrentTab(1);
      break;
  }
});

function moveCurrentTab(direction) {
  chrome.tabs.query({ currentWindow: true, active: true }, function (tabs) {
    tab = tabs[0];
    chrome.tabs.move(tab.id, { index: tab.index + direction });
  });
}
