const BASE_URL = "https://restcountries.com/v3.1/"

let data = []

const myFn = async function (endPoint = "all") {
    const res = await fetch(BASE_URL = +"name/" + endPoint)
    console.log(res)
    const data = await res.json();
    console.log(data)
}
form.addEventListener("submit", function (e) {
    e.preventDefault()
    myFn(search.value);
})
myFn();