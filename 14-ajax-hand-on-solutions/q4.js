async function loadData() {
    let response = await axios.get('https://raw.githubusercontent.com/kunxin-chor/data-files-and-stuff/master/users.json');
    console.log(response.data);
    for (let user of response.data.users) {
        let newHTML = `
        <li>
            <p>First Name: ${user.firstName}</p>
            <p>Last Name: ${user.lastName}</p>
            <p>Email Address: ${user.emailAddress}</p>
        </li>  
        `
        document.querySelector('#users').innerHTML += newHTML;
    }

}

loadData();

/*
Alternatively.... immediate executed function
(async function() {

})()
*/