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

read -p "Creating a folder for your new project, give it a name: " foldername

read -p "This will download boilerplizzle into '"$foldername"'', then run 'npm install'. That cool? [Yn] "
if [[ ! $REPLY =~ ^[Nn]$ ]]
then
  wget -O tmp-boilerplizzle.zip https://github.com/bensmithett/boilerplizzle/zipball/master/
  unzip tmp-boilerplizzle.zip
  rm tmp-boilerplizzle.zip
  mv bensmithett-boilerplizzle* $foldername
  cd $foldername
  npm install
  echo "Your new project is set up! Run 'grunt' to fire up the server & Compass/Coffee compilation."
else
  echo "Alrighty, see you next time then."
fi