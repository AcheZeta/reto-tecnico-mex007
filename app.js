bandList = document.getElementById('band-list');

fetch('https://retos-tecnicos-backend.lizzie136.now.sh/bands')
    .then((response) => {
        return response.json();
    })
    .then((bands)=> {
        console.log(bands);
        let sortBands = bands.sort()
        console.log(sortBands)
    });

