//Variable with the id of the table element
const bandList = document.getElementById('band-list');

//Getting the data from a endpoint
fetch('https://retos-tecnicos-backend.lizzie136.now.sh/bands')
    .then((response) => {
        return response.json();
    })
    .then((bandName) => {
        sortBands(bandName)
    });

//Function for sorting and regular expression.
const sortBands = (bandName) => {
    const orderBands = (bandName) => {
        //RegEx to find articles in the band's name
        return bandName.replace(/^(a |an |the )/i, '')
    };
        //Function to sort by name 
    let sortingBands = bandName.sort((a, b) => {
        if (orderBands(a) > orderBands(b)) {
            return 1
        } else {
            return -1
        }
    })
    //Create a td in a table for each element
    sortingBands.forEach(bandName => {
        bandList.insertAdjacentHTML('beforeend', `
        <tr>
        <td class="bands">${bandName}</td>
      </tr>
      `)
    });
}