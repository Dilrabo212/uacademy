// lokal storage ni tekshirib olish
// countries bo'lmasa backendga zapros yuboramiz
// agar countries bo'lsa console ga countriesni chiqarib qo'yamiz

if(!localStorage.getItem("country")) {
  fetch("https://restcountries.com/v3.1/name/uzbekistan")
  .then(function(res) {
    return res.json()
  })
  .then(function(data) {
    localStorage.setItem("country", JSON.stringify(data))
  })
  .then(() => console.log(localStorage.getItem("country")))

} else {
  console.log(JSON.stringify(localStorage.getItem("country")))
}
