var kitchen , kimchi;
var cabbage,carrots,SO,chilli,garlic,ginger,salt,sauce;

function preload(){
  BG = loadImage("photo.jpg");
  food = loadImage("kimchi.gif");
  /////////
  C =loadImage("cabbage.jpg");
  CA =loadImage("Carrots.jpg")
  S =loadImage("SO.jpg");
  CI =loadImage("chilli.jpg");
  G =loadImage("garlic.jpg");
  GI =loadImage("ginger.jpg");
  SA =loadImage("salt.jpg");
  SAC =loadImage("sauce.jpg");
  
}

function setup() {
  createCanvas(1000, 1000);
  
  kitchen = createSprite(500,500);
  kitchen .addImage(BG);
  kitchen .scale=2.5;
  
  kimchi = createSprite(500,500);
  kimchi.addImage(food);
  kimchi.scale = 2;
  
  cabbage = createSprite(95,150);
  cabbage.addImage(C);
  cabbage.scale=0.8;
  
  carrots = createSprite(330,150);
  carrots.addImage(CA);
  carrots.scale=0.35;
  
  SO = createSprite(590,150);
  SO.addImage(S);
  SO.scale=0.23;
  
  chilli = createSprite(850,150);
  chilli.addImage(CI);
  chilli.scale=0.4;
  
  garlic = createSprite(150,850);
  garlic.addImage(G);
  garlic.scale=0.2;
  
  ginger = createSprite(400,850);
  ginger.addImage(GI);
  ginger.scale=0.3; 
  
  salt = createSprite(600,850);
  salt.addImage(SA);
  salt.scale=0.26; 
  
  sauce = createSprite(850,850);
  sauce.addImage(SAC);
  sauce.scale=0.17; 
  
  
  
  
}

function draw() {
  background("green");
  drawSprites();
}