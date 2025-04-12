// String in JavaScript

// String is a built-in object in JavaScript that represents a sequence of characters.
// Strings are immutable, meaning once created, they cannot be changed.
// However, you can create new strings based on existing ones.
// Strings can be created using single quotes, double quotes, or backticks (template literals).

data = "Codes With Pankaj";

// String Methods
// 1. length
console.log(data.length);

// 2. charAt
console.log(data.charAt(6));

// 3. indexOf
console.log(data.indexOf("Pankaj"));

// 4. lastIndexOf
console.log(data.lastIndexOf("Pankaj"));

// 5. slice
console.log(data.slice(0, 4)); // Codes

// 6. substring
console.log(data.substring(0, 4)); // Codes

// 7. substr
console.log(data.substr(0, 4)); // Codes

// 8. toUpperCase
console.log(data.toUpperCase()); // CODES WITH PANKAJ

// 9. toLowerCase

console.log(data.toLowerCase()); // codes with pankaj

// 10. replace
console.log(data.replace("Pankaj", "John")); // Codes With John

// 12. replaceAll

console.log(data.replaceAll("a", "John")); // Codes With John