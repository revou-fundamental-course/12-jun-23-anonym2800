// Selection  DOM element
const celciusInput = document.getElementById('celsius');
const hasil = document.querySelector('.form-hasil #hasil'); 
// Variable 
let convertCelcius = true;

// selection Dom element and give Style display="none"
let displayNone = document.querySelector('.form-control')
displayNone.style.display = 'none';

// Fungsi Celcius to Fahrenheit
function convertFahrenheitToCelcius(fahrenheit) {
    let celsius = (fahrenheit - 32) * 5 / 9;
    return celsius
}
// Fungsi Fahrenheit to Celcius
function convertCelciusToFahrenheit(celsius) {
    let fahrenheit = (celsius * 9 / 5) + 32;
    return fahrenheit;
}

// fungsi btn convert
function convert() {
    if (convertCelcius) {
        convertToFahrenheit();
        
    }else{
        convertToCelcius();
        
    }
}
// Fungsi Rumus Celcius to Fahrenheit
function convertToFahrenheit() {
    let fahrenheitOutput = convertCelciusToFahrenheit(celciusInput.value);
        if (celciusInput.value) {
            let outputFahrenheit = document.getElementById('hasilFahrenheit');
            outputFahrenheit.value = fahrenheitOutput;
            outputFahrenheit.innerHTML = `<h2>${fahrenheitOutput.toFixed(2)} °F</h2>`
            
            displayNone.style.display = "block";
            hasil.innerHTML = `<h2>(${celciusInput.value} °C * 9 / 5) + 32 = ${fahrenheitOutput.toFixed(2)} °F</h2>`
        }else{
            displayNone.style.display = "none";
            return alert ('Please Input celsius ');
        }    
}

// Fungsi Rumus Fahrenheit to Celcius
function convertToCelcius() {
    let celciusOutput = convertFahrenheitToCelcius(celciusInput.value);
    if (celciusInput.value) {
        let outputCelcius = document.getElementById('hasilFahrenheit');
        outputCelcius.value = celciusOutput;
        outputCelcius.innerHTML = `<h2>${celciusOutput.toFixed(2)} °C</h2>`

        displayNone.style.display = "block";
        hasil.innerHTML = `<h2>(${celciusInput.value} °F - 32 ) * 5 / 9 = ${celciusOutput.toFixed(2)} °C`
    }else{
        displayNone.style.display = "none";
        return alert ('Please Input Fahrenheit ');
    }    
}

// Fungsi btn Reset
function reset() {
    document.getElementById('hasilFahrenheit').innerHTML = "";
    let hapus = document.querySelector('.form-hasil #hasil');
    hapus.innerHTML = "";
    displayNone.style.display = "none";
    if(celciusInput.getAttribute('id') == 'celsius'){
        document.getElementById('celsius').value = "";
    }else{
        document.getElementById('fahrenheit').value = "";
    }
}

// Fungsi btn Reverse
function reverse() {
    celciusInput.setAttribute('id','celsius');

    if (convertCelcius) {
        convertCelcius = false;
        reset();

        celciusInput.removeAttribute('id')
        celciusInput.setAttribute('id','fahrenheit');

        document.querySelector('#celsius-form label').innerHTML = "Fahrenheit :";
        document.querySelector('#fahrenheit-form label').innerHTML = "Celsius :";
    }else{
        convertCelcius = true; 
        // reset()

        celciusInput.setAttribute('id','celsius');
        document.querySelector('#celsius-form label').innerHTML = "Celsius :";
        document.querySelector('#fahrenheit-form label').innerHTML = "Fahrenheit :";
    }
}