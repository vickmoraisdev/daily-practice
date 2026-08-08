/*Exercício 4 — Cadastro + busca
Você vai criar:

Formulário
Nome do produto
Preço

E continuará fazendo:

POST /products

Só que depois do cadastro, faça um GET:

GET /products

E mostre na página todos os produtos cadastrados.

Por exemplo:

Produtos cadastrados:

Notebook - R$3500
Mouse - R$80
Teclado - R$150

Aqui você vai juntar:

POST
 ↓
GET
 ↓
JSON
 ↓
forEach()
 ↓
DOM

*/

const nameProduct = document.getElementById('name')
const priceProduct = document.getElementById('price')
const form = document.querySelector('form')
const item = document.getElementById('item')

form.addEventListener('submit', async (event) => {
    event.preventDefault()

    if (!verification(nameProduct, priceProduct)) {
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

    showProducts()
})

function verification(name, price) {
    if (name.value.trim() === "" || price.value.trim() === "") {
        alert('Preencha todos os campos!')
        return false
    }
    return true
}

async function showProducts() {
    const response = await fetch('http://localhost:1717/products')
    const data = await response.json()
    
    item.textContent = 'Produtos cadastrados:'
    data.forEach((product) => {
        item.innerHTML += `
        <p>${product.name} - R$${product.price}</p>
        `
    })

    form.reset()
}