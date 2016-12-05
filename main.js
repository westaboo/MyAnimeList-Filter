// Default behavior removes all titles with Gintama and Haikyuu from 
// the MyAnimeList Top Anime list. Edit to be what ever you want.

///////////////////////////////////////////////////////////////

var to_remove = new Set();

// to add filtered anime, follow the template of the line below

to_remove.add('Gintama');
to_remove.add('Haikyuu!!');

///////////////////////////////////////////////////////////////

// Removes elements whose titles match from the set made above

var anime_list = document.getElementsByClassName('ranking-list');

for (var i = anime_list.length - 1; i >= 0; i--)
{   
    var elementName = anime_list[i].getElementsByClassName('fw-b')[0].innerHTML;
    
    for (let anime of to_remove)
    {
        if (elementName.includes(anime))
        {
                anime_list[i].remove();
                break;
        }
    }
}

// Gets starting number to start numbering from

var baseURL = anime_list[0].getElementsByClassName('fw-b')[0].baseURI;
var limitLocation = baseURL.search('limit=');
var beginning = 0;

if (limitLocation != -1)
    beginning = parseInt(baseURL.substr(limitLocation + 6));

// Renumbers all anime

for (var i = 0; i < anime_list.length; i++)
{
    var rank = anime_list[i].getElementsByClassName('top-anime-rank-text')[0];
    rank.innerHTML = i + 1 + beginning;
}
