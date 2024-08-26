// Create a Set and add the elements 1, 2, 3, 4, 5 to it. Print the Set.
//-----------------------------------
// Check for Element:
// var arr = arr[33,5,8,44,6];
// var mySet = new Set([]);
// console.log(mySet);
// for (let i = 1; i <= 5; i++) {
//     mySet.add(i);
// }
// console.log(mySet);



// Given a Set, check if it contains the number 3. Print the result.
// mySet.has(3);
// console.log(mySet);
//-----------------------------------


// Remove an Element:
// Remove the element 4 from a Set. Print the Set before and after removal.
// mySet.delete(3);
// console.log(mySet);

//-----------------------------------
// Convert Array to Set:
// Convert an array [1, 2, 3, 4, 4, 5, 5] to a Set to remove duplicates. Print the Set.
var mySet = new Set([1,2,3,4,5,4,5]);
// console.log(mySet);

//-----------------------------------

//-----------------------------------
// Iterate over a Set:

// Iterate over a Set and print each element.
// mySet.forEach((a)=>{
//     console.log(a);
// })
//-----------------------------------
// Set Size:

// Find the size of a Set and print it.
// console.log(mySet.size);
//-----------------------------------

//-----------------------------------
// // Clear a Set:
// console.log(mySet);
// console.log(mySet.clear);
// Clear all elements from a Set. Print the Set before and after clearing.
//-----------------------------------
// Set from String:

// Create a Set from a string "hello". Print the Set.
var myString = new Set("Hello");
console.log(myString);
// myString.forEach((a)=>{
//     console.log(a);
// })
//-----------------------------------
// Unique Values from Array of Objects:
// Array of product objects
// Array of product objects
let myProduct = new Set([
    {
        id: 1,
        name: 'Laptop',
        price: 999.99,
        category: 'Electronics'
    },
    {
        id: 2,
        name: 'Smartphone',
        price: 499.99,
        category: 'Electronics'
    },
    {
        id: 3,
        name: 'Coffee Maker',
        price: 89.99,
        category: 'Home Appliances'
    },
    {
        id: 4,
        name: 'Desk Chair',
        price: 129.99,
        category: 'Furniture'
    },
    {
        id: 5,
        name: 'Notebook',
        price: 2.99,
        category: 'Stationery'
    }
]);


// Display the array of products
console.log(myProduct);
// console.log(myProduct.delete())


// Given an array of objects, extract unique values of a specific property using a Set.
//-----------------------------------