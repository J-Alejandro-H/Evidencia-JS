var lanzarB = document.getElementById("boton");
if(lanzarB) lanzarB.addEventListener("click", play, false);

var inicio = true;
var punto = false;
var val = 0;
var res = 0;
var d1 = 0;
var d2 = 0;
var t2 = document.getElementById("txt");


function play(){
    if(inicio){
        inicio = false;
        d1 = (Math.floor(Math.random()*100))%6 + 1;
        d2 = (Math.floor(Math.random()*100))%6 + 1;
        val = d1 +d2;

        document.getElementById("d1").src=("../imgs/" + d1 + ".png");
        document.getElementById("d2").src=("../imgs/" + d2 + ".png");
    
    if(val == 2 || val == 3 || val ==12) t2.textContent = "PERDISTE, MEJOR SUERTE LA PROXIMA";
    if(val == 7 || val == 11) t2.textContent = "INCREIBLE, HAS GANADO";
    else{
    punto = true;
    t2.textContent = "PUTNO = " + val;
    }
    }else if(punto){
        d1 = (Math.floor(Math.random()*100))%6 + 1;
        d2 = (Math.floor(Math.random()*100))%6 + 1;
        res = d1 +d2;

        document.getElementById("d1").src=("../imgs/" + d1 + ".png");
        document.getElementById("d2").src=("../imgs/" + d2 + ".png");

        if(res == 7){
            t2.textContent = "MEJOR SUERTE LA PROXIMA";
            punto = false;
        }else if(res == val){
        t2.textContent = "INCREIBLE, HAS GANADO";
        punto = false;
        }
    }
}
    











