// function to convert Celsius
// to Fahrenheit
function convertCelsiusToFahrenheit(celsius) {
    // formula to convert celsius
    // to fahrenheit
    let fahrenheit = (celsius * 9 / 5) + 32;
    return fahrenheit;
}

// Driver code
let celsius = 30;
let fahrenheit = convertCelsiusToFahrenheit(celsius);
console.log(celsius + "°C is equal to " + fahrenheit + "°F");