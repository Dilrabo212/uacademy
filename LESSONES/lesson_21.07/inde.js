//!    Json, localstorage, fetch   
fatch("https://restcountries.com/v3.1/name/uzbekistan")
    .then(res => res.json())
    .then(data => localStorage("data", "data"))
console.log(JSON.stringify(data))
console.log(data)

localStorage.setItem("date", JSON.stringify(data))
JSON.parse(localStorage.getItem("date"))