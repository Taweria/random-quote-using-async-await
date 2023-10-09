let quoteDiv = document.querySelector(".quote");
// fetch
fetch(`https://thatsthespir.it/api`)
    .then(response => response.json())
    .then(data => {
        // Create a new div for the result and display it
        const resultDiv = document.createElement("div");
        resultDiv.classList.add("result");
        resultDiv.innerHTML = `
            <p class="quote">${data.quote}</p>
            <p class="author">${data.author}</p>
            <img src=${data.photo} class="img-author">
            <p>Total quotes:${data.total_quotes}</p>
        `;
        quoteDiv.appendChild(resultDiv);
        // Clear the input field
    })
    .catch(error => {
        console.error("Error fetching data:", error);
    });