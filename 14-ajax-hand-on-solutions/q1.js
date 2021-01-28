
axios.get(' https://4geeksacademy.github.io/exercise-assets/txt/hello.txt ')
     .then(function(response){
         // STEP ONE: make sure we can console.log the data that we want
        console.log(response.data);
        document.querySelector('#content').innerHTML = response.data;
     })
