var canva=document.getElementById("paint");
var paint=canva.getContext("2d");
canva.addEventListener("mousedown",raton);
canva.addEventListener("mousemove",movimiento);
canva.addEventListener("mouseup",termina);
var x=250;
var y=250;
var p1;
var p2;
var p3;
var p4;
var permiso= false;



var teclas={
    UP:38,
    DOWN:40,
    LEFT:37,
    RIGHT:39
};
document.addEventListener("keyup",dibujarTecla);
function dibujarTecla(lok) {
   var color="blue";
   var movimiento=10;
    switch (lok.keyCode) {
        case teclas.UP:
            trazo(color,x,y,x,y-movimiento);
            y=y-movimiento;
                
            break;
        case teclas.DOWN:
            trazo(color,x,y,x,y+movimiento);
            y=y+movimiento;
            break;
        case teclas.LEFT:
            trazo(color,x,y,x-movimiento,y);
            x=x-movimiento;
            break;
        case teclas.RIGHT:
            trazo(color,x,y,x+movimiento,y);
            x=x+movimiento;
            break;
    
        default:
            console.log("no es valido");
            break;
    }
    
}
function trazo(color,xinicial,yinicial,xfinal,yfinal) {
    paint.beginPath();
    paint.strokeStyle=color ;
    paint.moveTo(xinicial,yinicial);
    paint.lineTo(xfinal,yfinal);
    paint.lineWidth=3;
    paint.stroke();
    paint.closePath();    
}
trazo("red",249,249,251,251);

function raton(evento) {
    console.log(evento.isTruted);
    permiso= true;
    trazo("blue",evento.pageX+1,evento.pageY+1,evento.pageX-1,evento.pageY-1);
    
}

function movimiento(movi) {
    console.log();
    if (permiso) {

        
    
     trazo("blue",movi.pageX+1,movi.pageY+1,movi.pageX-1,movi.pageY-1);
    }else{
        trazo("white",movi.pageX+1,movi.pageY+1,movi.pageX-1,movi.pageY-1);
        

    }


}
function termina(ter) {
    console.log(ter);
    trazo("blue",ter.pageX+1,ter.pageY+1,ter.pageX-1,ter.pageY-1);

    
}