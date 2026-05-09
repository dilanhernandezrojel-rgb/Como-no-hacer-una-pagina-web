var alto=document.getElementById("alto");
var ancho=document.getElementById("ancho");
var color=document.getElementById("color");
var figura=document.getElementById("figura");
var radio=document.getElementById("radio");
var anchoborde=document.getElementById("anchoborde");
var colorborde=document.getElementById("colorborde");
var tipoborde=document.getElementById("tipoborde");

alto.oninput=()=>{
    figura.style.height=alto.value+"px";
    document.getElementById("valto").innerHTML=alto.value;
}
ancho.oninput=()=>{
    figura.style.width=ancho.value+"px";
    document.getElementById("vancho").innerHTML=ancho.value;
}
color.onchange=()=>{
    figura.style.background=color.value;
}
radio.oninput=()=>{
    figura.style.borderRadius=radio.value+"px"
    document.getElementById("vradio").innerHTML=radio.value;
}
anchoborde.oninput=()=>{
    figura.style.borderWidth=anchoborde.value+"px";
    document.getElementById("vanchoborde").innerHTML=anchoborde.value;
}
colorborde.onchange=()=>{
    figura.style.borderColor=colorborde.value;
}
tipoborde.onchange=()=>{
    figura.style.borderStyle=tipoborde.value;
}
