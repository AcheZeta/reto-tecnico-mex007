bandList = document.getElementById('band-list');

fetch('https://retos-tecnicos-backend.lizzie136.now.sh/bands')
    .then((response) => {
        return response.json();
    })
    .then((bands)=> {
        console.log(bands);
    });

// const bands = ["The Plot in You", "The Devil Wears Prada", "Pierce the Veil", "Norma Jean", "The Bled", "Say Anything", "The Midway State", "We Came as Romans", "Counterparts", "Oh, Sleeper", "A Skylit Drive", "Anywhere But Here", "An Old Dog"]

// console.log(bands)


// const tableSort = (bands) => {
//     `${bands}`
// }