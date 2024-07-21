
// ### Spread Operator Practice Questions:
// 1. **Combine Arrays**: Write a function that combines two arrays using the spread operator.
// var obj = {
    //     name : "pratham",
    //     lname : "patel",
    //     age : 19
    // }
    
    // var obj2 = {
    //     name1 : "rohan",
    //     lname1 : "patel",
    //     age1 : 20
    // }
    // var obj3 = {...obj,...obj2};
    // console.log(obj3);

// 2. **Pass Array Elements**: Create a object that takes an array of numbers and passes each element as arguments to another object using the spread operator.
// 3. **Copy Arrays**: Demonstrate how to make a copy of an array using the spread operator.





// ### Destructuring in Objects Practice Questions:
// 4. **Extract Object Properties**: Write a function that extracts specific properties (`name` and `age`) from an object using destructuring.
// var obj = {
//     name : "pratham",
//     age : 20,
//     std : "12th",
//     add : "gandhinagar"
// }
// var {age} = obj;
// var {name:Name} = obj; 
// console.log(age);
// console.log(Name);

// 5. **Function Parameters**: Implement a function that uses destructuring to extract parameters from an object passed as an argument.
// 6. **Default Values**: Create a function that uses destructuring with default values to handle missing properties in an object.




// ### Nested Destructuring Practice Questions:
// 7. **Nested Object Destructuring**: Extract nested properties (`name` and `address`) from an object that contains another object.
// var CollegeStudent1 = {
//     fname :"Raj",
//     lname : 'Patel',
//     Age :12,
//     Address : {
        
//         city : {
//             city1 : "AMD",
//             city2 :"GNR"
//         },
//         state : "Gujarat"
//     }
// };
// var {Address} = CollegeStudent1;
// console.log(Address);
// console.log(CollegeStudent1.Address.state);
// var {Address:{city:{city2},state}} = CollegeStudent1;
// console.log(state);
// console.log(city2);



// // 8. **Nested Array Destructuring**: Destructure nested arrays to extract specific values into variables.
// var arr = [1,2,3,4];
// var [a,,,b] = arr;
// console.log(a,b);
// 9. **Function Return**: Write a function that returns an object with nested properties and use destructuring to extract those properties in the calling code.