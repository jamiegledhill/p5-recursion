let maxLevel = 8;
let minLevel = 0
let delay = 250;
function setup() {
    createCanvas(windowWidth, windowHeight)
    console.log(innerHeight)
    stroke(255)
    noFill()
    drawCircle(width / 2, height/2, width/4, maxLevel );
    // timer = setInterval(drawCircle, 100, 400, 400, 400, maxLevel)
    noLoop(); 
}
  
function drawCircle(x, y, radius, level) {
    // 'level' is the variable that terminates the recursion once it reaches 
    // a certain value (here, 1). If a terminating condition is not 
    // specified, a recursive function keeps calling itself again and again
    // until it runs out of stack space - not a favourable outcome! 
    // const fillValue = (255/maxLevel) * level
    // fill(fillValue);
    ellipse(x, y, radius);
    if (level > minLevel) {  
      // 'level' decreases by 1 at every step and thus makes the terminating condition
      // attainable
      level--;
      setTimeout(drawCircle, delay, x + radius / 2, y, radius / 2, level);
      setTimeout(drawCircle, delay, x - radius / 2, y, radius / 2, level);
      setTimeout(drawCircle, delay, x, y+ radius / 2, radius / 2, level);
      // drawCircle(x + radius / 2, y, radius / 2, level);
      // drawCircle(x - radius / 2, y, radius / 2, level);
      // drawCircle(x, y+ radius / 2, radius / 2, level);
    }
  }