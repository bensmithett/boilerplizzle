# Get JS libs
mkdir -p build/js/lib
wget -O build/js/lib/jquery.min.js http://ajax.googleapis.com/ajax/libs/jquery/1.8.2/jquery.min.js
wget -O build/js/lib/lodash.min.js http://cdnjs.cloudflare.com/ajax/libs/lodash.js/0.8.2/lodash.min.js
wget -O build/js/lib/modernizr.min.js http://cdnjs.cloudflare.com/ajax/libs/modernizr/2.6.2/modernizr.min.js

# Get Normalize
mkdir -p sass/lib
wget -O sass/lib/normalize.scss https://raw.github.com/necolas/normalize.css/master/normalize.css

# Install node packages
npm install