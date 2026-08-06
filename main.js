/*Utilizando o fetch
Nesta aula, vimos como consumir uma API 
utilizando JavaScript e a função fetch. 
Aprendemos como definir o endereço da API,
lidar com promises, obter informações da requisição e 
converter a resposta para JSON. Vimos a importância de lidar 
com requisições assíncronas e como utilizar o método .then 
para tratar os dados retornados pela API.
*/

fetch('http://localhost:1717/products').then((response) => {
    console.log(response) // apareceu (status: 200, o 200 é de sucesso, o 404 é de erro.)
})
