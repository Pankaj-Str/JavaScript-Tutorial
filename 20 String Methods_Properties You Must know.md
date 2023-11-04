# 20 String Methods/Properties You Must know

JavaScript provides a variety of built-in methods and properties for working with strings. Here are some common string methods and properties:

### String Properties:

1. **length**: The `length` property returns the length of a string, which is the number of characters it contains.

   ```javascript
   const text = "Hello, World!";
   const length = text.length; // length is 13
   ```

### String Methods:

2. **charAt(index)**: The `charAt()` method returns the character at the specified index in a string.

   ```javascript
   const text = "JavaScript";
   const char = text.charAt(2); // char is "v"
   ```

3. **charCodeAt(index)**: The `charCodeAt()` method returns the Unicode value (integer) of the character at the specified index.

   ```javascript
   const text = "A";
   const code = text.charCodeAt(0); // code is 65
   ```

4. **indexOf(substring, startIndex)**: The `indexOf()` method returns the index of the first occurrence of a substring within the string. You can specify an optional `startIndex` from where the search should begin.

   ```javascript
   const sentence = "This is a sample sentence.";
   const index = sentence.indexOf("sample"); // index is 10
   ```

5. **lastIndexOf(substring, startIndex)**: The `lastIndexOf()` method returns the index of the last occurrence of a substring within the string. You can specify an optional `startIndex` from where the search should begin.

   ```javascript
   const sentence = "This is a sample sentence with a sample.";
   const lastIndex = sentence.lastIndexOf("sample"); // lastIndex is 31
   ```

6. **slice(start, end)**: The `slice()` method extracts a portion of the string and returns it as a new string. You specify the `start` and `end` positions.

   ```javascript
   const text = "JavaScript";
   const substring = text.slice(4, 8); // substring is "Scri"
   ```

7. **substring(start, end)**: The `substring()` method is similar to `slice()`. It extracts a portion of the string and returns it as a new string, based on the `start` and `end` positions.

   ```javascript
   const text = "JavaScript";
   const substring = text.substring(4, 8); // substring is "Scri"
   ```

8. **substr(start, length)**: The `substr()` method extracts a specified number of characters from the string, starting at the specified index.

   ```javascript
   const text = "JavaScript";
   const substring = text.substr(4, 4); // substring is "Scri"
   ```

9. **toUpperCase()**: The `toUpperCase()` method returns a new string with all characters converted to uppercase.

   ```javascript
   const text = "Hello, World!";
   const upperCaseText = text.toUpperCase(); // "HELLO, WORLD!"
   ```

10. **toLowerCase()**: The `toLowerCase()` method returns a new string with all characters converted to lowercase.

   ```javascript
   const text = "Hello, World!";
   const lowerCaseText = text.toLowerCase(); // "hello, world!"
   ```

11. **replace(searchValue, replaceValue)**: The `replace()` method replaces the first occurrence of `searchValue` with `replaceValue` in the string.

   ```javascript
   const sentence = "This is a sample sentence.";
   const replaced = sentence.replace("sample", "great"); // "This is a great sentence."
   ```

12. **split(separator, limit)**: The `split()` method splits the string into an array of substrings based on a specified `separator`. You can also specify an optional `limit` to limit the number of splits.

   ```javascript
   const sentence = "This is a sample sentence.";
   const words = sentence.split(" "); // ["This", "is", "a", "sample", "sentence."]
   ```

13. **trim()**: The `trim()` method removes whitespace (spaces, tabs, and line breaks) from the beginning and end of the string.

   ```javascript
   const text = "   Hello, World!   ";
   const trimmedText = text.trim(); // "Hello, World!"
   ```

These are some of the most commonly used string methods and properties in JavaScript. They are essential for manipulating and working with textual data in your JavaScript applications.

## 1. toUpperCase()
```js
const text = "I like javascript";
const result = text.toUpperCase();

console.log(result);
```
**Output**
```
I LIKE JAVASCRIPT
```
***
## 2. toLowerCase() Method
```js
const text = "I LIKE JAVASCRIPT";
const result = text.toLowerCase();

console.log(result);
```
**Output**
```
i like javascript
```
***
## 3. concat()
```js
const text1 = "JavaScript";
const text2 = "Programming";

const result = text1.concat(text2);
console.log(result);
```
**Output**
```
JavaScriptProgramming
```
***
## 4. replace()
```js
const text = "Hello. My name is Pankaj."
console.log(text);

const result = text.replace("Hello", "Hi");
console.log(result);
```
**Output**
```
Hi. My name is Pankaj.
```
***
## 5. split()
```js
const text = "hello";
const result = text.split('');
console.log(result);
```
**Output**
```
["h", "e", "l", "l", "o"]
```
***
## 6. slice()
```js
const text = "JavaScript";
const result = text.slice(0,4);
console.log(result);
```
**Output**
```
Java
```
***
## 7. trim()
```js
const text = "    JavaScript   ";
const result = text.trim();
console.log(result);
```
**Output**
```
JavaScript
```
***
## 8. search()
### Example 1
```js
const text = "JavaScript is fun.";
const result = text.search("fun");
console.log(result);
```
**Output**
```
14
```
***
### Example 2
```js
const text = "JavaScript is fun.";
const result = text.search("funny");
console.log(result);
```
**Output**
```
-1
```
***
## Assignment and Task
**Create a string "I love Java". Convert the string to lowercase and check if the string consists of the substring "java". If yes, replace the substring "java" with "JavaScript".**
### Solution:
```js
const text = "I love Java.";

const smallcase = text.toLowerCase();

const checkValue = smallcase.includes('java');

if(checkValue) {
    const result = smallcase.replace('java', 'JavaScript');
    console.log(result);
}
```
**Output**
```
i love JavaScript.
```
***
## p4n Quiz
**Q. What is the output of the program?**
```js
const message = "JavaScript is fun";
const result = message.split(' ');

const value = result[0].charAt(2);
console.log(value);
```

1. s
2. v
3. is
4. fun

Answer: 2

