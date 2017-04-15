var optionsContainer = document.getElementById('options-container');

function addRule() {
  var elements = document.getElementsByTagName('input');
  if (elements[elements.length-1].value != "") {
    optionsContainer.insertAdjacentHTML('beforeend',
      '<input placeholder="Anime title"><div class="remove-filter">X</div><br>'
    );
  } else {
    alert('Cannot add another while field is blank');
  }
}

var addFilterButton = document.getElementById('add-filter');
addFilterButton.addEventListener('click', addRule);
