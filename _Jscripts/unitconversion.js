function getFocus()
{
    document.getElementById("value").focus();
    document.getElementById("answer").innerHTML = "";
}
//var Inpvalue = document.getElementById("value").value;
//var answer = document.getElementById("answer");
function otm()
{
    var Inpvalue = document.getElementById("value").value;
    var answer = document.getElementById("answer");
    var result = Inpvalue * 29.5735;
    answer.innerHTML = "Answer: " + result.toFixed(2);
    answer.style.color = "red";
}
function mto()
{
    var Inpvalue = document.getElementById("value").value;
    var answer = document.getElementById("answer");
    var result = Inpvalue/29.5735;
    answer.innerHTML = "Answer: " + result.toFixed(2);
    answer.style.color = "purple";
}
function ltm()
{
    var Inpvalue = document.getElementById("value").value;
    var answer = document.getElementById("answer");
    var result = Inpvalue * 1000;
    answer.innerHTML = "Answer: " + result.toFixed(2);
    answer.style.color = "goldenrod";
}
function mtl()
{
    var Inpvalue = document.getElementById("value").value;
    var answer = document.getElementById("answer");
    var result = Inpvalue / 1000;
    answer.innerHTML = "Answer: " + result.toFixed(2);
    answer.style.color = "darkolivegreen";
}
function itc()
{
    var Inpvalue = document.getElementById("value").value;
    var answer = document.getElementById("answer");
    var result = Inpvalue * 2.54;
    answer.innerHTML = "Answer: " + result.toFixed(2);
    answer.style.color = "orange";
}
function cti()
{
    var Inpvalue = document.getElementById("value").value;
    var answer = document.getElementById("answer");
    var result = Inpvalue / 2.54;
    answer.innerHTML = "Answer: " + result.toFixed(2);
    answer.style.color = "palevioletred";
}
function ptk()
{
    var Inpvalue = document.getElementById("value").value;
    var answer = document.getElementById("answer");
    var result = Inpvalue * 0.45;
    answer.innerHTML = "Answer: " + result.toFixed(2);
    answer.style.color = "lime";
}
function ktp()
{
    var Inpvalue = document.getElementById("value").value;
    var answer = document.getElementById("answer");
    var result = Inpvalue / 0.45;
    answer.innerHTML = "Answer: " + result.toFixed(2);
    answer.style.color = "teal";
}