const canvas = document.getElementById('particle-canvas');
const ctx = canvas.getContext('2d');
let particles = [];


function resize() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
}
resize();
window.addEventListener('resize', resize);

class Particle {
    constructor(x, y) {
        this.x = x;
        this.y = y;
        this.size = Math.random() * 4 + 2; // tamaño entre 2 y 6
        this.life = 60; // frames de vida
        this.vx = (Math.random() - 0.5) * 1.5; // velocidad horizontal
        this.vy = (Math.random() - 0.5) * 1.5; // velocidad vertical
        this.opacity = 1;
    }

    update() {
        this.x += this.vx;
        this.y += this.vy;
        this.life--;
        this.opacity = this.life / 60;
    }

    draw() {
        ctx.fillStyle = `rgba(111, 186, 208, ${this.opacity})`; // color cian neón
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size * this.opacity * 0.5, 0, Math.PI * 2);
        ctx.fill();
    }
}

window.addEventListener('mousemove', e => {
    for (let i = 0; i < 2; i++) { // generamos 3 partículas por movimiento
        particles.push(new Particle(e.clientX, e.clientY));
    }
});

function animate() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    particles.forEach((p, i) => {
        p.update();
        p.draw();
        if (p.life <= 0) {
            particles.splice(i, 1);
        }
    });

    requestAnimationFrame(animate);
}
animate();


const cursor = document.querySelector('.custom-cursor');

window.addEventListener('mousemove', e => {
    cursor.style.top = `${e.clientY}px`;
    cursor.style.left = `${e.clientX}px`;
});
let mouseX = window.innerWidth / 2;
let mouseY = window.innerHeight / 2;
let cursorX = mouseX;
let cursorY = mouseY;
const speed = 0.15; // cuánto se acerca el cursor por frame (0-1)

window.addEventListener('mousemove', e => {
    mouseX = e.clientX;
    mouseY = e.clientY;
});

function animateCursor() {
    cursorX += (mouseX - cursorX) * speed;
    cursorY += (mouseY - cursorY) * speed;
    cursor.style.top = `${cursorY}px`;
    cursor.style.left = `${cursorX}px`;
    requestAnimationFrame(animateCursor);
}
animateCursor();



const canvas_bg = document.getElementById('hero-bg-animation');
const ctx_bg = canvas_bg.getContext('2d');
let points = [];


function resizeCanvas() {
    canvas_bg.width = window.innerWidth;
    canvas_bg.height = window.innerHeight;
    initPoints();
}

function initPoints() {
    points = [];
    const spacing = 80;
    for (let x = 0; x < canvas_bg.width; x += spacing) {
        for (let y = 0; y < canvas_bg.height; y += spacing) {
            points.push({
                x: x + Math.random() * 20 - 10,
                y: y + Math.random() * 20 - 10,
                vx: (Math.random() - 0.5) * 0.2,
                vy: (Math.random() - 0.5) * 0.2
            });
        }
    }
}

function draw() {
    ctx_bg.clearRect(0, 0, canvas_bg.width, canvas_bg.height);
    ctx_bg.strokeStyle = 'rgba(0, 255, 200, 0.1)';
    ctx_bg.fillStyle = 'rgba(0, 255, 200, 0.3)';

    // Dibujar líneas entre puntos cercanos
    for (let i = 0; i < points.length; i++) {
        let p1 = points[i];
        for (let j = i + 1; j < points.length; j++) {
            let p2 = points[j];
            let dist = Math.hypot(p1.x - p2.x, p1.y - p2.y);
            if (dist < 100) {
                ctx_bg.beginPath();
                ctx_bg.moveTo(p1.x, p1.y);
                ctx_bg.lineTo(p2.x, p2.y);
                ctx_bg.stroke();
            }
        }
    }

    // Dibujar puntos
    for (let p of points) {
        ctx_bg.beginPath();
        ctx_bg.arc(p.x, p.y, 1.5, 0, Math.PI * 2);
        ctx_bg.fill();
    }
}

function update() {
    for (let p of points) {
        p.x += p.vx;
        p.y += p.vy;

        // rebote sutil en bordes
        if (p.x < 0 || p.x > canvas_bg.width) p.vx *= -1;
        if (p.y < 0 || p.y > canvas_bg.height) p.vy *= -1;
    }
}

function animate_bg() {
    update();
    draw();
    requestAnimationFrame(animate_bg);
}

resizeCanvas();
window.addEventListener('resize', resizeCanvas);
animate_bg();




async function cargarProyectos() {
    const res = await fetch('proyectos.json');
    const data = await res.json();
    renderizarProyectos(data);
    proyectos = data;

    document.querySelectorAll('.filter-buttons button').forEach(btn => {
        btn.addEventListener('click', () => {
            document.querySelectorAll('.filter-buttons button').forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            const filtro = btn.getAttribute('data-filter');
            renderizarProyectos(data, filtro);
        });
    });
}

function renderizarProyectos(proyectos, filtro = 'all') {
    const grid = document.getElementById('projectGrid');
    grid.innerHTML = '';

    const filtrados = filtro === 'all' ? proyectos : proyectos.filter(p => p.categoria === filtro);

    filtrados.forEach(p => {
        const card = document.createElement('div');
        card.className = 'project-card';
        card.innerHTML = `
        <img src="${p.imagen}" alt="Captura del proyecto">
        <div class="content">
            <h3>${p.nombre}</h3>
            <p class="description">${p.descripcion}</p>
            <p class="tech"><strong>Tecnologías:</strong> ${p.tecnologias}</p>
            <div class="links">
            ${Object.entries(p.enlaces).map(([nombre, url]) => `<a href="${url}" target="_blank">${nombre.charAt(0).toUpperCase() + nombre.slice(1)}</a>`).join('')}
            </div>
        </div>
        `;
        grid.appendChild(card);
    });
}

document.addEventListener('DOMContentLoaded', cargarProyectos);
