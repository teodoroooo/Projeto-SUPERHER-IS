let arrayNomes = []
let arrayDivs = []
let arrayTitulos = []


let date = new Date();
console.log(date.getTime());
fetch(`https://gateway.marvel.com:443/v1/public/characters?ts=1706283788&apikey=a21b640101cab297641185b0e0c419a4&hash=e56bad61e029119eecdc7a141e48ffec&limit=100`)
    .then((response) => {
        return response.json();        
    }).then((jsonParsed) => {
        const divHerois = document.querySelector('#meusHerois')
        jsonParsed.data.results.forEach( (element) => {
            const srcImagem = element.thumbnail.path + '.' + element.thumbnail.extension
            const nomeHeroi = element.name
            let desc = verificaDesc(element.description)

            geradorDivHeroi(srcImagem, nomeHeroi, desc, divHerois)
        })
})



function geradorDivHeroi (srcImage, nomeHeroi, desc, div){
 
    const divPai = document.createElement('div')
    const divFilho = document.createElement('div')
    const textName = document.createElement('p')
    const img = document.createElement('img')
    const descricao = document.createElement('p')
    let textoDiv
    let addDiv

   
    textName.textContent = nomeHeroi
    img.src = srcImage
    descricao.textContent = desc
    
   
    divFilho.appendChild(textName)
    divFilho.appendChild(img)
    divPai.appendChild(divFilho)
    divPai.classList.add('personagem')
    textoDiv = divPai.textContent
    adicionaTexto(textoDiv)
    addDiv = divPai
    adicionaDiv(addDiv)

    
    textName.style.textAlign = 'center'
    textName.style.backgroundColor = 'rgb(25,25,25)'
    textName.style.height = '100px'
    textName.style.borderRadius = '30px 0px 0px 0px'
    textName.style.transition = '0.40s'
    img.style.borderTop = '3px solid #ee2027'
    descricao.style.display = 'none'

    
    divFilho.addEventListener('mouseover', () => {
        textName.style.backgroundColor = '#ee2027'
        img.style.borderTop = '3px solid rgb(25,25,25)'
    })

    divFilho.addEventListener('mouseout', () => {
        textName.style.backgroundColor = "rgb(25,25,25)"
        img.style.borderTop = '3px solid #ee2027'
    })

   
    const buscador = document.getElementById('search')

    const buscaHeroi = buscador.onkeyup = function (e){
        var valorDigitado = this.value
        const compara = arrayNomes.findIndex( element => element == valorDigitado)
        if (valorDigitado == "" || valorDigitado == undefined){
            arrayDivs.forEach( (o) => {
                o.classList.add('personagem')
                o.classList.remove('mostrar')
                o.style.margin = '1% 1%'
                o.classList.remove('esconder')
                paginacao.arrumaDivs()
            })
        }
        if (compara != -1){
            for (let i of arrayDivs){
                if (i.textContent == valorDigitado){
                    i.classList.add('mostrar')
                    i.style.margin = '0 auto'
                }else{
                    i.classList.remove('mostrar')
                    i.classList.add('esconder')
                    i.style.margin = '1% 1%'
                }
            }
        }
    }

    function adicionaTexto(texto){ 
        arrayNomes.push(texto)
    }

    function adicionaDiv(addDiv){ 
        arrayDivs.push(addDiv)
    }

    buscador.addEventListener('focus', () => {
        buscaHeroi()
    })

    
    const itens = {
        pag1: document.getElementById('pag1'),
        pag2: document.getElementById('pag2'),
        prox: document.getElementById('prox'),
        voltar: document.getElementById('voltar'),
        arrumar: true,
        array1: arrayDivs.slice(0,20),
        array2: arrayDivs.slice(20,40),
    }

    const paginacao = {
        paginacao(){ 
            itens.pag1.addEventListener('click', () => {
                itens.array2.forEach( element => {
                    element.classList.add('esconder')
                    element.classList.remove('mostrar')
                })

                itens.array1.forEach( element => {
                    element.classList.add('mostrar')
                    element.style.margin = '1%'
                })

                itens.arrumar = false
            })

            itens.pag2.addEventListener('click', () => {
                itens.array1.forEach( element => {
                    element.classList.add('esconder')
                    element.classList.remove('mostrar')
                })

                itens.array2.forEach( element => {
                    element.classList.add('mostrar')
                    element.style.margin = '1%'
                })

                itens.arrumar = true
            })
        },
        voltar(){ 
            itens.voltar.addEventListener('click', () => {
                itens.array2.forEach( element => {
                    element.classList.add('esconder')
                    element.classList.remove('mostrar')
                })

                itens.array1.forEach( element => {
                    element.classList.add('mostrar')
                    element.style.margin = '1%'
                })

                itens.arrumar = false
            })

        },
        prox(){ 
            itens.prox.addEventListener('click', () => {
                itens.array1.forEach( element => {
                    element.classList.add('esconder')
                    element.classList.remove('mostrar')
                })

                itens.array2.forEach( element => {
                    element.classList.add('mostrar')
                    element.style.margin = '1%'
                })
                
                itens.arrumar = true
            })
            
        },
        arrumaDivs(){             
            if (itens.arrumar == true){
                itens.array2.forEach( element => {
                    element.classList.add('esconder')
                    element.classList.remove('mostrar')
                })

                itens.array1.forEach( element => {
                    element.classList.add('mostrar')
                    element.style.margin = '1%'
                })

                itens.arrumar = false
            }else{
                itens.array1.forEach( element => {
                    element.classList.add('esconder')
                    element.classList.remove('mostrar')
                })

                itens.array2.forEach( element => {
                    element.classList.add('mostrar')
                    element.style.margin = '1%'
                })

                itens.arrumar = true
            }
        }
    }

    function geraModal(){

        const itens = {
            containerModal: document.getElementById('containerModal'),
            modal: document.getElementById('modal'),
            texto: document.createElement('p'),
            textDesc: document.createElement('text'),
            imagem: document.createElement('img'),
            fechar: document.getElementById('fechar')
        }

        
        divFilho.addEventListener('click', () => {
            itens.containerModal.style.display = 'flex'
            itens.texto.innerHTML = textName.textContent
            itens.imagem.src = srcImage
            itens.textDesc.innerHTML = desc
            itens.textDesc.classList.add('desc')

            itens.modal.appendChild(itens.texto)
            itens.modal.appendChild(itens.imagem)
            itens.modal.appendChild(itens.textDesc)
        })

       
        function fechar(item){
            item.addEventListener('click', () => {
                itens.containerModal.style.display = 'none'
                itens.modal.removeChild(itens.texto)
                itens.modal.removeChild(itens.imagem)
                itens.modal.removeChild(itens.textDesc)
            })
        }
        fechar(itens.fechar)
        fechar(itens.containerModal)
    }

    paginacao.paginacao()
    paginacao.prox()
    paginacao.voltar()
    paginacao.arrumaDivs()
    geraModal()

    div.appendChild(divPai)
}

