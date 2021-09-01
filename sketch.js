var ball;
var database
var position
function setup() {
  createCanvas(500, 500);
  ball = createSprite(250, 250, 10, 10);
  ball.shapeColor = "red";
  database = firebase.database()
  var ballpositionref = database.ref("position")
  ballpositionref.on("value",function(data){
  position = data.val()
  console.log(position.x)
  ball.x = position.x
  ball.y = position.y
  })
}

function draw() {
  background("white");
  if (keyDown(LEFT_ARROW)) {
    writedatabase(-5,0)
  } else if (keyDown(RIGHT_ARROW)) {
    writedatabase(5,0)
  } else if (keyDown(UP_ARROW)) {
    writedatabase(0,-5)
  } else if (keyDown(DOWN_ARROW)) {
    writedatabase(0,5)
  }
  edges = createEdgeSprites();
  ball.collide(edges);
  drawSprites();
}

function writedatabase(h,v){
  database.ref("position").update({
    x : position.x + h,
    y : position.y + v
  })
}
