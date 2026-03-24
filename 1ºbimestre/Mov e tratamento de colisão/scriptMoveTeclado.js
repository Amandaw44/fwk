const canvas= document.getElementById("meuCanvas");
canvas.height=window.innerHeight-50;
canvas.width=window.innerWidth-50;
const label= document.getElementById("distancia");
const ctx = canvas.getContext("2d");

let circulo={
    x: canvas.width/2,
    y: canvas.height/2,
    r:50,
    desenhar : function() {
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.r,0,Math.PI*2);
        ctx.fillStyle="blue";
        ctx.fill();
        ctx.closePath();
    }
};

let circulo1={
    x: 100,
    y: 100,
    r:50,
    desenhar : function() {
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.r,0,Math.PI*2);
        ctx.fillStyle="purple";
        ctx.fill();
        ctx.closePath();
    }
};
document.addEventListener("keydown",function (ev) {
    const passo = 5;
    if(ev.key == "ArrowUp") circulo.y-= passo;
    if(ev.key == "ArrowDown") circulo.y+= passo;
    if(ev.key == "ArrowLeft") circulo.x-= passo;
    if(ev.key == "ArrowRight") circulo.x+= passo;
    ctx.clearRect(0,0,canvas.width,canvas.height);
    atualizar();
});
function atualizar(){

    let dist = Math.sqrt(circulo.x*circulo1.x+circulo1.y+circulo1.y);
    label.innerHTML="Distancia :"+dist;
    circulo.desenhar();
    circulo1.desenhar();
}
circulo.desenhar();
circulo1.desenhar();