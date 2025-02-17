const convertButton = document.querySelector("button");

convertButton.addEventListener("click", () => {
    const temp = parseFloat(document.getElementById("temp").value);

    if (isNaN(temp)) {
        alert("Invalid input. Please enter a valid number for temperature.");
        return; // Exit function early if input is invalid
    }

    const unit = document.getElementById("unit").value;
    
    let convertedTemp;
    let unitSymbol;
    if (unit === 'celsius') {
        convertedTemp = (temp - 32) * 5/9; // f to c
        unitSymbol = 'C'
    } else if (unit === 'fahrenheit') {
        convertedTemp = (temp * 9/5) + 32; // c to f
        unitSymbol = 'F'
    } else {
        alert("Please select a unit to convert into.");
        return; // Exit early if no unit is selected
    }

    document.getElementById("conversion-text").textContent = `Converted Temperature: ${convertedTemp.toFixed(2)} °${unitSymbol}`;

    console.log(`Converted Temperature: ${convertedTemp.toFixed(2)} °${unitSymbol}`);
});