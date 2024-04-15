// DrawRectangle.js
function main() {
  // Retrieve <canvas> element <- (1)
  canvas = document.getElementById('cnv1');
  if (!canvas) {
    console.log('Failed to retrieve the <canvas> element');
    return;
  }

  // Get the rendering context for 2DCG <- (2)
  ctx = canvas.getContext('2d');
  
  // Draw a blue rectangle <- (3)
  ctx.fillStyle = 'rgba(0, 0, 0, 1.0)'; // Set a blue color
  ctx.fillRect(0, 0, canvas.width, canvas.height); // Fill a rectangle with the color

  let v1 = new Vector3([2.25, 2.25, 0]);

  // drawVector(v1, "red"); - part 2

}

function drawVector(v, color){
  let cx = canvas.width/2;
  let cy = canvas.height/2;

  scale = 20

  ctx.strokeStyle = color;
  ctx.beginPath();
  ctx.moveTo(cx, cy);
  ctx.lineTo(cx+v.elements[0]*scale, cy-v.elements[1]*scale);
  ctx.stroke();
}


function handleDrawEvent(){

  // clear canvas
  ctx.fillStyle = 'rgba(0, 0, 0, 1.0)';
  ctx.fillRect(0, 0, canvas.width, canvas.height);


  let xVal = document.getElementById("xVal").value;
  // console.log(xVal);
  let yVal = document.getElementById("yVal").value;
  // console.log(yVal);

  let xVal2 = document.getElementById("xVal2").value;
  // console.log(xVal2);
  let yVal2 = document.getElementById("yVal2").value;
  // console.log(yVal2);


  let v1 = new Vector3([xVal, yVal, 0]);
  let v2 = new Vector3([xVal2, yVal2, 0]);

  drawVector(v1, "red");
  drawVector(v2, "blue");
}

function angleBetween(v1, v2){
  // find the angle between the two vectors using the dot function
  let dot = Vector3.dot(v1, v2);
  let mag1 = v1.magnitude();
  let mag2 = v2.magnitude();
  let angle = Math.acos(dot/(mag1*mag2));
  angle = angle * (180/Math.PI);
  return angle;
}

function areaTriangle(v1, v2){
  // find the area of the triangle using the cross product
  let cross = Vector3.cross(v1, v2);
  let area = cross.magnitude() * 0.5;
  return area;

}


function handleDrawOperationEvent(){
  // clear canvas
  ctx.fillStyle = 'rgba(0, 0, 0, 1.0)';
  ctx.fillRect(0, 0, canvas.width, canvas.height);

  let xVal = document.getElementById("xVal").value;
  // console.log(xVal);
  let yVal = document.getElementById("yVal").value;
  // console.log(yVal);

  let xVal2 = document.getElementById("xVal2").value;
  // console.log(xVal2);
  let yVal2 = document.getElementById("yVal2").value;
  // console.log(yVal2);


  let v1 = new Vector3([xVal, yVal, 0]);
  let v2 = new Vector3([xVal2, yVal2, 0]);

  drawVector(v1, "red");
  drawVector(v2, "blue");

  let selection = document.getElementById("selector").value;
  // console.log(selection);

  let scalar = document.getElementById("scalar").value;
  scalar = parseFloat(scalar);
  // console.log(scalar);

  // selections can be add, sub, mul, or div
  let result = new Vector3();
  let result2 = new Vector3();
  if(selection == "add"){
    result = v1.add(v2);
  } else if(selection == "sub"){
    result = v1.sub(v2);
  } else if(selection == "mul"){
    result = v1.mul(scalar);
    result2 = v2.mul(scalar);
  } else if(selection == "div"){
    result = v1.div(scalar);
    result2 = v2.div(scalar);
  }
  else if(selection == "mag"){
    let mag1 = v1.magnitude();
    let mag2 = v2.magnitude();
    console.log("Magnitude V1: " + mag1);
    console.log("Magnitude V2: " + mag2);
  }
  else if(selection == "norm"){
    result = v1.normalize();
    result2 = v2.normalize();
  }
  else if(selection == "ang"){
    let angle = angleBetween(v1, v2);
    console.log("Angle: " + angle);
  }
  else if(selection == "area"){
    let area = areaTriangle(v1, v2);
    console.log("Area of the triangle: " + area);
  }

  drawVector(result, "green");
  drawVector(result2, "green");



}