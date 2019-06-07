bandList = document.getElementById('band-list');

fetch('https://retos-tecnicos-backend.lizzie136.now.sh/bands')
    .then((response) => {
        return response.json();
    })
    .then((bandName) => {
        const orderBands = (bandName) => {
            return bandName.replace(/^(a |an |the )/i, '')
        };
        let sortingBands = bandName.sort((a, b) => {
            if (orderBands(a) > orderBands(b)) {
                return 1
            } else {
                return -1
            }
        })
        bandName.forEach(bandName => {
            bandList.insertAdjacentHTML('beforeend', `
            <tr>
            <td class="bands">${bandName}</td>
          </tr>
          `)
        });
    });