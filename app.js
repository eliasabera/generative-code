const canvas = document.querySelector("canvas");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const ctx=canvas.getContext("2d")

class Line{
    constructor() {
        this.startX = Math.random() * canvas.innerWidth;
        this.startY = Math.random() * canvas.innerHeight
        this.endX = Math.random() * canvas.innerWidth;
        this.endY = Math.random() * canvas.innerWidth;
    }
    draw() {
        ctx.beginPath();
        ctx.moveTo(this.startX, this.startY);
        ctx.lineTo(this.endX, this.endY);
        ctx.stroke()
    }
}