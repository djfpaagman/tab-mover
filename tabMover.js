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
  chrome.tabs.query({ currentWindow: true }, function(tabs) {
    active_tab = tabs.find(function(t) { return t.active == true });

    if (active_tab == tabs[tabs.length - 1] && direction === 1) {
      // last tab and moving forward, so move it to the front
      new_index = 0;
    } else {
      new_index = active_tab.index + direction;
    }

    chrome.tabs.move(active_tab.id, { index: new_index });
  });
}
