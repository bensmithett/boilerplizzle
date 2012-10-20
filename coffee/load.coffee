Modernizr.load([
  {
    load: 'http://ajax.googleapis.com/ajax/libs/jquery/1.8.2/jquery.min.js',
    callback: ( url, result, key ) ->
      unless window.jQuery
        Modernizr.load '/js/lib/jquery.min.js'
  },
  {
    load: '/js/lib/lodash.min.js'
  },
  {
    load: '/js/app.js'
  }
])