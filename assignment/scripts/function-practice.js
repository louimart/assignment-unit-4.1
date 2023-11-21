console.log('***** Function Practice *****');

// Add the required code to complete the functions below
// After _each_ function, use a console log to call the function
// to test it and display the result

// 1. Function to return 'Hello World!'
function hello() {
  return 'Hello World!';
}
// Call the function to test
console.log('Test - should say "Hello World!"', hello());


// 2. Function to return an personalized hello, using the `name` argument.
//    for example 'Hello, Jo!', or 'Hello, Stacy!'
function helloName(name) {
  console.log('>>> IN helloName <<<')
  let personalizedHello = `Hello, ${name}!`;
  // console.log(personalizedHello);
  return personalizedHello;
} // END helloName
// Remember to call the function to test
console.log(helloName('Louis'));

// 3. Function to add two numbers together & return the result
function addNumbers(firstNumber, secondNumber) {
  // return firstNumber + secondNumber;
  console.log('>>> IN addNumber <<<');
  return firstNumber + secondNumber;
} // END addNumbers
console.log(addNumbers(2, 10));

// 4. Function to multiply three numbers & return the result
function multiplyThree(num1, num2, num3) {
  console.log('>>> IN multiplyThree <<<');
  return num1 * num2 * num3;
}
console.log(multiplyThree(2, 3, 4))

// 5. Function that will return true if a number is positive, 
//    or greater than zero, and false otherwise
function isPositive(number) {
  console.log('>>> IN isPositive <<<')
  if (number > 0) {
    console.log(true, `The value ${number} is positive and greater than zero.`);
    return true;
  } else {
    console.log(false, `The value ${number} is NOT positive or greater than zero.`);
    return false;
  } 
}
isPositive(-1);
isPositive(22);

// Call the function to test each outcome (true & false) 
// Write a separate console.log statement for each outcome


// 6. Function to return the _last_ item in an array. If the 
//    array is empty, return `undefined`.
array = [ 1, 2, 3, 5 ]
function getLast(array) {
  console.log('>>> IN getLast <<<')
  let list = [ array.pop() ];
  return list.pop(array);
}
console.log(getLast(array));

// 7. Function to find a value in an array. Return true if the 
//    value is found and false otherwise. Use a loop;
//    DO NOT use Array.includes, Array.indexOf, or Array.find 
array = [ 23, 43, 88, 16, 10, 5 ];
function find(value, array2) {
  console.log('>>> IN find <<<')
  // for (let x=0; x<array.length; x++){
  for (let x of array2){
    // console.log(x);
    if (x === value){
      console.log(`${value} was found in array.`)
      return true;
    }
  }
  return false;
}
console.log(find(88, array))


// ----------------------
// Stretch Goals
// ----------------------
// 8. Function to check if a letter is the first letter in a 
//    string. Return true if it is, and false otherwise
function isFirstLetter(letter, string) {
  if (string.indexOf(letter) === 0){
    console.log(`${letter} is the first letter in ${string}`);
    return true;
  }
  console.log(`${letter} is NOT the first letter in ${string}`);
  return false;
}
console.log(isFirstLetter('a', 'apple'));
console.log(isFirstLetter('l', 'bell'));

// 9. Function to return the sum of all numbers in an array
newArray = [1, -2, 3, -4, 5]
function sumAll(array) {
  console.log('>>> IN sumAll <<<')
  let sum = 0;
  // TODO: loop to add items
  for ( let i of array ){
    sum += i;
  }
  // TODO: return the sum
  return sum;
} 
console.log(`The sum of the array is ${sumAll(newArray)}.`);

// 10. Function to return a new array of all positive (greater than zero)
//     numbers contained in an input array. If there are no positive numbers
//     return an empty array. Note: The input array should not change.
function allPositive(array) {
  console.log('>>> In allPositive <<<')
  let copyArray = [];
  for ( let i = 0; i < array.length; i++ ) {
    if (array[i] > 0){
      copyArray.push(array[i]);
  }
} return copyArray;
}
console.log(`Numbers in the array are ${newArray}.`);
console.log(`Positive numbers in the array are ${allPositive(newArray)}.`);

// 11. Pick a problem from Edabit(https://edabit.com/) or 
//     CodeWars(https://www.codewars.com/). Then describe it 
//     here in a comment, write the function, and test it!


// DO NOT MODIFY
// Used for automated testing
try {
  module.exports = {
    hello,
    helloName,
    addNumbers,
    multiplyThree,
    isPositive,
    getLast,
    find,
    isFirstLetter,
    sumAll,
    allPositive,
  };
} catch (e) {
  // Do nothing
}
