Mera_Yaar="";
Jugnu_Song="";

function setup(){
    canvas = createCanvas(600,450);
    canvas.center();

    video = createCapture(VIDEO);
    video.hide();
}

function preload(){
    Mera_Yaar = loadSound("Mera Yaar.mp3");
    Jugnu_Song = loadSound("Jugnu.mp3");
}

function draw(){
    image(video,0,0,600,450);
}

function play(){
    Jugnu_Song.play();
}