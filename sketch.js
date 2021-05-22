var ball;
var database;
var position;
var gameState=0;
var playerCount=0;
var form,game,player;
var allPlayers;
var car1,car2,car3,car4,cars;
//firebase.database.ref() or firebase.database.ref("child/path")

//read---> .on()


function setup(){
    createCanvas(displayWidth,displayHeight);

    //create our database
    database = firebase.database();
    
    game=new Game();
    game.getState();
    game.start();
    
    
}

function draw(){
    background("white");

    if(playerCount===4){
        game.update(1)
    }
    if(gameState===1){
        game.play();
    }

}

