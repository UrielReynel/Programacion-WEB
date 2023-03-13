window.onload = function (){

    document.getElementById("btnMenu").addEventListener("click",function(){
        console.log("Click en control")
        document.getElementById("miMenu").classList.toggle("menuEscondido");
    document.getElementById("miContenido").classList.toggle("contenedorMenuEscondido");
    });
    
}

