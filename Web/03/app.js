var alto=document.getElementById("alto");
var ancho=document.getElementById("ancho");
var color=document.getElementById("color");
var figura=document.getElementById("figura");
var radio=document.getElementById("radio");
var anchoborde=document.getElementById("anchoborde");
var colorborde=document.getElementById("colorborde");
var tipoborde=document.getElementById("tipoborde");
var anchosombra=document.getElementById("anchosombra");
var colorsombra=document.getElementById("colorsombra");
var blursombra=document.getElementById("blursombra");
var X=document.getElementById("X");
var Y=document.getElementById("Y");
const figura2=document.getElementById("figura");
const figuras=()=>{
    figura2.style.boxShadow="0px 0px 5px black";
    figura.style.borderStyle=tipoborde.value;
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
        figura.style.borderRadius=radio.value+"px";
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
}
function actualizarsombra(){
    let vertical=X.value;
    let horizontal=Y.value;
    let AncSombra=anchosombra.value;
    let colSombra=colorsombra.value;
    let blrSombra=blursombra.value;
    figura.style.boxShadow= `${vertical}px ${horizontal}px ${blrSombra}px ${AncSombra}px ${colSombra}`;
}
X.oninput=()=>{
    document.getElementById("Xv").innerHTML = X.value;
    actualizarsombra();
}
Y.oninput=()=>{
    document.getElementById("Yv").innerHTML = Y.value;
    actualizarsombra();
}
anchosombra.oninput=()=>{
    document.getElementById("vanchosombra").innerHTML=anchosombra.value;
    actualizarsombra();
}
colorsombra.oninput=()=>{
    actualizarsombra();
}
blursombra.oninput=()=>{
    document.getElementById("vblursombra").innerHTML=blursombra.value;
    actualizarsombra();
}