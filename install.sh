#!/bin/bash

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

read -p "This will download the boilerplizzle project boilerplate into this folder, then run 'bundle install' and 'npm install'. That cool? [Yn] "
if [[ ! $REPLY =~ ^[Nn]$ ]]
then
  curl -L -o tmp-boilerplizzle.zip https://github.com/bensmithett/boilerplizzle/zipball/master/
  unzip tmp-boilerplizzle.zip
  rm tmp-boilerplizzle.zip
  mv bensmithett-boilerplizzle* .
  bundle install
  npm install
  echo -e "\n\nDone! Your new boilerplizzle project is ready to go!\n\n"
  echo -e "Run 'grunt' to get started."
else
  echo "Alrighty, see you next time then."
fi
