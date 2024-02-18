let boxBuscar = document.querySelector('.buscar-box');
let lupa = document.querySelector('.lupa-buscar');
let btnFechar = document.querySelector('.btn-fechar');
const fechar = document.getElementById('fechar');

// Mostrar a caixa de busca quando o usuário clicar no botão da lupa e esconder quando ele clicar fora dela

lupa.addEventListener('click', ()=> {
    boxBuscar.classList.add('ativar')
})

fechar.addEventListener('click', ()=> {
    boxBuscar.classList.remove('ativar')
})