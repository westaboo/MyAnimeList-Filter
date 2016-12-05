// removes Gintama from all MyAnimeList Top Anime list


var anime_list = document.getElementsByClassName('ranking-list');

for (var i = 0; i < anime_list.length; i++)
{   
    var elementName = anime_list[i].getElementsByClassName('fw-b')[0].innerHTML;
    
    if (elementName.includes("Gintama"))
    {
        anime_list[i].remove();
    }
}

for (var i = 0; i < anime_list.length; i++)
{
    var rank = anime_list[i].getElementsByClassName('top-anime-rank-text');
    rank.innerHTML = i + 1;
}
