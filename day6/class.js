// Task 2: Print Even Numbers from 1 to 20 Scenario: Write JavaScript code that prints all even numbers from 1 to 20. Instructions: Use a for loop to iterate from 1 to 20. Use an if statement to check if a number is even and print it.

// using while loop
var i=2
while(i<=20){
 console.log(i)
 i+=2
}
//other way

var i=1
while(i<=20){
    if(i%2==0){
        console.log(i)
    }
    i++
}


// Task 3: Print Multiples of 5 up to 50 Scenario: Write JavaScript code that prints all  multiples of 5 up to 50.
// Instructions: Use a for loop to iterate from 1 to 50. Use an if statement to check if a number is a multiple of 5 and print it.

//using for loop
for(var i=1; i<=10; i++){
  console.log(5, "*", i, "=", i*5)
}

// using while loop
let i=1
while(i<=10){
    console.log(5, "*", i, "=", i*5)
    i++
}


// Task 4: Sum of Numbers from 1 to 100 Scenario: Write JavaScript code that calculates the sum of numbers from 1 to 100.
// Instructions: Use a for loop to iterate from 1 to 100. Add each number to a sum variable and print the total sum.

//using for loop
var sum=0;
for(var i=1; i<=100; i++){
    sum=(sum+i);
}
  console.log(sum);  //5050

// using while loop

  var sum=0, i=1;
while(i<=100){
    sum=sum+i;
    i++
}
    console.log(sum) //5050



//   Task 5: Create a JavaScript program that calculates the factorial of a given number using a for loop. Instructions:
// Use a for loop to multiplication the given.  Take prompt from the user hint: take count value as 1; 5*4*3*2*1=

//using for loop
var count=1;
for(var i=1; i<=5; i++){
    count=(count*i);
}
  console.log(count);   // 120

  // using while loop
  fact =1, i=1;
while(i<=5){
    fact=fact*i;
    i++;
}
  console.log(fact);  // 120


//   Task 6: Print Numbers in Reverse Order Scenario: Write JavaScript code that prints numbers from 10 to 1  in reverse order.
// Instructions:Use a for loop to count down from 10 to 1. Display the numbers in the console.

//using for loop
for(var i=10; i>=1; i--){
  console.log(i)
}

// using while loop
var i=10;
while(i>=1){
    console.log(i);
    i--;
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


// using while loop:
let i=65;
while(i<=90){
    console.log(String.fromCharCode(i));
    i++;
}


// Task 8:Write a JavaScript script that uses nested loops to print a multiplication table for numbers 1 through 5.
// Instructions: use for loop use nested loop

// using for loop 
for(i=1; i<=5; i++){
  for(j=1; j<=10; j++){
      console.log(i, "*", j, "=", i*j);
  }
  console.log("");
}

// using while loop
let a=1;
while(a<=5){
   let b=1;
    while(b<=10){
        console.log(a, "*", b, "=", a*b);
        b++
    }
    console.log("")
    a++
}


// Q: Write a JS code that print prime numbers from 1 to 100

let num =Number(prompt("enter any number "))
for(let i=2; i<=num; i++){
    let isPrime = true;
    for(let j=2; j<i; j++){
        if(i%j===0){
            isPrime = false;
            break;
        }
    }
    if(isPrime){
        console.log(i);
    }
}


// another way
let NUM=+prompt("enter any number ")
for (let i = 1; i <= NUM; i++) {
  let prime = i > 1;
  for (let j = 2; j <= Math.sqrt(i); j++) {
    if (i % j == 0) {
      prime = false;
      break;
    }
  }
  if (prime) {
    console.log(i);
  }
}




