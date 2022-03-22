function zarb(){
var x = document.forms["frm1"];
var a1 = parseInt(x.elements[0].value);
var a2 = parseInt(x.elements[1].value);
if(isNaN(a1*a2)){
	document.getElementById("natije").innerHTML = " ";
	document.getElementById("natText").innerHTML = "لطفا مقادیر را کامل پر کنید";
}else{
 document.getElementById("natText").innerHTML = "نتیجه: ";
 document.getElementById("natije").innerHTML = a1*a2;
}
}

function taghsim(){
 var x = document.forms["frm1"];
 var a1 = parseInt(x.elements[0].value);
 var a2 = parseInt(x.elements[1].value);
if(isNaN(a1/a2)){
	document.getElementById("natije").innerHTML = " ";
	document.getElementById("natText").innerHTML = "لطفا مقادیر را کامل پر کنید";
}else{
 document.getElementById("natText").innerHTML = "نتیجه: ";
 document.getElementById("natije").innerHTML = a1/a2;
}
}

function jam(){
 var x = document.forms["frm1"];
 var a1 = parseInt(x.elements[0].value);
 var a2 = parseInt(x.elements[1].value);
if(isNaN(a1+a2)){
	document.getElementById("natije").innerHTML = " ";
	document.getElementById("natText").innerHTML = "لطفا مقادیر را کامل پر کنید";
}else{
 document.getElementById("natText").innerHTML = "نتیجه: ";
 document.getElementById("natije").innerHTML = a1+a2;
}
}

function menha(){
 var x = document.forms["frm1"];
 var a1 = parseInt(x.elements[0].value);
 var a2 = parseInt(x.elements[1].value);
if(isNaN(a1-a2)){
	document.getElementById("natije").innerHTML = " ";
	document.getElementById("natText").innerHTML = "لطفا مقادیر را کامل پر کنید";
}else{
 document.getElementById("natText").innerHTML = "نتیجه: ";
 document.getElementById("natije").innerHTML = a1-a2;
}
}