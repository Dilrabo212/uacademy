fetch("https://restcountries.com/v3.1/name/uzbekistan")
.then(res => res.json())
.then(data => console.log(data))

// const elForm = document.querySelector(".js-form")
// const elFormNickname = document.querySelector(".js-nickname")
// const elFormName = document.querySelector(".js-name")

// const elUserNickname = document.querySelector(".js-user-name")
// const elUsername = document.querySelector(".js-name-title")

// elForm.addEventListener("submit", (e) => {
//   e.preventDefault()

//   const userData = {
//     nickname: elFormNickname.value,
//     name: elFormName.value,
//   }

//   localStorage.setItem("user", JSON.stringify(userData))

//   getUser()
// })

// function getUser() {
//   const userData = JSON.parse(localStorage.getItem("user"))
  
//   elUserNickname.textContent = userData.nickname
//   elUsername.textContent = userData.name
// }

// getUser()


// const obj123 = {
//   name: 'lorem',
//   age: 15,
//   address: "qoraqamish"
// }

// const stringObj = JSON.stringify(obj123)
// const parsedObj = JSON.parse(stringObj)


// localStorage.setItem("user", JSON.stringify({age: 21, name: 'falonchi'}))

// console.log(
//   JSON.parse(localStorage.getItem("user"))
// )
