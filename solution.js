//a closure gives you access to an outer function's scope from an inner function.


function personalDice(name){
    return function(){
        // generate random number between 1 and 6
      const newRoll = Math.floor(Math.random() * 6) + 1;
      console.log(`${name} rolled a ${newRoll}`)
    }
  }
  
  const dansRoll = personalDice("Dan");
  
  const zoesRoll = personalDice("Zoe");
  
  
  dansRoll();
  dansRoll();

// The clousure is being used in lines 6 through 9

//its alwas a number 1 - 6, but the number itself could change to any integer between 1 and 6
function createBase(num) {
    return function (inner){
        return inner + num
    }
    
}

const addSix = createBase(6);
// console.log(addSix(6));
console.log(addSix(10)); // returns 16
console.log(addSix(21)); // returns 27
addSix(10)
addSix(21)

