/*Exercício 3 — Cadastro de usuários
Endpoint:

POST /users

Formulário:

Nome
Email
Idade

Ao enviar:

{
    id: ...,
    name: ...,
    email: ...,
    age: ...
}
Mas agora tem uma regra:

Se algum campo estiver vazio, não faça o POST.

Mostre:

Preencha todos os campos.
*/

const userName = document.getElementById('name')
const userEmail = document.getElementById('email')
const userAge = document.getElementById('age')
const form = document.querySelector('form')
const register = document.getElementById('register')

form.addEventListener('submit', async (event) => {
    event.preventDefault()

    if (!validation(userName, userEmail, userAge)) {
        return
    }

    await fetch('http://localhost:1717/users', {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            id: new Date().getTime(),
            name: userName.value,
            email: userEmail.value,
            age: Number(userAge.value)
        })
    })

    form.reset()
})

function validation(name, email, age) {
    if (name.value.trim() === "" || email.value.trim() === "" || age.value.trim() === "") {
        window.alert('Preencha todos os campos.')
        return false
    }
    return true
}