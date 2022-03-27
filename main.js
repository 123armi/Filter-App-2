noseX = 0;
noseY = 0;

function preload()
{}

function setup()
{
    canvas = createCanvas(400, 400);
    canvas.center();

    video = createCapture(VIDEO);
    video.hide();

    poseNet = ml5.poseNet (video, modelLoaded);
}

function modelLoaded()
{
    console.log('poseNet is intialized');
    poseNet.on('pose', gotPoses);
}

function gotPoses(results)
{
    if (results.length > 0)
    {
        console.log(results);
        noseX = results[0].pose.nose.x;
        noseY = results[0].pose.nose.y;
        console.log("nose x =" + noseX);
        console.log("nose y =" + noseY);
    }
}

function draw()
{
    image(video, 0, 0, 600, 500);
}

function take_snapshot()
{}