// 1. Access a property of an object using both dot notation and bracket notation.
// let car = {
//     brand: "Toyota",
//     model: "Camry",
//     year: 2022,
//     color: "Silver"
//   };

// console.log(car.brand);
// console.log(car["brand"]);


// 2. Iterate over the properties of an object and print each property and its value.
// for (const key in car) {
    // console.log(key,":",typeof key)/;
// }


// 3. Dynamically create an object based on user input, using computed property names.
// var value1 = "prathampatel412005@gmail.com";
// var value2 = "pratham555";

// var key1 = "Email";
// var key2 = "Password";

// var gmail = {};

// gmail[value1] = key1;
// gmail[value2] = key2;
// console.log(gmail);
// var {key1:email} = gmail;
// console.log(email);

// 5. Implement a check and manipulation of an object's properties: if a property exists, delete it; if not, add it with a default value.
// let car = {
//     brand: "Toyota",
//     model: "Camry",
//     year: 2022,
//     color: "Silver"
//   };
// var n = prompt("Enter the string : ");
// for (const key in car) {
//     if(n==key){
//         delete car.brand;
//         console.log(car);   
//     }
//     else{
//         car.key = "not found!";
//     }
// }
console.log(car);
let people = [
    { name: 'Pratham', age: 30, occupation: 'Developer' },
    { name: 'Jane', age: 25, occupation: 'Designer' },
    { name: 'Sam', age: 35, occupation: 'Manager' }
];
for (let i = 0; i < people.length; i++) {
    for (let j = 0; j < people.length; j++) {
        if(people[i].name[0] < people[j].name[0]){
            var temp =  people[i];
            people[i] = people[j];
            people[j] = temp;
        }
    }
}
console.log(...people);

















// 4. **Nested Objects and Iteration:**
//    - Create an object that contains other nested objects. Write a function that iterates through all nested levels and prints out the keys and values at each level.
// var CollegeStudent1 = {
//         fname :"Raj",
//         lname : 'Patel',
//         Age :12,
//         Address : {
            
//             city : {
//                 city1 : "AMD",
//                 city2 :"GNR"
//             },
//             state : "Gujarat"
//         }
//   };
//   var key1 = CollegeStudent1.Address;
// for (const key in key1) {
//     console.log(key,key1[key]);
// }
   