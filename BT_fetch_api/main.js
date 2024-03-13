
let h1 = document.querySelector('h1')
let img = document.querySelector('img')
console.log(h1);
// h1.textContext = message
setTimeout(() => {
    h1.innerText = 'pikachu'
    // let img = document.createElement('img')
    document.body.appendChild(img)
    // fetch()
    fetch('https://pokeapi.co/api/v2/pokemon/pikachu')
    .then(response => response.json())
    .then (data => {
        console.log(data);
        // return fetch(data.sprites.front_default.url)
        img.src = data.sprites.front_default
    })
    
}, 3000);