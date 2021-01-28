document.querySelector('#get-data-btn')
.addEventListener('click', async function(){
    let response = await axios.get('https://raw.githubusercontent.com/kunxin-chor/data-files-and-stuff/master/sample-json-2.json')
    console.log(response.data);

    let newHTML = `
        <p>${response.data.address.streetAddress}</p>
        <p>${response.data.address.city}, ${response.data.address.postalCode}</p>
        <p>${response.data.address.state}</p>
        `
    document.querySelector('#output').innerHTML = newHTML;

})

