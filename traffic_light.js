function redOn() {
  clearLights();
  document.getElementById('redLight').style.backgroundColor = "red";
}

function yellowOn() {
  clearLights();
  document.getElementById('yellowLight').style.backgroundColor = "yellow";
}

function greenOn() {
  clearLights();
  document.getElementById('greenLight').style.backgroundColor   = "green";
}

function clearLights() {
  document.getElementById('redLight').style.backgroundColor = "black";
  document.getElementById('yellowLight').style.backgroundColor = "black";
  document.getElementById('greenLight').style.backgroundColor   = "black";
}