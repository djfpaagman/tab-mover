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
  var count;

  chrome.tabs.query({ currentWindow: true }, function(tabs) {
    count = tabs.length;
  });

  chrome.tabs.query({ currentWindow: true, active: true }, function(tabs) {
    tab = tabs[0];

    if (tab.index === (count-1) && direction === 1) {
      // last tab so move it to the front
      new_index = 0;
    } else {
      new_index = tab.index + direction;
    }

    chrome.tabs.move(tab.id, { index: new_index });
  });
}
