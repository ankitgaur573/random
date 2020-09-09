

// Q1: Create a template string of a button HTML Element. Save the title
// for the button in a separate var and use it in the button correctly.

let buttonTitle = 'Click Me';
let a = `<button type="button">${buttonTitle}</button>`; 

// Q2: Create a function that returns a list element (<li>) HTML 
// use this function to create an ordered list HTML structure of numbers from 
// 1-30 without breaking the template string invocation i.e. usage of += is disallowed.

function getLi(value){
    return `<li>${value}</li>`
}

let lis="";
for(let i =1; i<31; i++){
    lis=lis+getLi(i);
}

let ol = `<ol>${lis}</ol>`;
console.log(ol)

 
