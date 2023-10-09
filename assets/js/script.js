let quoteDiv = document.querySelector(".quotes");
let button = document.querySelector("button");
// fetch
fetch(`https://thatsthespir.it/api`)
    .then(response => response.json())
    .then(data => {
        // Create a new div for the result and display it
        const resultDiv = document.createElement("div");
        resultDiv.classList.add("result");
        resultDiv.innerHTML = `
            <p class="quote">"${data.quote}"</p>
            <p class="author">- ${data.author}</p>
            <img src=${data.photo} class="img-author">
        `;
        quoteDiv.appendChild(resultDiv);
        // Clear the input field
    })
    .catch(error => {
        console.error("Error fetching data:", error);
        const resultDiv = document.createElement("div");
        resultDiv.classList.add("result");
        resultDiv.innerHTML = `
            <p> Error fetching API </p>
        `;
        quoteDiv.appendChild(resultDiv);
    });

button.addEventListener("click", () =>{
    location.reload()
})