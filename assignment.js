console.log('Step 1:')//? step 1:Create an array called ages that contains the following values: 3, 9, 23, 64, 2, 8, 28, 93.

const ages = [3, 9, 23, 64, 2, 8, 28, 93];

//!--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
console.log('Step 1a:')//? a.Programmatically subtract the value of the first element in the array from the value in the last element of the array 
//?(do not use numbers to reference the last element, find it programmatically, 
   
var lastelement = ages[ages.length - 1]; //this is giving a variable to the last element of the array

var firstelement =ages[0];// the first element in an array will always be in the [0] position
    
        console.log(lastelement - firstelement);// this outputs the differnce between the first and last element  
  
//!--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
        console.log('Step 1b:')   //? b.Add a new age to your array and repeat the step above to ensure it is dynamic (works for arrays of different lengths).
     
        ages.push(80); // this pushes a new element into the array
    
var lastelement = ages[ages.length - 1]; //this resets the array allowing the next console.log use the new array

        console.log(lastelement - firstelement);// outputs 50 to the log
 
//!--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

        console.log('Step 1c:')//? c.Use a loop to iterate through the array and calculate the average age. Print the result to the console.

    function ArrayAvg(ages) {
        var i = 0, summ = 0, ArrayLen = ages.length; // this defines the needed variables in the loop         
        
        while (i < ArrayLen) { // compares i to ArrayLen
            summ = summ + ages[i++]; // determines the summ of all elements in the array
    }
        return summ / ArrayLen; // divides the summ of all elements with the length of the array returning the average
    }
    
    var a = ArrayAvg(ages); // gives variable to the funcion

    console.log(a) // logs average to console
    
//!--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
    
        console.log('Step 2:')//? 2. Create an array called names that contains the following values: ‘Sam’, ‘Tommy’, ‘Tim’, ‘Sally’, ‘Buck’, ‘Bob’.

 const names = ['Sam', 'Tommy', 'Tim', 'Sally', 'Buck', 'Bob'];

//!--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
        console.log('Step 2a:')//? a.Use a loop to iterate through the array and calculate the average number of letters per name. Print the result to the console.

 var sum=0;

 for (let i = 0; i < names.length; i++) { // this loop will fund the length of each string in the array and adding them together
     sum += names[i].length; 
     
 }

  var avg = sum/names.length // divides the sum all the strings and divides by length of the array

  console.log('average number of letters per name =' + avg ) // outputs code to console

//!--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
        console.log('Step 2b:')//? b.Use a loop to iterate through the array again and concatenate all the names together, separated by spaces, and print the result to the console.

 var allnames= "" // makes a variable that is able to logged out and changed in the loop

 for (let i = 0; i < names.length; i++) {
    allnames += names[i] + " ";  // loop prints out each name in the array and adds a space between each converted element
     
 }

 console.log(allnames); // logs out the allnames variable thats changed by the for loop

//!--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
        console.log('Step 3:')//? 3.How do you access the last element of any array?
    
    console.log('use array[array.lengh - 1] to grab the last element of the array')
    
 //!--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------   
        console.log('Step 4:')//? 4.How do you access the first element of any array?

console.log('using array[0] will use the first element of the array because the first element is always in the 0 position of the array')

//!--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------   

        console.log('steps 5/6:')//? step 5.Create a new array called nameLengths. 
//? Write a loop to iterate over the previously created names array and add the length of each name to the nameLengths array.

var nameLengths = [names.length]
for (let i = 0; i < names.length; i++) {
   nameLengths[i] = names[i].length;
   
}

//!--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------   

//? step 6: Write a loop to iterate over the nameLengths array and calculate the sum of all the elements in the array. 
//? Print the result to the console.

var sum = 0;

for (let i = 0; i < nameLengths.length; i++) {
    sum += nameLengths[i];
    
}

console.log('sum of all lengths in nameLengths[] = '+ sum)

//!--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------   

        console.log('step 7:) //? Write a function that takes two parameters, word and n, as arguments and returns the word concatenated to itself n number of times.
//? (i.e. if I pass in ‘Hello’ and 3, I would expect the function to return ‘HelloHelloHello’).


function worddupe(word,n) {

    return word.repeat(n)

    
}

console.log(worddupe('hello',3)) 

