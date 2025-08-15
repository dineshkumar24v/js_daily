
// add the values of a number a-1234 ?
var a = 1234;
str = String(a);
sum = 0;
for(i=0; i<str.length;i++){
    sum=sum+Number(str[i]);
}
console.log(sum);     //10



// Add even & odd numbers of a given number ?
var a=123456789;
str = String(a);
let evenSum=0;
let oddSum=0;
for(i=0;i<str.length; i++){
    if(str[i]%2==0){
        evenSum+= Number(str[i]);
    }else{
        oddSum+= Number(str[i]);
    }
}
console.log(evenSum, oddSum)    // 20 25


// Print max & min values of a given number?
let num=846326712;
let str = String(num);
let max = str[0];
let min = str[0];
for(i=0; i<str.length; i++){
    if(str[i]<min){
        min=str[i]
    }
    if(str[i]>max){
        max=str[i]
    }
}
console.log(max, min)    // 8   1



// Check whether a number is prime or not?
let num = 17;
let temp=true;
for(i=2; i<num; i++){
    if(num%i==0){
        console.log(num, "is not a prime");
        temp=false;
        break;
    }
}
if(temp){
    console.log(num, "is prime")
}


// Note: here problem is it will say 1 is also a prime so
let num = prompt("enter any number ");
temp=true;
if(num<=1){
    console.log(num, "not a prime")
}else{
    for(i=2; i<num; i++){
    if(num%i==0){
        console.log(num, "is not a prime");
        temp=false;
        break;
    }
}
if(temp){
    console.log(num, "is prime")
}
}



//for in loop: it is used to print index values of Strings, Arrays, & Objects


// 1.Strings
str = "hello world";
for(i in str){
  console.log(str[i]);
}
// output:
// h
// e
// l
// l
// o
 
// w
// o
// r
// l
// d



// 2.Arrays:
arr = ["html", "css", "js", "react", 1, 2, 3]
for(i in arr){
    console.log(arr[i])
}
// output
// html
// css
// js
// react
// 1
// 2
// 3

// 3. Objects: the only way to iterate objects is for In loop
obj = {
  name: "john",
  age: 25
}
for(i in obj){
  console.log(i, obj[i])
}
// output
// name john
// age 25


//for of loop: it is used to iterate the values of a string & array.

// 1.Strings
str = "hello world";
for(i of str){
  console.log(i);
}
// output:
// h
// e
// l
// l
// o
 
// w
// o
// r
// l
// d


// 2.Arrays:
arr = ["html", "css", "js", "react", 1, 2, 3]
for(i of arr){
    console.log(i)
}
// output
// html
// css
// js
// react
// 1
// 2
// 3


// Note: As we cannot iterate objects -- we convert object to an array & get keys & Values.
// Object ----------------------------to an ----------------------- Array


// 1. Method to get keys
obj = {
  name: "john",
  age: 25
}
for(i of Object.keys(obj)){
  console.log(i)
}
// name
// age
// === Code Execution Successful ===



// 2. Method to get values
obj = {
  name: "john",
  age: 25
}
for(i of Object.values(obj)){
  console.log(i)
}

//john
// 25
// === Code Execution Successful ===


// 3. method to get both at once

obj = {
  name: "john",
  age: 25
}
for(i of Object.entries(obj)){
  console.log(i)
}

//[ 'name', 'john' ]
// [ 'age', 25 ]
// === Code Execution Successful ===

// or

obj = {
  name: "john",
  age: 25
}
for([i,j] of Object.entries(obj)){
  console.log(i,j)
}

//name john
// age 25

// === Code Execution Successful ===





// reverse a string input: hello output : olleh using for in for off

let str = "hello";
let reversedStr = str.split('').reverse().join('');

console.log(reversedStr);

// olleh
// === Code Execution Successful ===




// find a even numbers in an array - [23,54,67,64,46,95,98]

let arr =[23,54,67,64,46,95,98];
for (i in arr){
    if(arr[i]%2==0){
    console.log(arr[i])
    }
}


// find a minindex and maxindex of a given number num=[6,8,9,2,0,2,1]  minindex=4    maxindex=2

let num=[6,8,9,2,0,2,1];
let minindex = num[0];
let maxindex = num[0];
for(i in num){
    if(num[i]<minindex){
        minindex = num[i];
    }
    if(num[i]>maxindex){
        maxindex = num[i];
    }
    
}
console.log(minindex, maxindex)     //0  9


// iterate an object values and keys using for of loop

obj={
  name: "Ram",
  rollNo: 112,
  rank: 1,
  section: "C"
}
for(i of Object.keys(obj)){
  console.log(i)
}

// name
// rollNo
// rank
// section

// === Code Execution Successful ===


obj={
  name: "Ram",
  rollNo: 112,
  rank: 1,
  section: "C"
}
for(i of Object.values(obj)){
  console.log(i)
}

// Ram
// 112
// 1
// C

// === Code Execution Successful ===

obj={
  name: "Ram",
  rollNo: 112,
  rank: 1,
  section: "C"
}
for(i of Object.entries(obj)){
  console.log(i)
}

// [ 'name', 'Ram' ]
// [ 'rollNo', 112 ]
// [ 'rank', 1 ]
// [ 'section', 'C' ]

// === Code Execution Successful ===

obj={
  name: "Ram",
  rollNo: 112,
  rank: 1,
  section: "C"
}
for([i,j] of Object.entries(obj)){
  console.log(i, ":", j);
}

// name : Ram
// rollNo : 112
// rank : 1
// section : C

// === Code Execution Successful ===


