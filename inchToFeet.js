// let inches = 72; 

// const INCHES_PER_FOOT = 12; 

// let feet = inches / INCHES_PER_FOOT; 

// console.log(`${inches} inches is equal to ${feet} feet`); 

function inchesToFeet(inches) {
    const INCHES_PER_FOOT = 12;
    let feet = inches / INCHES_PER_FOOT;
    return feet;
  }
  
  let inches = 72;
  let feet = inchesToFeet(inches);
  
  console.log(`${inches} inches is equal to ${feet} feet`);
  

  