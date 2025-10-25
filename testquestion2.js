
let square;

function setup(){
    new Canvas(400, 600);
   
    // code to set the gravity of the world
    world.gravity.y = 5; // gravity
    // code to create a new square sprite
    square = new Sprite(); //make square
}

function draw(){
    background("grey"); 
    if (mouse.presses()){
        square.velocity.y = -5;

    }
    //mouse pressed, velocity = -5 so sprite goes up.
    // code to check if mouse is pressed i.e. mouse.presses()
        // if mouse is pressed, the square sprite "flies" up
}
