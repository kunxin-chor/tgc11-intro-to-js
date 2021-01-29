document.querySelector('#search-btn')
    .addEventListener('click', async function(){
        let symbol = document.querySelector('#symbol').value;
        // let response = await axios.get(`https://www.alphavantage.co/query?function=TIME_SERIES_DAILY&symbol=${symbol}&interval=5min&apikey=XKN4RO4QFF3WHHEG`)
       
        let response = await axios.get('https://www.alphavantage.co/query', {
            params: {
                'function': 'TIME_SERIES_DAILY',
                'symbol': symbol,
                'interval': '5min',
                'apikey': 'XKN4RO4QFF3WHHEG'
            }
        })
        console.log(response.data);
    }) // end addEventListener