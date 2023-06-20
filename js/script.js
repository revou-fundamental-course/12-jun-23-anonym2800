function convertCelciusToFahrenheit(celsius) {
    let fahrenheit = (celsius * 9 / 5) + 32;
    return fahrenheit;
}

function convert() {
    let celciusInput = document.getElementById('celsius').value;
    let fahrenheitOutput = convertCelciusToFahrenheit(celciusInput);
    console.log(fahrenheitOutput);
    
    let outputFahrenheit = 
    document.querySelector('.form-input.fahrenheit input[type="number"]');
    outputFahrenheit.value = fahrenheitOutput;

    let hasil = 
    document.querySelector('.form-hasil #hasil');
    hasil.innerHTML = `<h2>(${celciusInput} * 9 / 5) + 32 = ${fahrenheitOutput}</h2>`
}

