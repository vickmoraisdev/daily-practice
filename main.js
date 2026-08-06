/*Passando parâmetros na requisição

Nesta aula, criamos uma nova função em JavaScript 
para buscar um produto específico usando async e o await. 
Com a interpolação de strings, podemos passar o ID 
como parâmetro ao chamar a função. Assim, conseguimos 
buscar produtos específicos de forma dinâmica. 
É importante entender como passar parâmetros para requisições.
*/


async function fetchProductbyid(id) {
    const response = await fetch(`http://localhost:1717/products?id=${id}`) //Pegando produto específico com id
    const data = await response.json()
    console.log(data[0]) /* data[0] pq ele vai retornar um array com os resultados, 
    mas só vai aparecer um pq pedi específico, mas mesmo assim vai vir um array, então, pra pegar apenas o
    objeto, sem array, coloque [0]*/
}

fetchProductbyid('3') // um produto específico → objeto