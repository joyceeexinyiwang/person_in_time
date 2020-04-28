
/***

https://p5js.org/examples/image-load-and-display-image.html
https://gist.github.com/lizzybrooks/54045563e4e8321718cc40297db999f9

template from from https://github.com/joyceeexinyiwang/EDU_interactive


HOW TO GET RID OF THE JITTERS?


***/

let cur;

let gif_paths;
let n_gifs;
let gifs;
let img;
let waitTime;
let lastClick;


function preload() {
  gif_paths = [];

  // gif_paths.push("assets/output.webp");
  gif_paths.push("assets/sink_1.gif");
  gif_paths.push("assets/couch_1.gif");
  gif_paths.push("assets/hall.gif");
  gif_paths.push("assets/orange_1.gif");
  // gif_paths.push("assets/plant_2.gif");
  // gif_paths.push("assets/sink_2.gif");
  // gif_paths.push("assets/window_2.gif");
  gif_paths.push("assets/bed_1.gif");
  // gif_paths.push("assets/couch_2.gif");
  // gif_paths.push("assets/orange_2.gif");
  gif_paths.push("assets/shelf_1.gif");
  gif_paths.push("assets/tea_1.gif");
  // gif_paths.push("assets/bed_2.gif");
  // gif_paths.push("assets/couch_3.gif");
  // gif_paths.push("assets/orange_3.gif");
  gif_paths.push("assets/shelf_2.gif");
  // gif_paths.push("assets/tea_2.gif");
  // gif_paths.push("assets/bed_3.gif");
  gif_paths.push("assets/desk_1.gif");
  // gif_paths.push("assets/orange_4.gif");
  // gif_paths.push("assets/shelf_3.gif");
  // gif_paths.push("assets/tea_3.gif");
  // gif_paths.push("assets/bed_4.gif");
  gif_paths.push("assets/plant_1.gif");
  gif_paths.push("assets/sink_1.gif");
  gif_paths.push("assets/window_1.gif");

  n_gifs = 12;

  gifs = [];
  console.log("loading gifs...");

  for (var i = 0; i < n_gifs; i++) {
    var img = createImg(gif_paths[i]);
    img.hide();
    gifs.push(img);
  }

  cur = 0;

  waitTime = 3*1000; // wait at least 5 seconds before next click;

}

function setup() {
  createCanvas(windowWidth, windowHeight);  
  frameRate(24);
  lastClick = millis();
}

function draw() {
  background(255);
  imageMode(CENTER);
  gifs[cur].position(0, 0);
  if (width/height > 3860/2160) {
    gifs[cur].size(width, width*2160/3860);
  } else {
    gifs[cur].size(height*3860/2160, height);
  }
}

function mousePressed() {
  playNewVideo();
}

function playNewVideo() {
  curTime = millis();
  if (curTime < lastClick + waitTime) return;
  var newcur = (cur+1)%n_gifs;
  gifs[newcur].show();
  gifs[(newcur+n_gifs-3)%n_gifs].hide();
  cur = newcur;
  lastClick = curTime;
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}
