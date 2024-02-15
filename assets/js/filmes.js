fetch('https://akabab.github.io/superhero-api/api')
.then(response => response.json())
.then(response => console.log(response))
.catch(err => console.log(err))
