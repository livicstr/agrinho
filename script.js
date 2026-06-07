// ANIMAÇÃO AO ROLAR

const elementos = document.querySelectorAll(
'.card, .text-section, .section-title'
);

const observador = new IntersectionObserver((entries)=>{

entries.forEach((entry)=>{

if(entry.isIntersecting){

entry.target.classList.add('show');

}

});

},{
threshold:0.2
});

elementos.forEach((elemento)=>{

elemento.classList.add('hidden');

observador.observe(elemento);

});

// BOTÃO VOLTAR AO TOPO

const botaoTopo = document.createElement('button');

botaoTopo.innerHTML = '↑';

document.body.appendChild(botaoTopo);

botaoTopo.style.position = 'fixed';
botaoTopo.style.bottom = '25px';
botaoTopo.style.right = '25px';

botaoTopo.style.width = '55px';
botaoTopo.style.height = '55px';

botaoTopo.style.border = 'none';
botaoTopo.style.borderRadius = '50%';

botaoTopo.style.background =
'linear-gradient(45deg,#16a34a,#0ea5e9)';

botaoTopo.style.color = 'white';

botaoTopo.style.fontSize = '24px';

botaoTopo.style.cursor = 'pointer';

botaoTopo.style.display = 'none';

botaoTopo.style.boxShadow =
'0 8px 20px rgba(0,0,0,0.2)';

botaoTopo.style.zIndex = '999';

window.addEventListener('scroll', ()=>{

if(window.scrollY > 400){

botaoTopo.style.display = 'block';

}else{

botaoTopo.style.display = 'none';

}

});

botaoTopo.addEventListener('click', ()=>{

window.scrollTo({

top:0,
behavior:'smooth'

});

});

// HEADER DINÂMICO

const header = document.querySelector('header');

window.addEventListener('scroll', ()=>{

if(window.scrollY > 50){

header.style.padding = '12px 50px';
header.style.background =
'rgba(20, 83, 45, 0.95)';

}else{

header.style.padding = '18px 50px';
header.style.background =
'rgba(20, 83, 45, 0.85)';

}

});
