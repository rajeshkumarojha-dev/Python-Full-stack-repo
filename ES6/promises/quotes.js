let container = document.querySelector('.container')
let content = document.querySelector('.content')
let button = document.querySelector('button')

let quotes = []
let currentIndex = 0

function fetchData() {
    fetch('https://dummyjson.com/quotes')
        .then(res => res.json())
        .then(data => {
            console.log(data)
            quotes = data.quotes
            displayData()
        })
}

fetchData()
button.addEventListener('click', fetchData)
function displayData() {
    if (quotes.length === 0) return
    content.innerHTML = ''
    let element = quotes[currentIndex]
    let h2 = document.createElement('h2')
    h2.innerHTML = element.quote
    let h5 = document.createElement('h5')
    h5.innerHTML = element.author

    content.append(h2, h5)
    container.appendChild(content)
    currentIndex = (currentIndex + 1) % quotes.length

}