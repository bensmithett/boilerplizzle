# Boilerplizzle

Boilerplizzle is a flexible starting point for small or experimental projects that gives you the tools 
you're used to from bigger projects then gets out of your way.

## What you get
- a local preview server
- automatic [Compass](http://coffeescript.org/) & [CoffeeScript](http://coffeescript.org/) compilation
- [h5bp](http://html5boilerplate.com/)'s `index.html` stripped down to the bare essentials
- [jQuery](http://jquery.com/), [Modernizr](http://modernizr.com/) & [Lo-Dash](http://lodash.com/)
- [Normalize.css](http://necolas.github.com/normalize.css/)
- [Jasmine](http://pivotal.github.com/jasmine/), [jasmine-jquery](https://github.com/velesin/jasmine-jquery) & [Testem](https://github.com/airportyh/testem)
- A build task to gift wrap a minified, production-ready copy of your project.

Boilerplizzle is designed to be customised. You can easily add more libraries & tools or delete
the defaults.

## Super complicated installation instructions

Boilerplizzle requires [node](http://nodejs.org/), [Compass](http://compass-style.org/install/) & [grunt](http://gruntjs.com/)
(you probably already have them, but see [Installing Dependencies](#installing-dependencies) if you don't).

1. [Download](https://github.com/bensmithett/boilerplizzle/zipball/master/) & unzip boilerplizzle.
- `$ npm install` (you might need `sudo`)
- `$ grunt`

Or if you're as lazy as me and think 3 steps is 2 too many...
```bash
bash <(curl -L https://raw.github.com/bensmithett/boilerplizzle/gimme)
```

That's it! A blank canvas awaits you at [localhost:8000](http://localhost:8000),
so stop reading this right now & do something awesome to 
`index.html`, `app.coffee` or `screen.sass`!

## TDD with Jasmine & Testem
You can optionally write [Jasmine](http://pivotal.github.com/jasmine/) tests for your JS and 
run them everywhere with the awesome [Testem](https://github.com/airportyh/testem).

If you don't already have them, install Testem & PhantomJS:
- `npm install -g testem`
- `brew install phantomjs` or just download the [installer](http://phantomjs.org/download.html)

Then...
- `grunt`
- In a new terminal window, `testem`
- Write your specs in CoffeeScript in the `spec` directory, save & watch the magic happen.

## Building for production
Just `grunt build` then your `public/` folder is ready to ship to the information superhighway.

`grunt compile` makes the `public/` folder development-y again.

## Installing dependencies
Boilerplizzle requires node, Compass and grunt.

- [node](http://nodejs.org/): `brew install node` or just download the installer
- [Compass](http://compass-style.org/install/): `gem install compass`
- [grunt](http://gruntjs.com/): `sudo npm install -g grunt`