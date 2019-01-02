
function drawRectangle() {
  let height = 100
  let width = 100
  let xCoord = 250
  let yCoord = 250

  var rectAngle = document.getElementById('canvas2').getContext('2d');
  rectAngle.strokeRect(height, width, xCoord, yCoord);
}
