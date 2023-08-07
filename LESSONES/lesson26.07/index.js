const title = document.querySelector(".title")
const body = document.querySelector(".body")
const forma = document.querySelector(".forma")
forma.addEventListener("submit", (e) => {
    e.preventDefault();

    fetch("https://jsonplaceholder.typicode.com/posts", {


        method: "POST",
        headers: {
            'Content-type': 'application/json; '

        },

        body: JSON.stringify({
            title: title.value,
            body: body.value,
        }),

    })

})
