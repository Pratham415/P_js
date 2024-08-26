////////////////////////////
//    - Reduce.
// var Arr = [1,2,3,4,5,6,7,8,9,10];
// console.log(Arr);
// var ans = Arr.reduce(
//     (currentValue,NextValue)=>{
//         console.log(currentValue,NextValue);
//         return NextValue+currentValue;
//     }
// );
// var Arr = [1,2,3,4,5,6,7,8,9,10];
// console.log(Arr);
// var ans = Arr.reduce(
//     (previousValue,currentValue)=>{
//         console.log(previousValue,currentValue);
//         return currentValue+previousValue;
//     },45
// );
// console.log(ans);


const products = [
    {
        id: 1,
        name: 'Laptop',
        price: 999.99,
        category: 'Electronics'
    },
    {
        id: 2,
        name: 'Smartphone',
        price: 699.99,
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
        name: 'Bluetooth Headphones',
        price: 149.99,
        category: 'Electronics'
    }
];
console.log(...products);
var ans = products.reduce(
    (currentobj,nextobj)=>{
        console.log(currentobj.price,nextobj.price);
        nextobj.price = nextobj.price + currentobj.price;
        return nextobj;
    }
)
console.log(...products);