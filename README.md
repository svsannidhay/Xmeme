# Xmeme

## Overview 
> A Meme sharing platform, in which you can share memes by providing meme url and captions along with your name. 

##Deployment :  <a href="https://svsannidhay.github.io/Line_Encoder/" target = "_blank" >X M E M E</a>
> Frontend is hosted on Firebase : https://xmeme-frontend-f18dd.web.app <br>
> Backend is hosted on Heroku : https://xmeme-server3.herokuapp.com/  <br>

##Tech Stack used
> MERN Stack <br>
> MonogoDb Atlas as our Database for deployed version.<br>
> Express and node js for backend.<br>
> React js and vanilla CSS for our frontend.<br>

## Folder structure explained : 
> Root folder contains two folders client and server. <br>
### client folder :
> It contains all the front end code.<br>
> In the src directory we have the root component index.js which renders App.js which in turn renders two components Header.js and PostAndMemes.js.<br>
> Header.js is present in /src/components along with Header.css.<br>
> In the src directory there is a parent componenet PostAndMemes.js which in turn renders two components PostForm.js and MemeCards.js.<br>
> PostForm.js and MemeCards.js are present in /src/componenrs along with PostForm.css and MemeCard.css.<br>
### server folder :
> We have models which contains the data base models in this case dbCards.js which contains our dataBase schema.<br>
> We have index.js which is express server for setting up api endpoints.<br>

###Dependencies : 
####Frontend : 
> React<br>
> axios<br>
####Backend : 
> Express<br>
> Mongoose<br>
> nodemon<br>
> cors<br>
