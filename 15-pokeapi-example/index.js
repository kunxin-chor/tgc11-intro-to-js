document.querySelector('#search-btn')
.addEventListener('click', async function(){
    let searchTerms = document.querySelector('#search-terms').value;
    let response = await axios.get('https://pokeapi.co/api/v2/pokemon/' + searchTerms);
    let template = `
           <img src="${response.data.sprites.other["official-artwork"].front_default}"/>
        <h1>${response.data.name}</h1>
        <ul>
            <li>Base experience: ${response.data.base_experience}</li>
            <li>Order: ${response.data.order}</li>
        </ul>`
    document.querySelector('#results').innerHTML = template;
}) // end addEventListener