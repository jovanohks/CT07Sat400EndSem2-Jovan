let bird
let background, birdImg;

function preload(){
    // write code to preload bird.png and background.png
    // refer to assets folder
    background = loadImage('assets/background.png'); //background
    birdImg = loadImage('assets/bird.png'); //preload bird image
}

function setup(){
    new Canvas(400, 600);
    // write code to create sprite and load bird image on sprite
    bird = new Sprite(); // create bird sprite
    bird.img = birdImg; 
}

function draw(){
    image(background, 0, 0, width, height);
}

