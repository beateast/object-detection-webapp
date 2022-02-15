img = "";
sta = "";

function preload() {
    img = loadImage('ac_tv.png');
}
function setup() {
    canvas = createCanvas(640, 420);
    canvas.center();
    objectdetecter = ml5.objectdetecter(cocossd, modeLoaded);
    document.getElementById("sta").innerHTML = "sta = Detecting Object";
}

function modeLoaded() {
    console.log("Posnet is Intialized");
    sta = true;
    objectdetecter.detect(img, gotresult);
}

function gotresult(result, error) {
    if(error)
    {
        console.log(error);
    }
    console.log(result);
}

function draw() {
    image(image, 0, 0, 640,420);
    fill("FF0000");
    text("Tv", 45, 65);
    noFill();
    rect(30, 60, 450, 350);

    fill("FF0000");
    text("Ac", 45, 65);
    noFill();
    rect(300, 90, 270, 320);
}