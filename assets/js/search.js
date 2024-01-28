let boxBuscar = document.querySelector('.buscar-box');
let lupa = document.querySelector('.lupa-buscar');
let btnFechar = document.querySelector('.btn-fechar');

lupa.addEventListener('click', ()=> {
    boxBuscar.classList.toggle('ativar')
})

btnFechar.addEventListener('click', ()=> {
    boxBuscar.classList.toggle('ativar')
})