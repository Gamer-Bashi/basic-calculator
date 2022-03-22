const form1 = document.forms["frm2"];
function sinus(){
    var adad = form1.elements[0].value;
    if(adad == ""){
        document.getElementById("natText").innerHTML = " ";
    document.getElementById("natije").innerHTML = "لطفا مقادیر را کامل پر کنید";
    }else{
    document.getElementById("natText").innerHTML = "نتیجه: ";
    document.getElementById("natije").innerHTML = Math.sin(adad * Math.PI / 180);
    }
}

function cosinus(){
    var adad = form1.elements[0].value;
    if(adad == ""){
        document.getElementById("natText").innerHTML = " ";
    document.getElementById("natije").innerHTML = "لطفا مقادیر را کامل پر کنید";
    }else{
    document.getElementById("natText").innerHTML = "نتیجه: ";
    document.getElementById("natije").innerHTML = Math.cos(adad * Math.PI / 180);
    }
}

function logarithm(){
    var adad = form1.elements[0].value;
    if(adad == ""){
        document.getElementById("natText").innerHTML = " ";
    document.getElementById("natije").innerHTML = "لطفا مقادیر را کامل پر کنید";
    }else{
    document.getElementById("natText").innerHTML = "نتیجه: ";
    document.getElementById("natije").innerHTML = Math.log(adad)
    }
}

function jazr(){
    var adad = form1.elements[0].value;
    if(adad == ""){
        document.getElementById("natText").innerHTML = " ";
    document.getElementById("natije").innerHTML = "لطفا مقادیر را کامل پر کنید";
    }else{
    document.getElementById("natText").innerHTML = "نتیجه: ";
    document.getElementById("natije").innerHTML = Math.sqrt(adad);
    }
}

function tanj(){
    var adad = form1.elements[0].value;
    if(adad == ""){
        document.getElementById("natText").innerHTML = " ";
    document.getElementById("natije").innerHTML = "لطفا مقادیر را کامل پر کنید";
    }else{
    document.getElementById("natText").innerHTML = "نتیجه: ";
    document.getElementById("natije").innerHTML = Math.tan(adad);
    }
}

function cota(){
    var adad = form1.elements[0].value;
    if(adad == ""){
        document.getElementById("natText").innerHTML = " ";
    document.getElementById("natije").innerHTML = "لطفا مقادیر را کامل پر کنید";
    }else{
    document.getElementById("natText").innerHTML = "نتیجه: ";
    document.getElementById("natije").innerHTML = 1 / Math.tan(adad);
    }
}