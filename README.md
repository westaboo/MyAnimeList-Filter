# MAL-HideTopAnime

Working on making this a chrome extension with user interface.

For now it can be used as a TamperMonkey/GreaseMonkey script by either copying the contents of main.js into a new script or adding

```javascript
$.getScript("https://rawgit.com/westaboo/MAL-HideTopAnime/master/main.js");
```
to a new script.

By default, the script filters out Gintama and Haikyuu!! You can change this and edit it to whatever you would like. Simply add the lines, following the template below.

```javascript
to_remove.add(NAME_OF_ANIME);
```
