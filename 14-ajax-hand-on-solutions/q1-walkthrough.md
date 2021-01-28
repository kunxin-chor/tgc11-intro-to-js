# PROMISES

## STEP 1 
Get the data to be displayed in the console
```
axios.get(' https://4geeksacademy.github.io/exercise-assets/txt/hello.txt ')
     .then(function(response){
        console.log(response.data);
     })

```

## STEP 2 
Decide where to output the content we read in via. ajax

### 2.1 Add a new `<div>` and give it an id
Add the following to the HTML:
```
<div id="content">
        
</div>
```

### 2.2 Then we change of the innerHTML of the new `<div>`
```
axios.get(' https://4geeksacademy.github.io/exercise-assets/txt/hello.txt ')
     .then(function(response){
         // STEP ONE: make sure we can console.log the data that we want
        console.log(response.data);
        // STEP TWO: Change the innerHTML of the new <div>
        document.querySelector('#content').innerHTML = response.data;
     })
```