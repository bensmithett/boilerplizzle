# Boilerplizzle

Boilerplizzle is a starting point for small or experimental projects that gives you the tools 
you're used to from bigger projects then gets out of your way.

## What you get
- a local server
- file watching & automatic [Compass](http://coffeescript.org/) & [CoffeeScript](http://coffeescript.org/) compilation
- a folder structure that doesn't suck
- [h5bp](http://html5boilerplate.com/)'s `index.html` stripped down to the bare essentials
- [jQuery](http://jquery.com/), [Modernizr](http://modernizr.com/) & [Lo-Dash](http://lodash.com/)
- [Normalize.css](http://necolas.github.com/normalize.css/)
- [Jasmine](http://pivotal.github.com/jasmine/), [jasmine-jquery](https://github.com/velesin/jasmine-jquery) & [Testem](https://github.com/airportyh/testem)
- COMING SOON: Travis CI
- COMING SOON: A build task to gift wrap a minified, production-ready copy of your project.

Don't need all of these tools or want others that aren't included? Go nuts!
Boilerplizzle's defaults are designed to be easy to add to, overwrite or destroy.

## Super complicated installation instructions

### Install dependencies (you probably already have these if you're a serious pro webmaster)
- [node](http://nodejs.org/): `brew install node` or just download the installer
- [Compass](http://compass-style.org/install/): `gem install compass`
- [grunt](http://gruntjs.com/): `sudo npm install -g grunt`

### Get started
- Clone or download this repo & `cd` into it
- `npm install`
- `grunt`

A blank canvas awaits you at [localhost:8000](http://localhost:8000),
so stop reading this right now & go do something awesome to `index.html`, `app.coffee` or `screen.sass`!

## TDD with Jasmine & Testem
You can optionally write [Jasmine](http://pivotal.github.com/jasmine/) tests for your JS and 
run them everywhere with the awesome [Testem](https://github.com/airportyh/testem).

If you don't already have them, install Testem & PhantomJS:
- `npm install -g testem`
- `brew install phantomjs` or just download the [installer](http://phantomjs.org/download.html)

Then...
- `grunt`
- In a new terminal tab, `testem`
- Write your specs in CoffeeScript in the `spec` directory, save & watch the magic happen.
