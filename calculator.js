let str = "";

function display1() {
  var div = document.getElementById("output");
  str += "1"
  div.innerHTML = str;
}

function display2() {
  var div = document.getElementById("output");
  str += "2"
  div.innerHTML = str;
}

function display3() {
  var div = document.getElementById("output");
  str += "3"
  div.innerHTML = str;
}

function display4() {
  var div = document.getElementById("output");
  str += "4"
  div.innerHTML = str;
}

function display5() {
  var div = document.getElementById("output");
  str += "5"
  div.innerHTML = str;
}

function display6() {
  var div = document.getElementById("output");
  str += "6"
  div.innerHTML = str;
}

function display7() {
    var div = document.getElementById("output");
    str += "7"
    div.innerHTML = str;
}

function display8() {
    var div = document.getElementById("output");
    str += "8"
    div.innerHTML = str;
}

function display9() {
    var div = document.getElementById("output");
    str += "9"
    div.innerHTML = str;
}

function display0() {
    var div = document.getElementById("output");
    str += "0"
    div.innerHTML = str;
}

function ac() {
    var div = document.getElementById("output");
    div.innerHTML = 0;
    str = "";
}

function displayAdd() {
  var div = document.getElementById("output");
  str += "+"
  div.innerHTML = str;
}

function displaySubtract() {
  var div = document.getElementById("output");
  str += "-"
  div.innerHTML = str;
}

function displayMult() {
  var div = document.getElementById("output");
  str += "*"
  div.innerHTML = str;
}

function displayDivide() {

}

function displayLeftParent() {

}

function displayRightParent() {

}

function equalSign (){
  var div = document.getElementById("output");
  str = eval(str)
  div.innerHTML = str;
}
