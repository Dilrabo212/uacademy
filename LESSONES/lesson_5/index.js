const users = [
    {
        name: "Foziljon"
    },
    {
        name: "Komiljon"
    },
    {
        name: "Fayozjon"
    },
    {
        name: "Karimjon"
    },
]


//  



const ul = document.createElement("ul")
document.body.appendChild(ul)




for (let i = 0; i < users.length; i++) {
    let li = document.createElement("li")
    li.textContent = users[i].name
    ul.appendChild(li)
}
