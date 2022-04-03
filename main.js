status="";
function preload() {
  video=createVideo('video.mp4');   
}

function setup() {
    canvas=createCanvas(470 , 370);
    canvas.center();
    video.hide();
}

function start() {
    objectDetector=ml5.objectDetector('cocossd',modelLoaded);
    document.getElementById("status").innerHTML="Status : Detecting Object";
}

function modelLoaded() {
    console.log('Model Loaded');
    status=true;
    video.loop();
    video.speed(1);
    video.volume(0);
}

function draw() {
    image(video , 0 ,0 , 470 , 380);
}