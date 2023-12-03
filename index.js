//1. Write a program that takes a positive integer from user &
// display the following in your browser.


// a. number
// b. round off value of the number
let number = 3.45214;
let roundNum = Math.round(number);
console.log(`round of value ${roundNum}`);

// c. floor value of the number
let Value = 3.45214;
let flValue = Math.floor(Value)
console.log(`floor value is  ${flValue}`)

// d. ceil value of the number
let numValues = 3.45214;

let cevalue = Math.ceil(numValues)
console.log(`the ceil value ${cevalue}`)


// 2. Write a program that takes a negative floating point
// number from user & display the following in your browser.

// a. number
let num = -2.673
console.log(num)
// b. round off value of the number
let nums = -2.673;
let roundNums = Math.round(nums)
console.log(`the round of value is  ${roundNum}`)

// c. floor value of the number

let fNum = -2.673;
let floorValue = Math.floor(fNum)
console.log(`the answer floor value ${floorValue}`)
// d. ceil value of the number

let ceilValue = -2.673
let cValue = Math.ceil(ceilValue)
console.log(`the ceil value ${cValue}`)

// 3. Write a program that displays the absolute value of a
// number.

let absValue =  -4 ;
console.log(absValue)
let postiveValue =Math.abs(absValue)

console.log(`the absolute value answer is ${postiveValue}`)
// E.g. absolute value of -4 is 4 & absolute value of 5 is 5

// 4. Write a program that simulates a dice using random()
// method of JS Math class. Display the value of dice in your
// browser.:

let diceValue = Math.floor(Math.random()*6 +1)
console.log(`random dice value ${diceValue}`)

// 5. Write a program that simulates a coin toss using random()
// method of JS Math class. Display the value of coin in your
// // browser


function ClickFun(){
    let   randNum = Math.floor(Math.random()*2);
    if(randNum=== 0){
        document.getElementById("headTail").innerHTML =  "random coin  value: Head " 
    }
    else{
        document.getElementById("headTail").innerHTML = "random coin  value: Tail " 
}
}

// 6. Write a program that shows a random number between 1
// and 100 in your browser.

let randomNumSelect = Math.floor(Math.random()*100+1)
console.log(`random number between 1 and 100 : ${randomNumSelect}`)



// 7. Write a program that asks the user about his weight. Parse
// the user input and display his weight in your browser.
// Possible user inputs can be:
// a. 50
// b. 50kgs
// c. 50.2kgs
// d. 50.2kilograms


// 8. Write a program that stores a random secret number from
// 1 to 10 in a variable. Ask the user to input a number
// between 1 and 10. If the user input equals the secret
// number, congratulate the user.

// / Ask the user to input a number between 1 and 10
let userNum = +prompt("Guess the number between 1 and 10");
let isSectretNum = false
// Generate a random secret number between 1 and 10
let secretNum = Math.floor(Math.random() * 10) + 1;
console.log("Secret Number: " + secretNum);

// Check if the user input equals the secret number
if (userNum === secretNum) {
    console.log("Congratulations! You guessed the correct number!");
    isSectretNum  = true
}

if(isSectretNum ){
    console.log("Try again. The correct number was " + secretNum);
}