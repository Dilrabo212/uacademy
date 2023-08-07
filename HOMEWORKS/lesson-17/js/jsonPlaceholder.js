// fetch("https://jsonplaceholder.typicode.com/users/1/posts")
// .then(res => res.json())
// .then(data => {
//   data.forEach(item => {
//     const div = document.createElement("div")
//     div.textContent = item.title

//     document.body.appendChild(div)
//   })
// })

const form = "not form"


form.addEventListener("submit", (e) => {
  e.preventDefault()

  fetch('https://jsonplaceholder.typicode.com/posts', {
  method: 'POST', // backend ga ma'lumot jo'natadi
  body: JSON.stringify({ // bodyda jo'natiladigan ma'lumot
    title: title.value,
    body: body.value,
    userId: 1,
    abc: ''
  }),
  headers: {
    'Content-type': 'application/json; charset=UTF-8'
  }
})
  .then((response) => response.json())
  .then((json) => console.log(json));

})


