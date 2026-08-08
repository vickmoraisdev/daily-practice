"use strict"

/*Exercício 6 — Produtos caros

Agora não precisa criar nenhum formulário.

Faça um GET em:

/products

Depois use:

filter()

para mostrar apenas produtos acima de R$500.

Depois use:

map()

para mostrar somente os nomes.

Exemplo:

Notebook
Monitor
Celular

Aqui você está juntando API + métodos de array.
*/

const nameProduct = document.getElementById('name')
const priceProduct = document.getElementById('price')
const form = document.querySelector('form')
const item = document.querySelector('#item')

form.addEventListener('submit', async (event) => {
    event.preventDefault()

    if (!validation(nameProduct, priceProduct)) {
        return
    }

    await fetch('http://localhost:1717/products', {
        method: 'POST',
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            id: new Date().getTime(),
            name: nameProduct.value,
            price: Number(priceProduct.value)
        })
    })

    form.reset()
    fetchItens()
})

function validation(name, price) {
    if (name.value.trim() === "" || price.value.trim() === "") {
        window.alert('Preencha os campos.')
        return false
    }
    return true
}

async function fetchItens() {
    const response = await fetch('http://localhost:1717/products')
    const data = await response.json()
    console.log(data)

    showItens(data)
}

function showItens(itemFind) {
    const expensiveItens = itemFind.filter((product) => product.price > 500)
    console.log(expensiveItens)
    
    if (expensiveItens.length === 0) {
        item.innerHTML = 'Nenhum produto caro registrado.'
        setTimeout(() => {
            item.innerHTML = ''
        }, 3000);
        return
    } else{
        item.innerHTML = '<strong>Produtos acima de 500 reais:</strong>'

        expensiveItens.forEach((product) => {
            item.innerHTML += `<p>Produto: ${product.name}</p>`
            item.innerHTML += `<p>Preço: R$${product.price}</p>`
            item.innerHTML += '<div>---------------------</div>'
        });
    }
}