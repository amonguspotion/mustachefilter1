nose_x = 0;
nose_y = 0;


function preload() {
    mustache_filter = loadImage('https://i.postimg.cc/nrfhHf37/mustache.webp')
}

function setup() {
    canvas = createCanvas(300, 300);
    canvas.center();
    video = createCapture(VIDEO);
    video.size(300, 300);
    video.hide();

    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
}

function modelLoaded() {
    console.log('PoseNet Is Initialized')
}

function gotPoses(results) {
    if(results.length > 0)
    {
        nose_x = results[0].pose.nose.x;
        nose_y = results[0].pose.nose.y;
    }
}

function draw(){
    image(video, 0, 0, 300, 300);
    image(mustache_filter, nose_x - 15, nose_y, 30, 30)
}

function take_snapshot(){
    save('myFilteredImage.png')
}