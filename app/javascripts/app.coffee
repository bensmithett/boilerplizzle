requirejs.config
  enforceDefine: true,
  paths:
    jquery: [
      '//ajax.googleapis.com/ajax/libs/jquery/1.9.1/jquery.min',
      'vendor/jquery'
    ]

define 'app', ['jquery'], ($) ->
  $ ->
    console.log '"For me, it is far better to grasp the Universe as it really is than to persist in delusion, however satisfying and reassuring." - Carl Sagan'