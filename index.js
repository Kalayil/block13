// Complete the following functions to make our program work!

/**
 * Converts the given Fahrenheit temperature `f` to Celsius.
 * @param {number} f temperature in °F
 * @returns {number} temperature in °C
 */
function convertToCelsius(f) {
<<<<<<< HEAD
    return (f - 32) * 5 / 9;
=======
  // TODO
>>>>>>> 5f5d22fb29755edb171d0fb8cf5884d77913ed30
}

/**
 * | Temperature | Description |
 * | ----------- | ----------- |
 * | < 32        | "very cold" |
 * | < 64        | "cold"      |
 * | < 86        | "warm"      |
 * | < 100       | "hot"       |
 * | >= 100      | "very hot"  |
 *
 * @param {number} f temperature in °F
 * @returns {string} the description from the table above corresponding to
 * the given Fahrenheit temperature `f`
 */
function describeTemperature(f) {
<<<<<<< HEAD
    if (f < 32) {
      return "very cold";
    } else if (f < 64) {
        return "cold";
    } else if (f < 86) {
        return "warm";
    } else if (f < 100) {
        return "hot";
    } else {
        return "very hot"
    }
=======
  // TODO
>>>>>>> 5f5d22fb29755edb171d0fb8cf5884d77913ed30
}

/**
 * @param {number} limit
 * @returns {number} a random integer in the range [0, `limit`)
 */
function getRandomInt(limit) {
<<<<<<< HEAD
    return Math.floor(Math.random() * limit);
=======
  // TODO
>>>>>>> 5f5d22fb29755edb171d0fb8cf5884d77913ed30
}

// -------------------- DO NOT CHANGE THE CODE BELOW ---------------------- //
/**
 * Converts the given temperature from Fahrenheit to Celsius,
 * then alerts the user with a descriptive message.
 * @param {number} f temperature in °F
 */
function parseFahrenheit(f) {
  const c = convertToCelsius(f);
  const description = describeTemperature(f);
  const message = `${f}°F is ${c}°C. That is ${description}.`;
  alert(message);
}

const fahrenheitPrompt =
  "Please enter a number. We will convert that temperature from Fahrenheit to Celsius.";
let f = prompt(fahrenheitPrompt);
parseFahrenheit(+f);

alert("Let's try that again.");
f = prompt(fahrenheitPrompt);
parseFahrenheit(+f);

alert("Let's try some random temperatures.");
f = getRandomInt(110);
parseFahrenheit(f);

f = getRandomInt(110);
parseFahrenheit(f);
