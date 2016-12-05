// removes Gintama from all MyAnimeList Top Anime list


var anime_list = document.getElementsByClassName('ranking-list');
var to_remove = new Set();

to_remove.add('Gintama');

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

for (var i = 0; i < anime_list.length; i++)
{
    var rank = anime_list[i].getElementsByClassName('top-anime-rank-text')[0];
    rank.innerHTML = i + 1;
}
