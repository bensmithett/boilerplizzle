# Boilerplizzle

A simple little tool for building static websites with [Compass](http://compass-style.org/) & [CoffeeScript](http://coffeescript.org/).

Powered by [Grunt](http://gruntjs.com/).

## What you get
- A [static web server](https://github.com/gruntjs/grunt-contrib-connect)
- [h5bp](http://html5boilerplate.com/)'s `index.html`
- Sass & CoffeeScript compilation
- [RequireJS](http://requirejs.org/)
- [jQuery](http://jquery.com/) & [Modernizr](http://modernizr.com/)
- [Normalize.css](http://necolas.github.com/normalize.css/)
- A build task to gift wrap a minified, production-ready copy of your project.

## Setup instructions

Boilerplizzle requires [Bundler](http://gembundler.com/#getting-started), [node](http://nodejs.org/) & [grunt](http://gruntjs.com/getting-started).

### Magical project setup script

Run this inside your new empty project folder:

```
bash <(curl -L https://raw.github.com/bensmithett/boilerplizzle/gimme)
```

*You should [read the source](https://raw.github.com/bensmithett/boilerplizzle/gimme) to see what this does before trusting my bash scripting skills.*

### Slightly less magical setup steps

[Download](https://github.com/bensmithett/boilerplizzle/zipball/master/) & unzip of Boilerplizzle somewhere sensible, then...

```
bundle install
npm install
grunt
```

A blank canvas awaits at `localhost:8000`! Dive into `app/` & do something awesome to `index.html`, `app.coffee` or `screen.sass`.

## Grunt tasks

- `grunt` (default task): Start a server at `localhost:8000`. Sass & CoffeeScript files will be compiled automatically when you make changes.

- `grunt build`: Compile Sass & CoffeeScript files and minify `app.js`. The `public/` folder is ready to deploy.

  **You should replace the full development version of Modernizr with a [custom production build](http://modernizr.com/download/) before deploying.**

- `grunt compile`: Compile Sass & CoffeeScript.

## Need more?
If you're building anything more than a simple, small-ish static site you might need a bit more firepower. Use [Middleman](http://middlemanapp.com/).

## License
Boilerplizzle is released under the [MIT License](http://ben.mit-license.org/).
