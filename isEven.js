
// check the number even or odd 

function isEven(number){
    const remainder = number % 2;
    if ( remainder === 0 ){
      return true;
        
    }
    else{
      return false;
    }
}
const myNumberIsEven = isEven(505);
console.log(myNumberIsEven);
const herNumberIsEven = isEven(200);
console.log(herNumberIsEven);