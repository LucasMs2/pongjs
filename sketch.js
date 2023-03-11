//Parâmetros da bola
let xBola = 400
let yBola = 250
let diametro = 18
let raio = diametro / 2 
let velocidadeXBola = 8
let velocidadeYBola = 8

//Parametros das raquetes
let largRaquete = 10
let altRaquete = 95
let xRaquete = 5
let yRaquete = 200
let xRaqueteAdv = 785
let yRaqueteAdv = 200
let hit = false 
let velRaqueteAdv

//placar do jogo
let meusPontos = 0;
let pontosDoOponente = 0;

function setup() {
  createCanvas(800, 500);
}

function draw() {
  background(0);
  desenhaBola()
  moviBola()
  desenhaRaquete(xRaquete, yRaquete)
  desenhaRaquete (xRaqueteAdv, yRaqueteAdv)
  moviRaquete()
  colisaoBorda()
  colisaoRaquete(xRaquete, yRaquete)
  colisaoRaquete(xRaqueteAdv, yRaqueteAdv)
  moviRaqueteAdv()
  incluiPlacar()
  marcaPonto()
  limiteRaqueteBorda()
  limiteRaqueteBordaAdv()
  
}

function desenhaBola(){
  circle(xBola, yBola, diametro)
}

function moviBola () {
  xBola += velocidadeXBola
  yBola += velocidadeYBola
}

function desenhaRaquete(x, y){
  rect(x, y, largRaquete, altRaquete)
}
function colisaoBorda (){
  if (xBola > width - raio || xBola < 0 + raio) {
    velocidadeXBola *= -1
  }
  if (yBola > height - raio || yBola < 0 + raio) {
      velocidadeYBola *= -1
      }
  }

function moviRaquete (){
  if (keyIsDown(UP_ARROW)) {
    yRaquete -= 10
  }
  
  if (keyIsDown(DOWN_ARROW)){
    yRaquete += 10;
  }
}
function colisaoRaquete (x, y){
   hit = collideRectCircle(x, y, largRaquete, altRaquete, xBola, yBola, raio)
  if (hit) {
    velocidadeXBola *= -1
  }
}
   
function moviRaqueteAdv() {
  velRaqueteAdv = yBola - yRaqueteAdv - altRaquete / 2 - 50
  yRaqueteAdv += velRaqueteAdv
}

function incluiPlacar(){
  stroke(255);
  textAlign(CENTER);
  textSize(16);
  fill(color(128,128,128));   //comando para pintar
  rect(150, 10, 40, 20);   //posição x, posição y, largura, comprimento
  fill(255);
  text(meusPontos, 170, 26);
  fill(color(128,128,128));
  rect(450, 10, 40, 20);
  fill(255);
  text(pontosDoOponente, 470, 26);
}

function marcaPonto() {
  if (xBola > 790){
    meusPontos += 1;
  }
  if (xBola < 10){
    pontosDoOponente += 1;
  }
}

function limiteRaqueteBordaAdv() {
  if(yRaquete < 0) {
    yRaquete = -1
  }
  if (yRaquete + altRaquete>= 500){ 
      yRaquete = 500 - altRaquete
  }
}
function limiteRaqueteBorda() {
  if(yRaqueteAdv < 0) {
    yRaqueteAdv = -1
  }
  if (yRaqueteAdv + altRaquete>= 500){ 
      yRaqueteAdv = 500 - altRaquete
  }
}

