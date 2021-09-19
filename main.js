// Exercise 10
// Write a JavaScript program that prints a number between 1 and 10. Use a while loop
console.info("%cExercise 10", "color: black; background: pink;")

let i = 0;
while (i < 10) {
    i++;
    console.log(i);
}

// Exercise 11
// Write a JavaScript program that prints a number from 10 to 1. Use a while loop
console.info("%cExercise 11", "color: black; background: pink;")

let q = 11;
while (q > 0) {
    q--;
    console.log(q);
}

// Exercise 12
// Write a javaScript program that finds the sum of all numbers between 1 and 10. Use a while loop
console.info("%cExercise 12", "color: black; background: pink;")

let sum = 0;
let number = 1;
while (number <= 10) {
    sum += number;
    number++;
}
console.log("The sum is " + sum)

// Exercise 13
// Write a JavaScript program that loops through 10 times. Each time the program makes a loop, a random number must be stored in an array. Once it has looped 10 times, the array with all the random numbers must be printed. Use a while loop.
console.info("%cExercise 13", "color: black; background: pink;")

let arr = [];
let loop = 0;
while (loop < 10) {
    arr.push(Math.floor (Math.random () * 11));
    loop++;
}
console.log(arr) 

// Exercise 14
// Write a JavaScript program that first prints your name and then checks if it continues to print your name. Use a do while loop.
// Describe in your own words in the commentary in the JavaScript code what the difference is between a while loop and a do-while loop.
console.info("%cExercise 14", "color: black; background: pink;")

/* let myName = "Mégane";
let counter = 0;
do {
    myName += counter;
    console.log(myName)
} while (myName == "Mégane"); */

// Exercise 15 + 16
// Write a JavaScript program that prints a number between 1 and 10s. Use a for-loop.
console.info("%cExercise 15", "color: black; background: pink;")

for (j = 1; j <= 10; j++) {
    console.log(j);
}

// Exercise 16.1
// Type a JavaScript program that makes seven calls to console.log to output the following triangle. Use a while loop.
/*
##
###
####
#####
######
####### 
*/
console.info("%cExercise 16.1", "color: black; background: pink;")

let num = 0;
let hash = "";
while (num < 7) {
    hash += "#";
    num++;
    console.log(hash);
} 

// Exercise 17
// Write a JavaScript program that loops through an array of your 5 favorite actors.
// Print each actor in the console, but select the actor on index 3 in the array and give him or her a special word of praise along the way when you print the actor in the console.
// Use a for-loop.
console.info("%cExercise 17", "color: black; background: pink;")

let actors = ["Johnny Depp", "Nicole Kidman", "Leonardo DiCaprio", "Robert DeNiro", "Al Pacino"];

for(j = 0; j < actors.length; j++) {
    console.log(actors[j])

    if(j == 2) {
        console.log(actors[j] + " is a great actor")
    }
} 

// Exercise 18
// Break out of looped when looped reaches the third actor in the array.
// Use a for-loop.
console.info("%cExercise 18", "color: black; background: pink;")

for(j = 0; j < actors.length; j++) {
    console.log(actors[j])

    if(j == 2) {
        break;
    }
}

// Exercise 19
// Write a JavaScript program that can handle a price on a color TV and black and white TV with or without remote control and flat screen over time from 1960 to 2020. 
// The price does not have to be realistic, you decide. However, there must be at least 5 shots in time. 
// Use AND and OR operators to find the right price for the item.
console.info("%cExercise 19", "color: black; background: pink;")

// Exercise 19.1
// Write a JavaScript program that uses console.log to print all numbers from 1 to 100 with two exceptions. For numbers that can be divided by 3, print "Fizz" instead of the number, and for numbers that can be divided by 5 (and not 3), print "Buzz" instead.
// Once you have that job, change your program to print "FizzBuzz" for numbers that can be shared with both 3 and 5 (and still print "Fizz" or "Buzz" for numbers that can only be shared with one of these ).
// Hint: modulus operator
console.info("%cExercise 19.1", "color: black; background: pink;")

