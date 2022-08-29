let shopcart = document.getElementById('btn-shopcart')
let bg_modal = document.getElementById('bg-modal-shoplist')
let abrirModal = [shopcart, bg_modal]
let modal = document.getElementById('modal-shoplist')
let body = document.getElementById('body')
let listaPedidos = document.getElementById('shoplist-items')
let btnLess = document.querySelectorAll('.btn-less')
let btnMore = document.querySelectorAll('.btn-more')
let inputQnt = document.querySelectorAll('input[name="qntPedido"]')
let nomePedido = document.querySelectorAll('h2')
let valorPedido = document.querySelectorAll('h3')
let openBurger = document.querySelector('.hd-lks-ext2')
let closeBurger = document.querySelector('.hd-lks-ext3')
let menuBurger = document.querySelector('.hd-btn-ext')
let inputSoma = document.getElementById('somaTotal')

// ABRIR MENU BURGER
openBurger.addEventListener('click', ()=>{
    menuBurger.style.display = 'flex'
})

// FECHAR MENU BURGER
closeBurger.addEventListener('click', ()=>{
    menuBurger.style.display = 'none'
})

// ABRIR E FECHAR O MODAL
abrirModal.map((opc) => {
    opc.addEventListener('click', ()=>{
        bg_modal.classList.toggle('dp-none')
        modal.classList.toggle('dp-none')
        body.classList.toggle('over-hide')
    })
})

// BOTÕES PARA QUANTIDADE DE PEDIDO
for(let i = 0; i < inputQnt.length; i++){
    btnLess[i].addEventListener('click', ()=>{
        if (inputQnt[i].value >= 1){
            inputQnt[i].value --  
        }   
    })

    btnMore[i].addEventListener('click', ()=>{
        inputQnt[i].value ++        
    }) 
}

// ADICIONAR PEDIDO AO CARRINHO
shopcart.addEventListener('click', ()=>{
    listaPedidos.innerHTML = ``
    let somaValores = 0

    for(let i = 0; i < inputQnt.length; i++){
        if (inputQnt[i].value >= 1){
            let valorTotal = Number((valorPedido[i].textContent)*inputQnt[i].value)

            listaPedidos.innerHTML += `<div class="sl-div-item">
                                            <p class="sp-pdd"> ${nomePedido[i].textContent} </p>
                                            <p class="sp-qnt"> ${inputQnt[i].value}x</p>
                                            <p class="sp-valor"> R$ ${valorTotal.toFixed(2).replace('.', ',')} </p>
                                        </div>`

            somaValores += valorTotal
        }  
    }

    inputSoma.value = `R$ ${somaValores.toFixed(2).replace('.', ',')}`
})









// function cu(queima){
//     let listaItemExcluir = queima.closest(".sl-div-item")
//     let listaPrecoExcluir = queima.closest(listaPrecos)
//     listaItemExcluir.remove()
//     console.log(listaPrecoExcluir)
// }

// <p class="sp-excluir" onclick="cu(event.target)">X</p>