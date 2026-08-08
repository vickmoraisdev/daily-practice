/*Exercício 5 — Cadastrar e procurar

Usando:

/products

Crie:

Formulário de cadastro
Nome
Preço
[ Cadastrar ]

E outro formulário:

ID do produto
[ Buscar ]

Ao clicar em buscar:

Faça um GET.
Encontre o produto correspondente.
Mostre:
Produto encontrado:

Nome: Mouse
Preço: R$80

Aqui você vai poder usar aquela coisa que acabou de aprender:

data[0]

porque:

/products?id=2

retorna um array.
*/

// Pegando os itens do HTML
const nameProduct = document.getElementById('name')
const priceProduct = document.getElementById('price')
const form = document.querySelector('form')
const formFetch = document.getElementById('fetch')
const item = document.getElementById('item')
const idProduct = document.getElementById('id')

// 
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

    form.reset()
})



function verification(name, price) {
    if (name.value.trim() === "" || price.value.trim() === "") {
        alert('Preencha todos os campos!')
        return false
    }
    return true
}

formFetch.addEventListener('submit', async (event) => {
    event.preventDefault()
   
    const response = await fetch('http://localhost:1717/products')
    const data = await response.json()
    const id = Number(idProduct.value)
    const productFind = data.find((product) => product.id === id)

    if(!validationFetch(id)){
        return
    }

    showProduct(productFind)
    formFetch.reset()
})

function validationFetch(id) {
    if (id === 0) {
        window.alert('Digite um ID válido para buscar.')
        return false
    }
    return true
}

function showProduct(product) {
    item.innerHTML = '<strong>Produto encontrado:</strong>'
    item.innerHTML += `<p>Nome do produto: ${product.name}</p>`
    item.innerHTML += `<p>Preço do produto: R$${product.price}</p>`
}
