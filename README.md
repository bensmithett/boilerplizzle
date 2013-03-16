***Important!*** **I'm halfway through updating boilerplizzle to work with Grunt 0.4 ([here's the branch](https://github.com/bensmithett/boilerplizzle/compare/update-for-grunt-0.4)). I'm taking the opportunity to refactor a few things as well, so if you use this as it stands beware that it won't be compatible with the new version.**

# Boilerplizzle

Boilerplizzle is a flexible starting point for small or experimental projects that gives you the tools 
you're used to from bigger projects then gets out of your way.

## What you get
- a local server
- live [Compass](http://compass-style.org/) & [CoffeeScript](http://coffeescript.org/) compilation
- [h5bp](http://html5boilerplate.com/)'s `index.html`
- [jQuery](http://jquery.com/), [Modernizr](http://modernizr.com/) & [Lo-Dash](http://lodash.com/)
- [Normalize.css](http://necolas.github.com/normalize.css/)
- [Jasmine](http://pivotal.github.com/jasmine/), [jasmine-jquery](https://github.com/velesin/jasmine-jquery) & [Testem](https://github.com/airportyh/testem)
- A build task to gift wrap a minified, production-ready copy of your project.

Boilerplizzle is designed to be customised. You can easily add more libraries & tools or delete the defaults.

## Super complicated installation instructions

Boilerplizzle requires [Bundler](http://gembundler.com/), [node](http://nodejs.org/) & [grunt](http://gruntjs.com/). 

To start a new project, [download](https://github.com/bensmithett/boilerplizzle/zipball/master/) & unzip Boilerplizzle then…

```
$ bundle install
$ npm install
$ grunt
```

A blank canvas awaits at [localhost:8000](http://localhost:8000)!

Dive into `app/` & do something awesome to 
`index.html`, `app.coffee` or `screen.sass`.

### Magical setup script

Alternatively, if you like things to be easy & you trust me then you can just run this:

```
bash <(curl -L https://raw.github.com/bensmithett/boilerplizzle/gimme)
```

You might like to alias something sensible like`bp` to the
[contents of that bash script](https://raw.github.com/bensmithett/boilerplizzle/gimme)
in your terminal for extra speedy new project setup.


## TDD with Jasmine & Testem
You can optionally write [Jasmine](http://pivotal.github.com/jasmine/) tests for your JS and 
run them everywhere with the awesome [Testem](https://github.com/airportyh/testem).

If you don't already have them, install Testem & PhantomJS:

- `npm install -g testem`
- `brew install phantomjs` if you have homebrew, or just download the [installer](http://phantomjs.org/download.html)

Then…

- `grunt`
- In a new terminal window, `testem`
- Write your specs in CoffeeScript in the `spec` directory, save & watch the magic happen.

## Building for production
`grunt build` compiles, concatenates & minifies. When it's done, `public/` is ready to ship to the information superhighway.

`grunt compile` compiles everything in dev mode and makes `public/` development-y again.