function geradorDivQuadrinho (srcImage, nomeHeroi, desc, div){
 
    const divPai = document.createElement('div')
    const divFilho = document.createElement('div')
    const title = document.createElement('p')
    const img = document.createElement('img')
    const descricao = document.createElement('p')
    let titulo
    let addDivPai

   
    title.textContent = nomeHeroi
    img.src = srcImage
    descricao.textContent = desc
    
   
    divFilho.appendChild(title)
    divFilho.appendChild(img)
    divFilho.appendChild(descricao)
    divPai.appendChild(divFilho)
    divPai.classList.add('personagem')
    titulo = divPai.textContent
    adicionaTitulo(titulo)
    addDivPai = divPai
    adicionaDivQuadrinhos(addDivPai)

   
    title.style.textAlign = 'center'
    title.style.backgroundColor = 'rgb(25,25,25)'
    title.style.color =  'white'
    title.style.height = '100px'
    title.style.borderRadius = '30px 0px 0px 0px'
    img.style.borderTop = '3px solid #ee2027'
    descricao.style.display = 'none'

   
    divFilho.addEventListener('mouseover', () => {
        title.style.backgroundColor = '#ee2027'
        img.style.borderTop = '3px solid rgb(25,25,25)'
    })

    divFilho.addEventListener('mouseout', () => {
        title.style.backgroundColor = "rgb(25,25,25)"
        img.style.borderTop = '3px solid #ee2027'
    })

   
    function geraModal(){

        const itens = {
            containerModal: document.getElementById('containerModal-2'),
            modal: document.getElementById('modal-2'),
            texto: document.createElement('p'),
            textDesc: document.createElement('text'),
            imagem: document.createElement('img'),
            fechar: document.getElementById('fechar-2'),
        }

      
        divFilho.addEventListener('click', () => {
            itens.containerModal.style.display = 'flex'
            itens.texto.innerHTML = title.textContent
            itens.imagem.src = srcImage
            itens.textDesc.innerHTML = desc
            itens.textDesc.classList.add('desc')

            itens.modal.appendChild(itens.texto)
            itens.modal.appendChild(itens.imagem)
            itens.modal.appendChild(itens.textDesc)
        })

       
        function fechar(item){
            item.addEventListener('click', () => {
                itens.containerModal.style.display = 'none'
                itens.modal.removeChild(itens.texto)
                itens.modal.removeChild(itens.imagem)
                itens.modal.removeChild(itens.textDesc)
            })
        }
        fechar(itens.fechar)
        fechar(itens.containerModal)
    }
    
    paginacao.paginacao()
    paginacao.prox()
    paginacao.voltar()
    paginacao.arrumaDivs()
    geraModal()

    div.appendChild(divPai)
}


function verificaDesc(descricao){
    if (descricao == "" ){
        return descricao = "Esse personagem não possui descrição."
    }else{
        return descricao
    }
}

