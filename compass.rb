preferred_syntax = :sass
http_path = '/'
css_dir = 'public/stylesheets'
sass_dir = 'app/stylesheets'
images_dir = 'public/img'
javascripts_dir = 'public/javascripts'
relative_assets = true

if environment == :production
  line_comments = false
  output_style = :compressed
else
  line_comments = true
  output_style = :expanded
end
