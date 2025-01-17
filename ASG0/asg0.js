// DrawTriangle.js (c) 2012 matsuda
let ctx;
let canvas;
function main() {
  // Retrieve <canvas> element
  canvas = document.getElementById('example');
  if (!canvas) {
    console.log('Failed to retrieve the <canvas> element');
    return false;
  }

  // Get the rendering context for 2DCG
  ctx = canvas.getContext('2d');

  // Draw a black canvas
  ctx.fillStyle = 'rgba(0, 0, 0, 1.0)';               // Set color to black
  ctx.fillRect(0, 0, canvas.width, canvas.height);    // Fill a canvas with the color

  // instantiate vector v1 + drawVector
  let v1 = new Vector3([2.25, 2.25, 0]);
  drawVector(v1, "red");
}

function drawVector(v, color) {
  ctx.strokeStyle = color;
  ctx.beginPath();
  ctx.moveTo(canvas.width / 2, canvas.height / 2);
  ctx.lineTo(200 + v.elements[0] * 20, 200 - v.elements[1] * 20);
  ctx.stroke();
  }

function handleDrawEvent(){
  // empty canvas
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  // fill black canvas
  ctx.fillStyle = "rgba(0, 0, 0, 1.0)";
  ctx.fillRect(0, 0, canvas.width, canvas.height);
  // read Vector1 & Vector2 values
  let x1 = document.getElementById('x1').value;
  let y1 = document.getElementById('y1').value;
  let x2 = document.getElementById('x2').value;
  let y2 = document.getElementById('y2').value;
  // make new line
  let v1 = new Vector3([x1, y1, 0]);
  drawVector(v1, 'red');
  let v2 = new Vector3([x2, y2, 0]);
  drawVector(v2, 'blue');
}

function handleDrawOperationEvent(){
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  ctx.fillStyle = "rgba(0, 0, 0, 1.0)";
  ctx.fillRect(0, 0, canvas.width, canvas.height);
  let x1 = document.getElementById('x1').value;
  let y1 = document.getElementById('y1').value;
  let x2 = document.getElementById('x2').value;
  let y2 = document.getElementById('y2').value;
  let v1 = new Vector3([x1, y1, 0]);
  drawVector(v1, 'red');
  let v2 = new Vector3([x2, y2, 0]);
  drawVector(v2, 'blue');

  // read given value for operation
  let val = document.getElementById('operation').value;

  if(val === 'add'){
    v1.add(v2);
    drawVector(v1,'green')
  }
  else if(val === 'sub') {
    v1.sub(v2);
    drawVector(v1,'green')
  }
  else if(val === 'mul') {
    let scalar = document.getElementById('scalar').value;
    v1.mul(scalar);
    drawVector(v1, 'green');
    v2.mul(scalar);
    drawVector(v2, 'green');
  }
  else if(val === 'div') {
    let scalar = document.getElementById('scalar').value;
    v1.div(scalar);
    drawVector(v1, 'green');
    v2.div(scalar);
    drawVector(v2, 'green');
  }
  else if(val === 'mag') {
    console.log('v1 magnitude:', v1.magnitude());
    console.log('v2 magnitude:', v2.magnitude());
  }
  else if(val === 'norm') {
    v1.normalize();
    drawVector(v1, 'green');
    v2.normalize();
    drawVector(v2, 'green');
  }
  else if(val === 'angle') {
    angleBetween(v1,v2);
  }
  else if(val === 'area'){
    areaTriangle(v1,v2);
  }
}

function angleBetween(v1, v2){
  let angle = Math.acos(Vector3.dot(v1,v2)  / (v1.magnitude() * v2.magnitude())) * (180/Math.PI);
	console.log("Angle: ", angle);
}

function areaTriangle(v1, v2){
  let area = (Vector3.cross(v1, v2).magnitude()) / 2;
  console.log("Area of triangle: ", area);
}
