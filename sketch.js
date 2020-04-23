
/***

https://p5js.org/examples/image-load-and-display-image.html
https://gist.github.com/lizzybrooks/54045563e4e8321718cc40297db999f9

template from from https://github.com/joyceeexinyiwang/EDU_interactive


videos playing... a hand (transparent, showing a new place in the house) pops up, gesturing at you to follow ... you click on it and it takes you into its world

***/

let button;
let video_paths;
let n_videos;
let videos;
let cur;

let gif_paths;
let n_gifs;
let gifs;
let img;

// function preload() {
//   video_paths = [];
//   var img = createImg("vegetables.gif");
//   video_paths.push("assets/couch_1.mp4");
//   video_paths.push("assets/bed.mp4");
//   video_paths.push("assets/oranges.mp4");
//   video_paths.push("assets/shelf.mp4");
//   video_paths.push("assets/tea.mp4");
//   n_videos = 5;

//   videos = [];
//   console.log("loading videos ");

//   for (var i = 0; i < n_videos; i++) {
//     var v = createVideo(video_paths[i]);
//     v.size(3840);
//     v.hide();
//     v.loop();
//     v.pause();
//     videos.push(v);
//     console.log("loading video " + video_paths[i]);
//   }

//   cur = 0;
// }

function preload() {
  gif_paths = [];

  gif_paths.push("assets/couch_1.gif");
  gif_paths.push("assets/orange_1.gif");
  gif_paths.push("assets/plant_2.gif");
  gif_paths.push("assets/sink_2.gif");
  gif_paths.push("assets/window_2.gif");
  gif_paths.push("assets/bed_1.gif");
  gif_paths.push("assets/couch_2.gif");
  gif_paths.push("assets/orange_2.gif");
  gif_paths.push("assets/shelf_1.gif");
  gif_paths.push("assets/tea_1.gif");
  gif_paths.push("assets/bed_2.gif");
  gif_paths.push("assets/couch_3.gif");
  gif_paths.push("assets/orange_3.gif");
  gif_paths.push("assets/shelf_2.gif");
  gif_paths.push("assets/tea_2.gif");
  gif_paths.push("assets/bed_3.gif");
  gif_paths.push("assets/desk_1.gif");
  gif_paths.push("assets/orange_4.gif");
  gif_paths.push("assets/shelf_3.gif");
  gif_paths.push("assets/tea_3.gif");
  gif_paths.push("assets/bed_4.gif");
  gif_paths.push("assets/hall.gif");
  gif_paths.push("assets/plant_1.gif");
  gif_paths.push("assets/sink_1.gif");
  gif_paths.push("assets/window_1.gif");

  n_gifs = 25;

  gifs = [];
  console.log("loading gifs...");

  for (var i = 0; i < n_gifs; i++) {
    var img = createImg(gif_paths[i]);
    img.hide();
    gifs.push(img);
  }

  cur = 0;

}

function setup() {
  createCanvas(windowWidth, windowHeight);  
  frameRate(24);
  gifs[cur].show(0);
}

function draw() {
  background(255);
  imageMode(CENTER);
  // img.position(windowWidth/2, windowHeight/2);
  // image(img, windowWidth/2, windowHeight/2);
  gifs[cur].position(0, 0);
  if (width/height > 3860/2160) {
    gifs[cur].size(width, width*2160/3860);
    // image(gifs[cur], width/2, height/2, width, width*2160/3860); // draw the video frame to canvas
  } else {
    gifs[cur].size(height*3860/2160, height);
    // image(gifs[cur], width/2, height/2, height*3860/2160, height); // draw the video frame to canvas
  }
}

function mousePressed() {
  playNewVideo();
}

function playNewVideo() {
  // let newv = (cur+1)%5;
  // // let p = video_paths[cur];
  // // console.log(p);
  // // screen = createVideo(p);
  // // screen.size(3840);
  // // screen.hide(); // by default video shows up in separate dom
  // // // element. hide it and draw it to the canvas
  // // // instead
  // videos[newv].loop();
  // videos[cur].pause();
  // cur = newv;
  gifs[cur].hide();
  cur = (cur+1)%n_gifs;
  gifs[cur].show();
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}
