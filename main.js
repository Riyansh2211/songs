song="";
song2="";
leftwristY=0;
leftwristX=0;
rightwristX=0;
rightwristY=0;

function setup()
{
    canvas= createCanvas(600.500);
    canvas.center();

    video= createCapture(VIDEO);
    video.hide();

    poseNet= ml5.poseNet(video, modelLoaded);
    poseNet.on('poses', gotPoses);
}

function modelLoaded()
{
    console.log("PoseNet is initialized!!");
}

function draw()
{
    image(video,0,0,600,500);
}

function preload()
{
    song= loadSound("i.webm");
    song2= loadSound("op.mp3");

}   

function play()
{
    if(rightwristY >=100 , rightwristX >= 100)
    {
        song.play();
    }

    if(leftwristX >=100 , leftwristY >=100)
    {
        song2.play();
    }
}

function gotPoses()
{
    If(results.length >0)
    {
        console.log(results)

        leftwristX= results[0].pose.leftwrist.x;
        leftwristY= results[0].pose.leftwrist.y;
        console.log("Left wrist X= "+leftwristX+"Left wrist Y="+leftwristY);

        rightwristX= results[0].pose.rightwrist.x;
        rightwristY= results[0].pose.rightwrist.y;
        console.log("Right wrist X= "+rightwristX+"Right wrist Y="+rightwristY);

    }
}