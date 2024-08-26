//0) sort() Method:
// Sorting Numbers: Write a function to sort an array of numbers in ascending order using the sort() method.
// var arr = [2,4,8,1,3,5];
// var ans = arr.sort((a,b)=>{
//     return a-b;
// })
// console.log(ans);


// //1) Sorting Strings: Sort an array of strings alphabetically (case-sensitive).
// var arr = ["banana",
//     "apple",
//     "grape",
//     "kiwi",
//     "cherry",
//     "orange",
//     "pear"];
// arr.sort();
// console.log(arr,typeof arr);

// 2) Custom Sorting: Sort an array of objects based on a specific property (e.g., age, name).
// const students = [
//         { name: "Alice", age: 20 },
//         { name: "Bob", age: 22 },
//         { name: "Charlie", age: 19 },
//         { name: "Diana", age: 21 },
//         { name: "Eve", age: 20 },
//         { name: "Frank", age: 23 },
//         { name: "Grace", age: 22 },
//         { name: "Hannah", age: 18 },
//         { name: "Ian", age: 21 },
//         { name: "Judy", age: 20 }
//       ];

// var ans = students.sort((a,b)=>{
//     return a.age - b.age;
// })
// console.log(...students,);

// console.log(ans);

//3) Reverse Sorting: Sort an array of numbers in descending order using sort().
// var arr = [2,5,6,1,3,4,9];
// var ans = arr.sort((a,b)=>{
//       return b-a;
// })
// console.log(ans);


////////////////////////////
//1)//every

// // Check Array of Numbers: Write a function that checks if all elements in an array are numbers using the every() method.
// var Arr = [10,5,40,11,14,7,89];
// var ans = Arr.every((a)=>{
//       console.log(a);
//       return a = typeof Number;
// })
// console.log(ans);
// var ans = Arr.some(
//       (n)=>{
//           console.log(n);
//           return n>10;
//       }
//   );
//   console.log(ans);


// 2)
// String Length Check: Verify if all strings in an array have a length greater than 3.
// var arr = ["raja","pratham","diya"];
// var ans  = arr.every((a)=>{
//       console.log(a);
//       return a.length > 3;
// })
// console.log(ans);



//3)
// Divisibility Check: Determine if all elements in an array of numbers are divisible by 2.
// var arr = [4,6,8,56,78];
// var ans = arr.every((a)=>{
//       console.log(a);
//       return a%2 == 0;
// })
// console.log(ans);
//////////////////////////

//2)
//some

//1) Check for Even Numbers: Write a function that checks if there are any even numbers in an array using the some() method.
// var arr = [1,2,3,4,5,6,7];
// var ans = arr.some((a)=>{
//       console.log(a);
//       return a%2 == 0;
// });
// console.log(ans);



// String Starting with Specific Letter: Determine if there is any string in an array that starts with the letter 'A'.
// var arr = ["Alish","The","Pratham",];
// var ans = arr.some((a)=>{
//       console.log(a);
//       return a.charAt(0) == "A";      
// })
// console.log(ans);

//////////////////////////////////////
// 2. **Filter Odd Numbers**: Filter out all odd numbers from an array using `filter`.
// var arr = [1,3,2,4,5,6,7,8];
// var ans = arr.filter((a)=>{
//       return a%2 != 0;
// })
// console.log(ans);


//////////////////////////////////////////

// 2. **Fill:**
//    - Create an array of 5 elements and use `Array.prototype.fill` to replace all elements with a specific value (e.g., `'filled'`).
// var arr = [1,2,3,4,5];
// arr.fill("Filled",0,5);
// console.log(arr);


// 10. **Fill:**
//     - Create an array of 10 elements and use `Array.prototype.fill` to replace all elements with the numbers from 1 to 10.
// var arr = [4,2,6,7,2,8,9,9,6,4];
// for (let i = 0; i < arr.length; i++) {
//   arr.fill(i+1,i);
// }
// console.log(arr);



///////////////////////////////////////////////////////
//5) splice
// 5. **Remove First Element**: Remove the first element of an array using `splice`.
// var arr = [1,2,3,4,5,6];
// var RemoveElement = arr.splice(0,1);
// console.log(arr);
// console.log(RemoveElement); 


//////////////////////////////////
// / 1. **Find:**
//    - Write a function `findEvenIndex` that takes an array of integers and returns the index of the first even number using `Array.prototype.find`. If no even number is found, return `-1`.
// var arr = [11,13,23,45,67,81];
// function findEvenIndex(arr){
//     var ans = arr.find(num => num%2 === 0);
//     // console.log(ans);
//     return ans !== undefined? arr.indexof(ans) : -1;
    
// }
// findEvenIndex(arr);
// 5. **Find:**
//    - Create a function `findPrime` that takes an array of integers and returns the first prime number using `Array.prototype.find`. If no prime number is found, return `null`.
// var arr = [10,4,6,8,3];
// var ans = (a)=>{
//     // console.log(a);
//     var ans1 = a.find(()=>{
//         return a== isprime();
//     })
//     return ans1;
// }
// var isprime = (a)=>{
//     var i;
//     var count = 1;
//     for (let i = 2; i < a; i++) {
//         if(a%i==0){
//             count++;
//         }
        
//     }
//     if(count>2){
//         return a;
//     }
//     // console.log(count);
// }
// ans(arr);
// ans(arr);

// 9. **Find:**
//    - Implement a function `findLongestWord` that takes an array of strings and returns the longest word using `Array.prototype.find`. If there are multiple longest words, return the first one found.

// var arr = [2,67,34,3,4,8];
function part(arr,low,high){
    const pivat = arr[high];

    var i = low - 1;
    for (let j = low; j < high; j++) {
        if(arr[j]<pivat){
            i++;
            [arr[i],arr[j]] = [arr[j],arr[i]];
        }
    }

    [arr[i+1],arr[high]] = [arr[high],arr[i+1]];
    return i+1;
}
function Quickshort(arr,low,high){
        if(low<high){
            piv = part(arr,low,high);

            Quickshort(arr,low,piv-1);
            Quickshort(arr,piv+1,high);
        }
}
function printarr(arr){
    console.log(arr.join(" "));
}
var arr = [2,67,34,3,4,8];
console.log("The orignal arr :" );
printarr(arr);

console.log("The shorted arr : ");
Quickshort(arr,0,arr.length-1);
printarr(arr);