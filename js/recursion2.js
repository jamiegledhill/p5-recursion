let maxLevel = 6;
let minLevel = 0
let currHeight = 0;
let brown1;
let brown2;
let slider;
function setup() {
  createCanvas(windowWidth, windowHeight);
  angleMode(DEGREES)
  noLoop()
  brown1 = color('#655339');
  brown2 = color('#4d4612');
  green = color('#144e1b')
  slider = createSlider(10, 90, 45);
  slider.position(10, windowHeight - 40);
  slider.style('width', '200px'); 
  slider.input(draw);
}

function draw() {
  background(220);
  resetMatrix()
  count = maxLevel;
  translate(windowWidth/2, windowHeight)
  branch(250, count)
}
function branch(len, count){
  let maxAngle = slider.value()
  strokeWeight(map(len, 0, 300, 0, 10))
  stroke(lerpColor(brown1, brown2, random(1)))
  // stroke()
  line(0,0,0, -len)
  translate(0, -len)
  if(--count >= minLevel){
    if (count == minLevel){
      let s = 15;
      let r = 90 + random(-20, 20)
      let g = 200 + random(-20, 20)
      let b = 50+ random(-20, 20)
      fill(r, g, b, 100)
      noStroke()
      // triangle(-s/2, 0, s/2, 0, -0, -s)
      beginShape()
      let rad = random(10, 30)
      for(let i = 45; i < 135; i++){
        let x = rad * cos(i);
        let y = rad * sin(i)
        vertex(x, y)
      }
      for(let i = 135; i > 45; i--){
        let x = rad * cos(i);
        let y = rad * sin(-i) + 10;
        vertex(x, y)
      }
      endShape(CLOSE)
    }else{
      
      push()
      rotate(random(-maxAngle, maxAngle))
      branch(len*.77, count)
      pop() 
      push()
      rotate(random(-maxAngle, maxAngle))
      branch(len*.77, count)
      pop();
      push()
      rotate(random(-maxAngle, maxAngle))
      branch(len*.77, count)
      pop();
      push()
      rotate(random(-maxAngle, maxAngle))
      branch(len*.77, count)
      pop();
    }
  }
}
