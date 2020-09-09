// Question 1: Create an Array from 0...100 without using traditional For-loop
let baseArray = Array.from(Array(101).keys());

console.log("-----------Question 1------------")
console.log(baseArray.length, baseArray[0], baseArray[100])

// Question 2: Create an Array of only even numbers from the above array
let evenArray = baseArray.filter(element => element%2 == 0);
console.log("-----------Question 2------------")
console.log(evenArray.length, evenArray[0], evenArray[50]);


// Create a function that returns a Promise which returns the 
// square of only even numbers and 
// throws an error if an odd number is passed

(async function () {
    try{
        let square = await squareOfEven(2);
        // console.log(square);
    }catch(err){
        console.log(err);
    }
})();

async function squareOfEven(number){
    // console.log(number)
    return new Promise(function(resolve, reject) {
      
        if (number % 2 == 0) {
          resolve(number*number);
        }
        else {
          reject(Error("Not even"));
        }
      });
}

// Question 3: create an array of even squares using the previous array
// direct invocation is important to see if the 
// candidate understands Arrow functions correctly.


// I DONT UNDERSTAND THE LANGUAGE OF QUESTION 3 
// but below is my solution
(async function () {
    console.log("-----------Question 3------------")
    try{
        let evenSquaresArray = [];
        for(let i = 0; i < evenArray.length; i++){
            evenSquaresArray[i] = await squareOfEven(evenArray[i]);
        }
        // console.log(evenSquaresArray);
        console.log("Qestion 4 answer array is saved in a variable, refer just above this line in code")

// Question 4: Sum of all the squares from the above array of Even Squares
console.log("-----------Question 4------------")
    let sumOfSquares = evenSquaresArray.reduce((a, b) => a + b, 0);
    console.log("Q4: Sum of all even squares = ", sumOfSquares);
    }catch(err){
        console.log(err);
    }


// Question 5: Call the above square Promise function with all numbers from 0-100
// and ensure that the errors are not thrown
// then print the following:
// 1. Number of errors 
// 2. The resultant array
// 3. Number of objects in the resultant array
    console.log("----------------Question 5---------------------------")
    let q5Array = [];
    let errors = 0
    // console.log(baseArray)
    for(let i = 0; i < baseArray.length; i++){
        try{
            let a = await squareOfEven(baseArray[i]);
            q5Array.push(a);
        }catch(singleError){
            errors++;
        }
    }


    // console.log(q5Array)
    console.log(`Q5: Number Of Erros ${errors}, Resultant Array is saved in variable, Number of elemnts in Resultant Array = ${q5Array.length}`)

})();






