preferred_syntax = :sass
http_path = '/'
css_dir = 'public/css'
sass_dir = 'app/sass'
images_dir = 'public/img'
javascripts_dir = 'public/js'
relative_assets = true

if environment == :production
  line_comments = false
  output_style = :compressed
else
  line_comments = true
  output_style = :expanded
end
