# MAL-HideTopAnime

I am working on making this a chrome extension with a UI.

For now it can be used as a TamperMonkey/GreaseMonkey script by either using the provide MAL-HideTopAnime.user.js or copying the contents of main.js into a new script and calling the necessary functions.

By default, the script filters out Gintama as an exampe. You can change this and edit it to whatever you would like. Simply add or remove lines, following the template below:

```javascript
to_remove.add(NAME_OF_ANIME);
```
