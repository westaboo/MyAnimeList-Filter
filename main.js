// removes Gintama from all MyAnimeList Top Anime list


var anime_list = document.getElementsByClassName('ranking-list');

for (var i = anime_list.length - 1; i >= 0; i--)
{   
    var elementName = anime_list[i].getElementsByClassName('fw-b')[0].innerHTML;
    
    if (elementName.includes("Gintama"))
    {
        anime_list[i].remove();
    }
}

for (var i = 0; i < anime_list.length; i++)
{
    var rank = anime_list[i].getElementsByClassName('top-anime-rank-text')[0];
    rank.innerHTML = i + 1;
}
