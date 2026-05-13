const calcular=()=>{
    var producto=document.querySelector("#producto").value;
    var img=document.querySelector("#img");
    var precio=document.querySelector("#precio");
    var costo=0;
    var plazo=0;
    var aumento=0;
    img.innerHTML=`<img src="img/${producto}.png" width=400 text-align=center>`;
    switch(producto){
        case "TV": costo=10000; break;
        case "Comedor": costo=15000; break;
        case "Lavadora": costo=18000; break;
        case "Moto": costo=30000; break;
        case "Sala": costo=21000; break;
    }
    precio.innerHTML=`<h3>precio: $ ${costo.toFixed(2)} MXN</h3>`;
var uno=document.querySelector("#uno");
var dos=document.querySelector("#dos");
var tres=document.querySelector("#tres");
var cantidad=document.querySelector("#cantidad").value;
if(uno.checked){
    plazo=6;
    aumento=0.1;
}
else if(dos.checked){
    plazo=12;
    aumento=0.15;
} else{
    plazo=18;
    aumento=0.2;
}
var contado=costo*cantidad;
document.querySelector("#contado").innerHTML=`<h3>precio de contado: $ ${contado.toFixed(2)} MXN</h3>`;
var credito= contado+(contado*aumento);
document.querySelector("#credito").innerHTML=`<h3>precio a credito: $ ${credito.toFixed(2)} MXN</h3>`;
var abono=credito/plazo;
document.querySelector("#abono").innerHTML=`<h3>Abono Mensual: $ ${abono.toFixed(2)} MXN</h3>`;
}


