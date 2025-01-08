 
 // we can export any object outside of file using export keyword befor function name and function keyword


//  export function multiplicationOfTwoNum(a, b) {
//    return a * b;
//  }
 
 function multiplicationOfTwoNum(a,b)
{
   return a*b;   
}

 function additionOfTwoNumber(a,b)
{
    return a+b;
}

 const PI = 3.14




// we can export all object with single syntax which is below mentioned.

export {
    multiplicationOfTwoNum,
    additionOfTwoNumber,
    PI
}