//Vanilla JavaScript
//------------------
// window.onload = function (){

//     document.getElementById("btnMenu").addEventListener("click",function(){
//         console.log("Click en control")
//         document.getElementById("miMenu").classList.toggle("menuEscondido");
//     document.getElementById("miContenido").classList.toggle("contenedorMenuEscondido");
//     });
    
// }
//Usando libreria JQuery deprecated
//---------------------------------
// $(document).ready(function(){
//     $('#btnMenu').click(function(){
//         console.log("Hiciste click en el boton")

//         $('#miMenu').toggleClass('menuEscondido');
//         $('#miContenido').toggleClass('contenidoMenuEscondido');
//     });
// });


//Usaando libreria JQUery Nueva
//----------------------------

$(function(){
    $('#btnMEnu').on ("Click",function(){
        console.log("Hiciste click en el boton")
        $('#miMenu').toggleClass('menuEscondido');
        $('#miContenido').toggleClass('contenidoMenuEscondido');
    })
})


