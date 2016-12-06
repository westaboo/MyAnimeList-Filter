// gets all anime and creates a list for ones that are removed

var anime_list = document.getElementsByClassName('ranking-list');
var removed = [];

// Removes elements whose titles match from the set made above

function filter(to_remove) {

    for (var i = anime_list.length - 1; i >= 0; i--)
    {   
        var elementName = anime_list[i].getElementsByClassName('fw-b')[0].innerHTML;
        
        for (let anime of to_remove)
        {
            if (elementName.includes(anime))
            {
                removed.push(elementName);
                anime_list[i].remove();
                break;
            }
        }
    }
}


// Gets starting number to start numbering from

function renumber() {

    var limitLocation = document.URL.search('limit=');
    var beginning = 0;

    if (limitLocation != -1)
        beginning = parseInt(document.URL.substr(limitLocation + 6));

    // Renumbers all anime

    for (var i = 0; i < anime_list.length; i++)
    {
        var rank = anime_list[i].getElementsByClassName('top-anime-rank-text')[0];
        rank.innerHTML = i + 1 + beginning;
    }
}


// Displays hidden message on bottom

function numberHidden() {
    
    var nHidden = 50 - anime_list.length;

    if (nHidden > 0)
    {
        var statement = document.createElement('div');
        statement.innerHTML = 'Hiding ' + nHidden.toString() + ' anime titles: ' +
                              removed.sort().join(', ') + '.';

        document.getElementById('content').appendChild(statement);
    }
}
