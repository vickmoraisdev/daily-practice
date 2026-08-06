/*Utilizando o fetch
Nesta aula, vimos como consumir uma API 
utilizando JavaScript e a função fetch. 
Aprendemos como definir o endereço da API,
lidar com promises, obter informações da requisição e 
converter a resposta para JSON. Vimos a importância de lidar 
com requisições assíncronas e como utilizar o método .then 
para tratar os dados retornados pela API.


fetch('http://localhost:1717/products').then((response) => response.json()) 
//.json mostra o conteúdo, por exemplo, os produtos que ta no server.json 

.then((data) => console.log(data)) // Aqui, estou exibindo os produtos no console.log

------------------------------------------------------------------------------------------------ */


/*Utilizando async e await
Nesta aula, vimos como utilizar o async e o await 
em vez do then para aguardar uma promise e obter dados 
de uma requisição. Vimos a diferença entre 
utilizar async e await e then, destacando que a escolha 
depende do cenário e preferência pessoal. O async e o await é útil 
em situações onde não é viável criar uma nova função.
*/

// Você pode usar async e await ao invés do .then, o resultado é o mesmo.

async function fetchProduct(products) {
    const response = await fetch('http://localhost:1717/products')
    const data = await response.json()
    console.log(data)
}

fetchProduct()
