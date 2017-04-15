// GET SWITCHES

var onOffSwitch = document.getElementById('s-m');
var renumberSwitch = document.getElementById('s-renumber');
var footerSwitch = document.getElementById('s-footer');
var optionsButton = document.getElementById('go-to-options');


// GETS NEW SAVED VALUES

function saveValues()
{
  chrome.storage.sync.set({"isOn": onOffSwitch.checked});
  chrome.storage.sync.set({"renumberIsOn": renumberSwitch.checked});
  chrome.storage.sync.set({"footerIsOn": footerSwitch.checked});
}


// SETS THE SAVED VALUES OF THE SWITCHES

function setValues() {

  chrome.storage.sync.get("renumberIsOn", function(obj) {
    renumberSwitch.checked = obj.renumberIsOn;
  });

  chrome.storage.sync.get("footerIsOn", function(obj) {
    footerSwitch.checked = obj.footerIsOn;
  });

  chrome.storage.sync.get("isOn", function(obj) {
    onOffSwitch.checked = obj.isOn;
  });

}


// SET SWITCH VALUES

try
{
  setValues();
}
catch(err)
{
    console.log('failed');
}


// BIND SWITCHES TO SAVE VALUES IF CLICKED

onOffSwitch.addEventListener('click', saveValues);
renumberSwitch.addEventListener('click', saveValues);
footerSwitch.addEventListener('click', saveValues);

optionsButton.addEventListener('click', function() {
  if (chrome.runtime.openOptionsPage) {
    // New way to open options pages, if supported (Chrome 42+).
    chrome.runtime.openOptionsPage();
  } else {
    // Reasonable fallback.
    window.open(chrome.runtime.getURL('options.html'));
  }
});