// Exercise 20  
console.info("%cExercise 20", "color: black; background: pink;")

function myNameIs(name){
    console.log(`My name is ${name}`)

    return name;
}
myNameIs("Mégane");

// Exercise 21
// Write a JavaScript program with a function that takes two parameters: “name” and “last name”. The function should put the “name” and “last name” together into a single string: "My name is name last name". The function should be returned to a variable and printed out in the console.
// This exercise must be written in 3 sessions, as a “function expression”, “function declaration” and an “Arrow function”:
console.info("%cExercise 21", "color: black; background: pink;")

let myName = (firstName, lastName) => {
    console.log(`My name is ${firstName} ${lastName}`)  
    return firstName, lastName;
}
myName("Mégane", "Londoño") ;

// Exercise 22
// Write a JavaScript program that should find the area of a right-angled square. 
console.info("%cExercise 22", "color: black; background: pink;")

let area = 0;

// Exercise 23
// Write a JavaScript program with one or more functions. The program must be able to take a CPR number as a parameter: 10 numbers (xxxxxxxxxx) or 10 numbers with a “-” after the first 6 digits: (xxxxxx-xxxx).

// (xxxxxx-xxxx) First two numbers in CPR are your birthday: 01 = first day in the month
// (xxxxxx-xxxx) The next two numbers are the month: 12 = December
// (xxxxxx-xxxx) The next two numbers are the year: if you are born in 95 the number is 95
//(xxxxxx-xxxx) The last four numbers is about your sex, if they are ODD you are a boy if they are EVEN you are a girl. 

// If there are too few numbers or too many numbers entered, the function must return a message where the function draws attention to this. This have to work with 11 and 10 digits.
// Determine if you are a man or a woman
//Determine if the birthday (first 6 digits) are valid birthday digits.
console.info("%cExercise 23", "color: black; background: pink;")

//CPR værdien
let cprvalue = "141299-8443";

//Start check
checkcpr = true;

//Cpr without "bindestrich"
let cprbindestreg = cprvalue.replace(/-/,'');

//If CPR number without "bindestrich" does not have 10 characters
if(cprbindestreg.length != 10){

    //If false, CPR number is not valid.
    //Here: false, since it does not have 10 characters
    checkcpr = false;
}

//Gender
    //Last 4 numbers
    let evenodd = cprvalue.slice(cprvalue.length - 4);

    //Hvis det kan gå op med 2
    if(evenodd % 2 === 0){
        console.log("Køn: Kvinde");
    //Hvis det ikke kan gå op med 2
    } else if(evenodd % 2 !== 0){
        console.log("Køn: Mand");
    //Hvis det ikke er tal
    } else{
        checkcpr = false;
    }

//Day
    //2 first numbers
    let day = cprvalue.slice(0,2);
    //output of day
    console.log("day:", day);
    //If day is > 31
    if(day > 31){
        checkcpr = false;
    }

//Month
    //2-4 (3. and 4. number)
    let month = cprvalue.slice(2,4);
    //output of month
    console.log("Måned:", month);
    //If month > 12
    if(month > 12){
        checkcpr = false;
    }

//Year
    //4-6 (5. and 6. number)
    let year = cprvalue.slice(4,6);
    //output of year
    console.log("År:", year);

//Validity check
if(checkcpr === true){
    //outputs valid
    console.log("Gyldigt CPR nummer:", cprvalue);
} else{
    //outputs invalid
    console.error("Ugyldigt CPR nummer:", cprvalue);
}

// Exercise 24
// Write a JavaScript program with a function that can take an array as a parameter. The array must contain a minimum of 3 numbers. The function must return an array where each number has been multiplied by PI (ie 3.14).
// Print the array in the console.
console.info("%cExercise 24", "color: black; background: pink;")