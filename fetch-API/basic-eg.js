// Very basic fetch API example
fetch("https://dog.ceo/api/breeds/image/random")
.then(response => response.json())
.then(data => console.log(data))

// URLS
// https://dog.ceo/api/breeds/image/random