var optionsContainer = document.getElementById('options-container');
var totalInputFields = 0;

var addFilterButton = document.getElementById('add-filter');
addFilterButton.addEventListener('click', addFilter);

var saveButton = document.getElementById('save-filters');
saveButton.addEventListener('click', saveFilters);

chrome.storage.sync.get("filters", function(obj) {
  loadFilters(obj["filters"]);
});

function addFilter() {
  var elements = document.getElementsByTagName('input');
  optionsContainer.insertAdjacentHTML('beforeend',
    '<input placeholder="Anime title" class="' + totalInputFields.toString()
    + '"><div class="remove-filter ' + totalInputFields.toString()
    + '">X</div><br class="' + totalInputFields.toString() + '">'
  );

  var removeButton = document.getElementsByClassName(totalInputFields.toString())[1];
  var temp = totalInputFields;
  removeButton.addEventListener('click', function(){removeFilter(temp);});
  totalInputFields++;
}

function loadFilters(filters) {
  for (var i = 0; i < filters.length; i++) {
    addFilter();
    var elements = document.getElementsByTagName('input');
    elements[elements.length-1].value = filters[i];
  }
}

function removeFilter(number) {
  var toRemove = document.getElementsByClassName(number.toString());
  for (var i = toRemove.length-1; i >= 0; i--)
    toRemove[i].remove();
}

function saveFilters() {
  var elements = document.getElementsByTagName('input');
  var filters = [];
  for (var i = 0; i < elements.length; i++) {
    if (elements[i].value != "")
      filters.push(elements[i].value);
  }
  chrome.storage.sync.set({"filters": filters});
  alert("Saved!");
}
