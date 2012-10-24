echo '
             _.--""-.                      
         .--"        `.                    
        /              \                   
       :            .   ;                  
       ;            :   |                  
      ::    .       ::  :                  
      ::. .:`       `:.  ;                 
      ;::::` __.._   ::. :                 
     /  __.g$$$$$$""gp.._`-._       Boilerplizzle.       
   .`.g$$$$$$$$$P   T$-.:""-/      /        
   `-.T$$P`T$$P`     ");|.-`      /         
       "T         .-  ,-`         
        l _,     /    ;\.-"\               
        d$$bp.       /  ;   `-.            
        T"--"T     .`   : \_, :            
         Y""-  _.-"  `  ;  )` ;"-._        
        .:b..gdP    /  / .`  /     "-.     
       / `T$$P"   .` .`    .`         `.   
    _.-`.  \  \    .`   .-"             \  
  .`     "-.)_ `.-"  .-"                 ; 
 /            "-._.-"                    : 
'

# Get JS libs
mkdir -p public/js/lib
wget -O public/js/lib/jquery.min.js http://ajax.googleapis.com/ajax/libs/jquery/1.8.2/jquery.min.js
wget -O public/js/lib/lodash.min.js http://cdnjs.cloudflare.com/ajax/libs/lodash.js/0.8.2/lodash.min.js
wget -O public/js/lib/modernizr.min.js http://cloudnjs.cloudflare.com/ajax/libs/modernizr/2.6.2/modernizr.min.js

# Get jasmine-jquery
mkdir -p spec/helpers/
wget -O spec/helpers/jasmine-jquery.js http://cloud.github.com/downloads/velesin/jasmine-jquery/jasmine-jquery-1.3.1.js

# Get Normalize
mkdir -p sass/lib
wget -O sass/lib/normalize.scss https://raw.github.com/necolas/normalize.css/master/normalize.css

# Install node packages
npm install