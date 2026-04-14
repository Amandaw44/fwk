const body = document.getElementsByTagName("body")[0];
const canvas = document.createElement("canvas");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
body.appendChild(canvas);
const ctx = canvas.getContext("2d");

//Retangulo
const retangulos = document.getElementsByTagName("retangulo");

const objRetangulo = {
    x: null, y: null, largura: null, altura: null, cor: null,
    velocidade: 3,

    desenhar: function () {
        for (let r of retangulos) {
            this.largura = parseInt(r.getAttribute("largura")) || r.setAttribute("largura", 100);
            this.altura = parseInt(r.getAttribute("altura")) || r.setAttribute("altura", 50);
            this.x = parseInt(r.getAttribute("posX")) || r.setAttribute("posX", 100);
            this.y = parseInt(r.getAttribute("posY")) || r.setAttribute("posY", 100);
            this.cor = r.getAttribute("cor") || r.setAttribute("cor", "blue");

            ctx.beginPath();
            ctx.fillStyle = this.cor;
            ctx.fillRect(this.x, this.y, this.largura, this.altura);
            ctx.closePath();

            let mover = r.getAttribute("mover");
            if (mover)
                this.mover(r, mover);
        }
    },

    mover: function (r, mover) {
        if (mover === "acima") this.y -= this.velocidade;
        if (mover === "abaixo") this.y += this.velocidade;
        if (mover === "esquerda") this.x -= this.velocidade;
        if (mover === "direita") this.x += this.velocidade;

        r.setAttribute("posX", this.x);
        r.setAttribute("posY", this.y);
    }
};

function desenharForma() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    if (retangulos) {
        objRetangulo.desenhar();
    }

    requestAnimationFrame(desenharForma);
}

desenharForma();