const movieTitle = document.getElementById('title')
const movieDirector = document.getElementById('director')
const movieGenre = document.getElementById('genre')
const form = document.querySelector('form')
const register = document.getElementById('register')

form.addEventListener('submit', async(event) => {
    event.preventDefault()

    if(!verification(movieTitle, movieDirector, movieGenre)){
        return
    }

    await fetch('http://localhost:1717/movies', {
        method: 'POST',
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            id: new Date().getTime(),
            title: movieTitle.value,
            director: movieDirector.value,
            genre: movieGenre.value
        })
    })

    successRegister()

})

function verification(title, director, genre) {
    if (title.value.trim() === "" || director.value.trim() === "" || genre.value.trim() === "") {
        window.alert('Preencha todos os campos.')
        return false
    }
    return true
}

function successRegister(){
    register.textContent = 'Filme cadastrado com sucesso!'
    form.reset()

    setTimeout(() => {
        register.textContent = ''
    }, 2000);
}