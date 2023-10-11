const watchedButton = document.getElementById('watched')

fetch('http://localhost:3000/movies')
.then(response => response.json())
.then(movies => {
    movies.forEach(movie => {
        addMovieToMovieList(movie)
    })

    displayMovieDetails(movies[0])
})

// Challenge 1
function addMovieToMovieList(movie){
    const movieListNavElement = document.getElementById('movie-list')
    const imgElement = document.createElement("img")
    imgElement.src = movie.image
    movieListNavElement.appendChild(imgElement)

    // Challenge 3
    imgElement.addEventListener('click', () => {
        displayMovieDetails(movie)
    })
}

// Challenge 2
function displayMovieDetails(movie){
    const detailImage = document.getElementById('detail-image')
    detailImage.src = movie.image

    const titleH1Element = document.getElementById('title')
    titleH1Element.textContent = movie.title

    const yearReleasedH3Element = document.getElementById('year-released')
    yearReleasedH3Element.textContent = movie.release_year

    const descriptionElement = document.getElementById('description')
    descriptionElement.textContent = movie.description

    // const watchedButton = document.getElementById('watched')
    
    if(movie.watched){
        watchedButton.textContent = "Watched"
    }
    else{
        watchedButton.textContent = "Unwatched"
    }

    const bloodAmountSpanElement = document.getElementById('amount')
    bloodAmountSpanElement.textContent = movie.blood_amount
}

watchedButton.addEventListener('click', () => {
    if(watchedButton.textContent === "Watched"){
        watchedButton.textContent = "Unwatched"
    }
    else{
        watchedButton.textContent = "Watched"
    }
})

// Challenge 5
const bloodForm = document.getElementById('blood-form')
bloodForm.addEventListener('submit', (event) => {
    event.preventDefault()
    const bloodAmountInputElement = document.getElementById('blood-amount')
    const bloodAmountSpanElement = document.getElementById('amount')
    const sum = Number(bloodAmountSpanElement.textContent) + Number(bloodAmountInputElement.value)
    bloodAmountSpanElement.textContent = sum
    bloodForm.reset()
})