/*Fetch com Post

Nesta aula, aprendemos a utilizar o método POST 
para enviar dados e cadastrar um novo produto na API. 
Criamos um formulário no HTML para coletar informações do 
usuário e utilizamos JavaScript para enviar esses dados para a API. 
Demonstramos como configurar a requisição fetch com o método POST, 
definir o tipo de conteúdo como JSON e serializar os dados antes do envio. 
Ao final, testamos o cadastro de produtos na API.
*/


const productName = document.getElementById('name')
const productPrice = document.getElementById('price')
const form = document.getElementsByTagName('form')

addEventListener('submit', async (event) => {
    event.preventDefault()
   
    await fetch('http://localhost:1717/products', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json' // é um cabeçalho (header) HTTP usado para avisar que os dados enviados ou recebidos estão no formato JSON.
        },
        body: JSON.stringify({ //JSON.stringify pega o objeto e passa ele pra texto
            id: new Date().getTime().toString(),
            name: productName.value,
            price: productPrice.value
        })
    })
    // Cadastrei 2 produtos, Microfone e Lápis de celular, ou seja, enviei dados para a API, utilizando o método POST
})