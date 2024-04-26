console.log("Hellow World")
const myArray= new Array("One","Two","Three")
let  result=myArray.toString();
console.log(result);
console.log(typeof(myArray))
console.log(typeof(result))
console.log(Array.isArray(myArray))
console.log(Array.isArray(result))
console.log(myArray instanceof Array)
myArray[8]="Seven"
console.log(myArray)
console.log(Object.keys(myArray))
console.log(myArray.length)
myArray.length=20;
console.log(myArray.length)
console.log(myArray[3])