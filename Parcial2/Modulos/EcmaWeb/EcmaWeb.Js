// import{areaTriangulo} from "./Area.JS"
import * as Area from "./Area.js"

document.getElementById("btn").addEventListener("click",function(evento){
let vbas=document.getElementById('base').value;
let valt=document.getElementById('altura').value;

let varea = Area.areaTriangulo(vbas,valt);
document.getElementById("area").innerText=varea;

evento.preventDefault();
})
