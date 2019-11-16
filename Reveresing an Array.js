 function reverseArray(arr){
   let arr2=[]
   for(let i=arr.length-1;i>=0;i--){
     arr2.push(arr[i]);
   }
   return arr2;
 }
function reverseArrayInPlace(arr){
   let length=arr.length;
   for(let i=0;i<Math.floor(arr.length/2);i++){
     let temp=arr[i];
     arr[i]=arr[length-i-1];
     arr[length-i-1]=temp;
   }
  return arr;
 }
//console.log(reverseArray(["A", "B", "C"]));
// → ["C", "B", "A"];
let arrayValue = [1, 2, 3, 4, 5];
reverseArrayInPlace(arrayValue);
console.log(arrayValue);
