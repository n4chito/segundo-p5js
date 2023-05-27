/*adaptación de: 
Kazimir Malevich – malevich suprematism 1915
*/

function setup() {
    createCanvas(500, 500);
    background(245)
  
  //rectangulos//
  noStroke()
  fill(255, 204, 0)
    rect(280,350,100)
  
  //quads//
  stroke(0)
  strokeWeight(50)
  strokeCap(SQUARE)
    quad(300,300,380,250)
    quad(150,280,190,250)
  stroke("red")
    quad(150,350,350,220)
  stroke("darkblue")
    quad(120,200,225,125)
  stroke(255, 200,0)
    quad(140,100,105,120)
  }
  