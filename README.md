phantom_modules
===============

Collection of DOM-manipulating PhantomJS modules


Prerequisites
-------------

[PhantomJS](http://phantomjs.org/download.html)



instantJS
---------

A PhantomJS module that appends [instant.page](https://instant.page)
functionality to your site.


### Usage


```
phantomjs instant.js sourceHtmlPath targetHtmlPath
```

If you want to add [instant.page](https://instant.page) functionality to your
`index.html` page, as well as create a new `indexInstant.html` file as a result:

```
phantomjs instant.js index.html indexInstant.html
```


faviconJS
---------

A PhantomJS module that adds a favicon to an HTML file.


### Usage


```
phantomjs addFavicon.js faviconPath sourceHtmlPath targetHtmlPath
```

If you want to add `lambda.ico` as your `index.html`'s favicon, as well as
create a new `indexFavicon.html` file as a result:

```
phantomjs addFavicon.js lambda.ico index.html indexFavicon.html
```