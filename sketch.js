let cor
let posicaoHorizontal;
let posicaoVertical;
let tamanho;

function setup() {
  createCanvas(600,600);
  background("pink");
  cor =color(random(0, 255), random(0, 255), random(0, 255))
  posicaoHorizontal = 300;
  posicaoVertical = 300;
  tamanho = 55;
  
}


function draw() {
  fill(cor)
  circle(posicaoHorizontal, posicaoVertical, tamanho)

if(mouseX < posicaoHorizontal) {
  posicaoHorizontal -=1
}
if(mouseX > posicaoHorizontal){
    posicaoHorizontal +=1
  }
  
  if(mouseY > posicaoVertical){
    posicaoVertical += 1
  }
  if(mouseY < posicaoVertical){
    posicaoVertical -= 1
  }
  if(mouseIsPressed){
    cor= color(random(0,255), random(0,255), random(0,255), random(0,100))
  }
}