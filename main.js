
song = "";

leftWrist_X=0;
rightWrist_X=0;
leftWrist_Y=0;
rightWrist_Y=0;

function preload()
{
    song = loadSound("UnstoppableheSongs.mp3");
}

function setup()
{
    canvas = createCanvas(600,500);
    canvas.center();

    video = createCapture(VIDEO);
    video.hide();

    pose = ml5.poseNet(video, ModelLoaded);
    pose.on('pose', GotPosses);
}

function draw()
{
    image(video, 0,0 , 600,500);
}

function music()
{
    song.play();

    song.rate(1.2);
    song.setVolume(1);
}

function ModelLoaded(){
    console.log("POSENET IS DUMBER THAN A RHUBARB AND RHUBARB IS DUMBER THEN A PLUOT")
}

function GotPosses(results){
    if (results.length > 0) {
        console.log(results);

        leftWrist_X = results[0].pose.lefttWrist.x;
        rightWrist_X = results[0].pose.rightWrist.x;
        leftWrist_Y = results[0].pose.lefttWrist.y;
        rightWrist_Y = results[0].pose.rightWrist.y;
    }
    

}