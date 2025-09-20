alert("Welcome to JavaScript Assignment BQ!");

//  String Questions
//  Check if string contains 'JavaScript'
 let text1 = "Hello, welcome to JavaScript!";
 console.log(text1.includes("JavaScript")); // true

//  Convert 'hello world' to uppercase
 let text2 = "hello world";
 console.log(text2.toUpperCase()); // HELLO WORLD

//  Remove spaces from ' Learn JS '
 let text3 = " Learn JS ";
 console.log(text3.trim()); // "Learn JS"

//  Compare 'React' and 'react' ignoring case
 let str1 = "React";
 let str2 = "react";
 console.log(str1.toLowerCase() === str2.toLowerCase()); // true

function countVowels(str) {
  let vowels = "aeiouAEIOU"; // both cases
  let count = 0;

  for (let i = 0; i < str.length; i++) {
    if (vowels.includes(str[i])) {
      count++;
    }
  }
  return count;
}

console.log(countVowels("JavaScript is Fun")); // 5

//  Extract domain from email
let email = "user@example.com";
let atIndex = email.indexOf("@"); // find @ position
let domain = email.slice(atIndex + 1); // take after @
console.log(domain); // example.com

//  Greeting by time
 let hour = 15;
 if (hour < 12) console.log("Good morning");
 else if 
  (hour < 18) console.log("Good afternoon");
 else 
  console.log("Good evening");

//  Check strong password
 let password = "pass1234";
 if (password.length >= 8 && /\d/.test(password))
  console.log("Strong");
 else 
  console.log("Weak");

//  Replace spaces with dashes
let text = "Learn JavaScript step by step";
let updatedText = text.replaceAll(" ", "-");
console.log(updatedText); // Output: Learn-JavaScript-step-by-step

//  Check if starts with F
 let text6 = "Frontend";
 console.log(text6.startsWith("F")); // true