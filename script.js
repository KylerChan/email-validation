const apiKey = "REPLACE_WITH_API_KEY"
const emailInput = document.getElementById("emailInput")
const submit = document.getElementById("submit")
const result = document.getElementById("result")
const errorMessage = document.getElementById("errorMessage")

submit.addEventListener("click", async (e) => {
    e.preventDefault()
    const emailToBeChecked = emailInput.value
    const fullURL = `https://api.zerobounce.net/v2/validate?api_key=${apiKey}&email=${emailToBeChecked}`

    try {
        const response = await fetch(fullURL)
        if (!response.ok) {
            throw new Error("Network response was not ok")
        }
        const data = await response.json()
        console.log(data)
        
        if (data.status === "valid") {
            result.innerText = `${emailToBeChecked} is valid!`
            result.classList.remove("text-center", "mt-6", "bg-red-200", "text-red-600", "py-2", "rounded-lg")
            result.classList.add("text-center", "mt-6", "bg-green-200", "text-green-600", "py-2", "rounded-lg")
        } else {
            result.innerText = `${emailToBeChecked} is invalid`
            result.classList.remove("text-center", "mt-6", "bg-green-200", "text-green-600", "py-2", "rounded-lg")
            result.classList.add("text-center", "mt-6", "bg-red-200", "text-red-600", "py-2", "rounded-lg")
        }
        result.classList.remove("hidden")
        errorMessage.classList.add("hidden")
    } catch (error) {
        console.error("Error:", error)
        errorMessage.innerText = "Something went wrong, please try again later."
        errorMessage.classList.remove("hidden")
        result.classList.add("hidden")
    }
})
