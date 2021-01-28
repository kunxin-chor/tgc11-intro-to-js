async function loadData() {
    let response = await axios.get('https://raw.githubusercontent.com/kunxin-chor/data-files-and-stuff/master/json-simple.json ');
    let data = response.data;
    console.log(data);
    let newHTML = `
        <li>Name:${data.Name}</li>
        <li>Address (Perament): ${data.Address['Permanent address']} </li>
        <li>Address (Current): ${data.Address["current Address"]}</li>
        <li>Mobile: ${data.Mobile}</li>
        <li>Pets: ${data.Pets.join(", ")}</li>
    `
    // Step 7: assign the newHTML code as the innerHTML for the output element
    document.querySelector('#output').innerHTML = newHTML;
}

loadData();