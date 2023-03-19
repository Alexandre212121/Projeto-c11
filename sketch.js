//declarando as variáveis
var ship, shipMovement
var sea, seaImg

//preload carrega as mídias do jogo
function preload(){
  shipMovement = loadAnimation("barco2.png", "barco3.png", "barco4.png")
  seaImg = loadImage ("mar.png")
}


//setup faz a configuração
function setup(){
  createCanvas(400,400)

  
  
  sea = createSprite(200,200,400,20)
  sea.addImage("sea1", seaImg)
  sea.velocityX = -2
  sea.scale = 0.3
 
  ship = createSprite(200, 250,400,50)
  ship.addAnimation("movement", shipMovement)
  ship.scale = 0.07
}

//draw faz o movimento, a ação do jogo
function draw(){
  


if(sea.x < 0) {
  sea.x = 200
}


 

  drawSprites();
  
}

