
    function updateTemperatures() {
        const celsiusInput = document.getElementById('celcius');
        const fahrenheitInput = document.getElementById('far');
        const kelvinInput = document.getElementById('kel');

        let celsius, fahrenheit, kelvin;

        if (celsiusInput.value !== '') {
            celsius = parseFloat(celsiusInput.value);
            fahrenheit = (celsius * 9/5) + 32;
            kelvin = celsius + 273.15;
        } else if (fahrenheitInput.value !== '') {
            fahrenheit = parseFloat(fahrenheitInput.value);
            celsius = (fahrenheit - 32) * 5/9;
            kelvin = celsius + 273.15;
        } else if (kelvinInput.value !== '') {
            kelvin = parseFloat(kelvinInput.value);
            celsius = kelvin - 273.15;
            fahrenheit = (celsius * 9/5) + 32;
        } else {
            celsius = fahrenheit = kelvin = '';
        }

        // Update input fields without limiting decimal places
        celsiusInput.value = isNaN(celsius) ? '' : celsius.toFixed(2);
        fahrenheitInput.value = isNaN(fahrenheit) ? '' : fahrenheit.toFixed(2);
        kelvinInput.value = isNaN(kelvin) ? '' : kelvin.toFixed(2);
    }

    // Add event listeners to all input fields
    document.getElementById('celcius').addEventListener('input', updateTemperatures);
    document.getElementById('far').addEventListener('input', updateTemperatures);
    document.getElementById('kel').addEventListener('input', updateTemperatures);

    function resetValues() {
        // Clear all input fields
        document.getElementById('celcius').value = '';
        document.getElementById('far').value = '';
        document.getElementById('kel').value = '';
    }

    // Add an event listener to the Reset button
    document.querySelector('.reset-btn').addEventListener('click', resetValues);

    // Initialize the conversion when the page loads
    updateTemperatures();

