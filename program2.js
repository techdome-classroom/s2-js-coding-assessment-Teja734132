/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function(s) {
    if (s === "") {
        return 0;  // Return 0 if the input string is empty
    }

    const romanMap = new Map();
    // Fill the map with Roman numeral characters and their corresponding values
    romanMap.set('I', 1);
    romanMap.set('V', 5);
    romanMap.set('X', 10);
    romanMap.set('L', 50);
    romanMap.set('C', 100);
    romanMap.set('D', 500);
    romanMap.set('M', 1000);

    // Initialize the result with the value of the last character in the string
    const n = s.length;
    let num = romanMap.get(s[n - 1]);

    // Loop through the string from right to left (excluding the last character)
    for (let i = n - 2; i >= 0; i--) {
        // If the current character value is smaller than the next character, subtract it; otherwise, add it
        if (romanMap.get(s[i]) >= romanMap.get(s[i + 1])) {
            num += romanMap.get(s[i]);
        } else {
            num -= romanMap.get(s[i]);
        }
    }

    // Return the final result
    return num;
};


module.exports={romanToInt}