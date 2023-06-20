function findDaysInMonth(month,year){
if (month < 1 || month > 12) {
    console.log("Invalid month.");
  } 
else if (month === 2) {
    if (isLeapYear(year)) 
    {
      console.log("The month has 29 days.");
    } else 
    {
      console.log("The month has 28 days.");
    }
  } 
else if (month === 4 || month === 6 || month === 9 || month === 11) {
    console.log("The month has 30 days.");
  } 
else {
    console.log("The month has 31 days.");
  }
function isLeapYear(year1) {
  return (year1 % 4 === 0 && year1 % 100 !== 0) || year1 % 400 === 0;
}
}
findDaysInMonth(2,2012);