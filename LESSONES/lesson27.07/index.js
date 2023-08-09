const list = document.querySelector(".list")
const form = document.querySelector(".forma")
const input = document.querySelector(".input")

const url = "https://64c26ff8eb7fd5d6ebcfdd63.mockapi.io/todolist"



form.addEventListener("submit", (e) => {
    e.preventDefault(); // Prevent form submission

    fetch(url, {
        method: "POST",
        body: JSON.stringify({
            nametitle: input.value,
        }),
        headers: {
            "Content-type": "application/json"
        }
    })
        .then(response => response.json())
        .then(data => {
            console.log("POST request successful:", data);
            // If needed, you can update the list with the newly added item here
        })
        .catch(error => {
            console.error("Error during POST request:", error);
        });
});


fetch(url)
    .then((res) => res.json())
    .then((data) => {
        console.log(data)

        data.map((item) => {
            list.innerHTML += `
                <li><p>${item.nametitle}</p></li>
            `;
        })
    })

