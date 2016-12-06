// ==UserScript==
// @name         MAL-HideTopAnime
// @version      1.0.0
// @description  Remove specified anime from myanimelist
// @author       Zeeshan Hanif
// @include      https://myanimelist.net/topanime.php*
// @require      https://rawgit.com/westaboo/MAL-HideTopAnime/master/main.js
// @grant        none
// ==/UserScript==

(function() {

    var to_remove = new Set();

    /////////////////////////////////

    // add anime to filter below
    // Gintama is as an example

    to_remove.add('Gintama');

    /////////////////////////////////

    filter(to_remove);
    renumber();
    numberHidden();

})();