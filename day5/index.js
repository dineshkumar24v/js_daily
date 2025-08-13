// Task 2: Print Even Numbers from 1 to 20 Scenario: Write JavaScript code that prints all even numbers from 1 to 20. Instructions: Use a for loop to iterate from 1 to 20. Use an if statement to check if a number is even and print it.

for(var i=2; i<=20; i+=2){
  console.log(i)
}


// Task 3: Print Multiples of 5 up to 50 Scenario: Write JavaScript code that prints all  multiples of 5 up to 50.
// Instructions: Use a for loop to iterate from 1 to 50. Use an if statement to check if a number is a multiple of 5 and print it.

for(var i=1; i<=10; i++){
  console.log(i*5);
}

for(let i=1; i<=10; i++){
  console.log(` 15 * ${i} = ${15*i}`);
}


// Task 4: Sum of Numbers from 1 to 100 Scenario: Write JavaScript code that calculates the sum of numbers from 1 to 100.
// Instructions: Use a for loop to iterate from 1 to 100. Add each number to a sum variable and print the total sum.

var sum=0;
for(var i=1; i<=100; i++){
    sum=(sum+i);
}
  console.log(sum);

//   Task 5: Create a JavaScript program that calculates the factorial of a given number using a for loop. Instructions:
// Use a for loop to multiplication the given.  Take prompt from the user hint: take count value as 1; 5*4*3*2*1=

var count=1;
for(var i=1; i<=5; i++){
    count=(count*i);
}
  console.log(count);


//   Task 6: Print Numbers in Reverse Order Scenario: Write JavaScript code that prints numbers from 10 to 1  in reverse order.
// Instructions:Use a for loop to count down from 10 to 1. Display the numbers in the console.

for(var i=10; i>=1; i--){
  console.log(i)
}


// Task 7: Print the Alphabet Scenario: Write JavaScript code that prints the alphabet from A to Z. Instructions: Use a for loop to iterate through the ASCII values of the letters A to Z.
// Convert the ASCII values to characters and print them. Hint - console.log(String.fromCharCode(i));

let i;
 
console.log("Alphabets form (A-Z) are:");
 


// Using for loop for (A-Z):
for (i = 65; i <= 90; i++) {
    console.log(String.fromCharCode(i));
}
 
console.log("Alphabets from (a-z) are:");
 


// Using for loop for (a-z):
for (i = 97; i <= 122; i++) {
    console.log(String.fromCharCode(i));
}



// Task 8:Write a JavaScript script that uses nested loops to print a multiplication table for numbers 1 through 5.
// Instructions: use for loop use nested loop

for (let i = 1; i <= 5; i++) {
  for (let j = 1; j <= 10; j++) {
      console.log(`${i} * ${j} = ${i * j}`);
  }
  console.log(""); // Add a blank line
}


