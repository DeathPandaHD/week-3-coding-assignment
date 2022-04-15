//? Write a function called willBuyDrink that takes a boolean isHotOutside, and a number moneyInPocket, 
//? and returns true if it is hot outside and if moneyInPocket is greater than 10.50.


isHotOutside= true
nothot= false
moneyInPocket = 12.50

function willBuyDrink(hot,cash) {
    if (hot===true) {
        if (cash >=10.50) {
            return true
        }else{
            return false

        }
    }
    
}

console.log(willBuyDrink(isHotOutside,moneyInPocket))