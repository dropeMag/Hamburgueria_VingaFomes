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

    for(let i = 0; i < inputQnt.length; i++){
        if (inputQnt[i].value >= 1){
            listaPedidos.innerHTML += `<div class="sl-div-item">
                                            <p class="sp-pdd"> ${nomePedido[i].textContent} </p>
                                            <p class="sp-qnt"> ${inputQnt[i].value}x</p>
                                            <p class="sp-valor"> R$ ${Number((valorPedido[i].textContent)*inputQnt[i].value).toFixed(2).replace('.', ',')} </p>
                                        </div>`
        }  
    }
})



// function cu(queima){
//     let listaItemExcluir = queima.closest(".sl-div-item")
//     let listaPrecoExcluir = queima.closest(listaPrecos)
//     listaItemExcluir.remove()
//     console.log(listaPrecoExcluir)
// }

// <p class="sp-excluir" onclick="cu(event.target)">X</p>






