let str = "";
var stat = 0;

function display1() {
  if (stat == 1) {
    str = "1";
    stat = 0;
  } else {
    str += "1"
    stat = 0;
}
var div = document.getElementById("output");
div.innerHTML = str;
}

function display2() {
  if (stat == 1) {
    str = "2";
    stat = 0;
  } else {
    str += "2"
    stat = 0;
}
  var div = document.getElementById("output");
  div.innerHTML = str;
}

function display3() {
  if (stat == 1) {
    str = "3";
    stat = 0;
  } else {
    str += "3"
    stat = 0;
}
  var div = document.getElementById("output");
  div.innerHTML = str;
}

function display4() {
  if (stat == 1) {
    str = "4";
    stat = 0;
  } else {
    str += "4"
    stat = 0;
}
  var div = document.getElementById("output");
  div.innerHTML = str;
}

function display5() {
  if (stat == 1) {
    str = "5";
    stat = 0;
  } else {
    str += "5"
    stat = 0;
}
  var div = document.getElementById("output");
  div.innerHTML = str;
}

function display6() {
  if (stat == 1) {
    str = "6";
    stat = 0;
  } else {
    str += "6"
    stat = 0;
}
  var div = document.getElementById("output");
  div.innerHTML = str;
}

function display7() {
  if (stat == 1) {
    str = "7";
    stat = 0;
  } else {
    str += "7"
    stat = 0;
}
    var div = document.getElementById("output");
    div.innerHTML = str;
}

function display8() {
  if (stat == 1) {
    str = "8";
    stat = 0;
  } else {
    str += "8"
    stat = 0;
}
  var div = document.getElementById("output");
  div.innerHTML = str;
}

function display9() {
  if (stat == 1) {
    str = "9";
    stat = 0;
  } else {
    str += "9";
    stat = 0;
}
  var div = document.getElementById("output");
  div.innerHTML = str;
}

function display0() {
  if (stat == 1) {
    str = "0";
    stat = 0;
  } else {
    str += "0"
    stat = 0;
}
    var div = document.getElementById("output");
    div.innerHTML = str;
}

function ac() {
    var div = document.getElementById("output");
    div.innerHTML = 0;
    str = "";
    stat = 0;
}

function displayAdd() {
  var div = document.getElementById("output");
  str += "+"
  div.innerHTML = str;
  stat = 0;
}

function displaySubtract() {
  var div = document.getElementById("output");
  str += "-"
  div.innerHTML = str;
  stat = 0;
}

function displayMult() {
  var div = document.getElementById("output");
  str += "*"
  div.innerHTML = str;
  stat = 0;
}

function displayDivide() {
  var div = document.getElementById("output");
  str += "/"
  div.innerHTML = str;
  stat = 0;
}

function displayLeftParent() {
  var div = document.getElementById("output");
  str += "("
  div.innerHTML = str;
  stat = 0;
}

function displayRightParent() {
  var div = document.getElementById("output");
  str += ")"
  div.innerHTML = str;
  stat = 0;
}

function displayDecimal() {
  var div = document.getElementById("output");
  str += "."
  div.innerHTML = str;
  stat = 0;
}

function equalSign (){
  var div = document.getElementById("output");
  str = eval(str)
  div.innerHTML = str;
  stat = 1;
}
