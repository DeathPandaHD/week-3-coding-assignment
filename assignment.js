//? step 1:Create an array called ages that contains the following values: 3, 9, 23, 64, 2, 8, 28, 93.

const ages = [3, 9, 23, 64, 2, 8, 28, 93];
//? a.Programmatically subtract the value of the first element in the array from the value in the last element of the array 
//?(do not use numbers to reference the last element, find it programmatically, 
   


    var lastelement = ages[ages.length - 1]; //this is giving a variable to the last element of the array

    var firstelement =ages[0];// the first element in an array will always be in the [0] position
    
        console.log(lastelement - firstelement);// this outputs the differnce between the first and last element  
  
    //? Add a new age to your array and repeat the step above to ensure it is dynamic (works for arrays of different lengths).
     
        ages.push(80); // this pushes a new element into the array
    
    var lastelement = ages[ages.length - 1]; //this resets the array allowing the next console.log use the new array

        console.log(lastelement - firstelement);// outputs 50 to the log
        
    //? Use a loop to iterate through the array and calculate the average age. Print the result to the console.

    function ArrayAvg(ages) {
        var i = 0, summ = 0, ArrayLen = ages.length; // this defines the needed variables in the loop         
        
        while (i < ArrayLen) { // compares i to ArrayLen
            summ = summ + ages[i++]; // determines the summ of all elements in the array
    }
        return summ / ArrayLen; // divides the summ of all elements with the length of the array returning the average
    }
    
    var a = ArrayAvg(ages); // gives variable to the funcion

    console.log(a) // logs average to console
    


    
