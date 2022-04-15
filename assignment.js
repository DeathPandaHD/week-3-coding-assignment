console.log('Step 1:')//? step 1:Create an array called ages that contains the following values: 3, 9, 23, 64, 2, 8, 28, 93.

const ages = [3, 9, 23, 64, 2, 8, 28, 93];

//!--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
console.log('Step 1a:');//? a.Programmatically subtract the value of the first element in the array from the value in the last element of the array 
//?(do not use numbers to reference the last element, find it programmatically, 
   
var lastelement = ages[ages.length - 1]; //this is giving a variable to the last element of the array

var firstelement =ages[0];// the first element in an array will always be in the [0] position
    
        console.log(lastelement - firstelement);// this outputs the differnce between the first and last element  
  
//!--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
        console.log('Step 1b:') ;  //? b.Add a new age to your array and repeat the step above to ensure it is dynamic (works for arrays of different lengths).
     
        ages.push(80); // this pushes a new element into the array
    
var lastelement = ages[ages.length - 1]; //this resets the array allowing the next console.log use the new array

        console.log(lastelement - firstelement);// outputs 50 to the log
 
//!--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

        console.log('Step 1c:');//? c.Use a loop to iterate through the array and calculate the average age. Print the result to the console.

    function ArrayAvg(ages) {
        var i = 0, summ = 0, ArrayLen = ages.length; // this defines the needed variables in the loop         
        
        while (i < ArrayLen) { // compares i to ArrayLen
            summ = summ + ages[i++]; // determines the summ of all elements in the array
    }
        return summ / ArrayLen; // divides the summ of all elements with the length of the array returning the average
    }
    
    var a = ArrayAvg(ages);; // gives variable to the funcion

    console.log(a); // logs average to console
    
//!--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
    
        console.log('Step 2:')//? 2. Create an array called names that contains the following values: ‘Sam’, ‘Tommy’, ‘Tim’, ‘Sally’, ‘Buck’, ‘Bob’.

 const names = ['Sam', 'Tommy', 'Tim', 'Sally', 'Buck', 'Bob'];

//!--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
        console.log('Step 2a:');//? a.Use a loop to iterate through the array and calculate the average number of letters per name. Print the result to the console.

 var sum=0;

 for (let i = 0; i < names.length; i++) { // this loop will fund the length of each string in the array and adding them together
     sum += names[i].length; 
     
 }

  var avg = sum/names.length // divides the sum all the strings and divides by length of the array

  console.log('average number of letters per name =' + avg ); // outputs code to console

//!--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
        console.log('Step 2b:');//? b.Use a loop to iterate through the array again and concatenate all the names together, separated by spaces, and print the result to the console.

 var allnames= "" // makes a variable that is able to logged out and changed in the loop

 for (let i = 0; i < names.length; i++) {
    allnames += names[i] + " ";  // loop prints out each name in the array and adds a space between each converted element
     
 }

 console.log(allnames); // logs out the allnames variable thats changed by the for loop

//!--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
        console.log('Step 3:')//? 3.How do you access the last element of any array?
    
    console.log('use array[array.lengh - 1] to grab the last element of the array');
    
 //!--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------   
        console.log('Step 4:');//? 4.How do you access the first element of any array?

console.log('using array[0] will use the first element of the array because the first element is always in the 0 position of the array');

//!--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------   

        console.log('steps 5/6:');//? step 5.Create a new array called nameLengths. 
//? Write a loop to iterate over the previously created names array and add the length of each name to the nameLengths array.

var nameLengths = [names.length]
for (let i = 0; i < names.length; i++) { //loop add the length of each name to namelengs array
   nameLengths[i] = names[i].length;
   
}

//!--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------   

//? step 6: Write a loop to iterate over the nameLengths array and calculate the sum of all the elements in the array. 
//? Print the result to the console.

var sum = 0;

for (let i = 0; i < nameLengths.length; i++) {
    sum += nameLengths[i]; // add everthing in namelengths
    
}

console.log('sum of all lengths in nameLengths[] = '+ sum);

//!--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------   
console.log('step 7:');
//? Write a function that takes two parameters, word and n, as arguments and returns the word concatenated to itself n number of times. 
//? (i.e. if I pass in ‘Hello’ and 3, I would expect the function to return ‘HelloHelloHello’).

function worddupe(word,n) {

    return word.repeat(n);

    
}

console.log(worddupe('hello',3)); 
//!--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------   
console.log ('step 8:')//? Write a function that takes two parameters, firstName and lastName, and returns a full name (the full name should be the first and the last name separated by a space).

function   fullname(firstName,lastName) {
    return firstName+' '+lastName;
}

console.log(fullname('Cruz','Garcia'));
//!--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------   
console.log('step 9:')//? Write a function that takes an array of numbers and returns true if the sum of all the numbers in the array is greater than 100.

function over100(nums) { //this function is going to pull the previous ages array and add them up to return the sum of the number in the ages array
    
    let sum=0 
    
    for (let i = 0; i < nums.length; i++) {
        sum += nums[i];
        
    }

    return sum;
    
}

console.log(over100(ages) >= 100); //compares output of function over100 to see if its >= 100 outputing a boolean response
//!--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------   
console.log('step 10:')//? Write a function that takes an array of numbers and returns the average of all the elements in the array.

var newages=[30,10,25,16,98]

function avgAges(nums) {
    
    let sum=0 ;
    
    for (let i = 0; i < nums.length; i++) {
        sum += nums[i];
        
    }

    return sum;
    
    
}

console.log(avgAges(newages)/newages.length);

//!------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
console.log('step 11')//? Write a function that takes two arrays of numbers and returns true if the average of the elements in the first array is greater than the average of the elements in the second array.

function agescompare(nums) {
    
    let sum=0 ;
    


    for (let i = 0; i < nums.length; i++) {
        sum += nums[i];
        
    }
  return sum/ nums.length;
    
    
}
console.log(agescompare(newages)>=agescompare(ages)); // i used the same function to find the average of 2 differnt arrays

//!------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
console.log('step 12:')//? Write a function called willBuyDrink that takes a boolean isHotOutside, and a number moneyInPocket, 
//? and returns true if it is hot outside and if moneyInPocket is greater than 10.50.

isHotOutside= true;
nothot= false;
moneyInPocket = 12.50;

function willBuyDrink(hot,cash) {
    if (hot===true) {
        if (cash >=10.50) {
            return true;
        }else{
            return false;

        }
    }
    
}

console.log(willBuyDrink(isHotOutside,moneyInPocket));

//!------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

console.log('step 13:')//?Create a function of your own that solves a problem. In comments, write what the function does and why you created it.



amdone=true;

function final(done) {
    done===true

    return done;
    
}

console.log(final(amdone + ' is done'));
