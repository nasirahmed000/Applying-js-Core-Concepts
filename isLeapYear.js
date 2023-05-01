function isLeapYear(year){
    const remainder = year % 4;
   
    if (remainder === 0 ){
        return true;
    }
    
    else{
     return  false;
    }
}

const myYearIs= isLeapYear(1933);
console.log("my year is leap year",myYearIs);
const herYearIs= isLeapYear(1960);
console.log("my year is leap year",herYearIs);































