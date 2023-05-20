function preload(){

}

function setup(){
    canvas=createCanvas(640, 480);
    canvas.position(110, 250);

    video=createCapture(VIDEO);
    video.hide();

    tint_color="";
}

function draw(){
    image(video, 180, 100, 300, 300);
    tint(tint_color);
    
    fill('GreenYellow');
    stroke('Aquamarine');
    strokeWeight(4);
    circle(50,50,50);
    circle(450,450,20,20);
    circle(10,10,25,25);
    rect(100,100,60,20);
    rect(125,325,50,50);
    rect(500,100,60,60);
    fill('Yellow');
    stroke('Red');
    circle(350,100,30,30);
    rect(100,100,60,20);
}

function filter_tint(){
    tint_color=document.getElementById("Nombre_color").value;
}

function take_snapshot(){
    save('Alex.png');
}