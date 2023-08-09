const elForm = document.querySelector(".js-form")
const elNickname = document.querySelector(".js-user-nickname")
const elName = document.querySelector(".js-user-name")

const userNickname = document.querySelector(".js-nickname-user")
const userName = document.querySelector(".js-name-user")
const elBtn = document.querySelector("#button")


elForm.addEventListener("submit", (e) => {
    e.preventDefault()

    // elBtn.addEventListener("click", (e) => {
    //     alert("fill out the form")
    //     e.preventDefault()

    const userData = {
        nickname: elNickname.value,
        name: elName.value,
    }
    // })
    localStorage.setItem("user", JSON.stringify(userData))

    getUser()

})

function getUser() {
    const userData = JSON.parse(localStorage.getItem("user"))

    userNickname.textContent = userData.nickname
    userName.textContent = userData.name
}
getUser()




// if (!localStorage.getItem("country")) {
//     fetch("https://restcountries.com/v3.1/name/uzbekistan")
//         .then(res => res.json())
//         .then(data => localStorage.setItem("country", JSON.stringify(data)))

//         .then(() => console.log(localStorage.getItem("country")))

// } else {

//     console.log(JSON.stringify(localStorage.getItem("country")))


// }
