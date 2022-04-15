//? Write a function that takes two parameters, word and n, as arguments and returns the word concatenated to itself n number of times. 
//? (i.e. if I pass in ‘Hello’ and 3, I would expect the function to return ‘HelloHelloHello’).

function worddupe(word,n) {

    return word.repeat(n)

    
}

console.log(worddupe('hello',3))