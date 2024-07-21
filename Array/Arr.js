
// *1. **Basic Operations:*
   // - Create an array `numbers` with values `[1, 2, 3]`. Perform `push` to add `4` to the end of the array.
   // - Use `pop` to remove the last element from the `numbers` array. Print the array after each operation.
// var arr = [1,2,3];
// arr.push(4);
// console.log("push",arr);
// arr.pop();
// console.log("pop",arr);

// 2. **Queue Simulation:**
//    - Create an empty array `queue`. Use `push` and `shift` to simulate a queue where you add elements `1`, `2`, and `3` in sequence, and then remove them one by one.
// var arr = [];
// console.log(arr);
// arr.push(1,2,3);
// console.log("push",arr);
// arr.shift();
// console.log(arr);
// arr.shift();
// console.log(arr);
// arr.shift();
// console.log(arr);


// 3. **Stack Simulation:**
//    - Create an empty array `stack`. Use `push` and `pop` to simulate a stack where you push elements `1`, `2`, and `3` onto the stack, and then pop them off one by one.
// var stack = [];
// stack.push(1,"pratham",true);
// console.log(stack);
// stack.pop();
// console.log(stack);
// stack.pop();
// console.log(stack);


// 4. **Insertion and Deletion at the Beginning:**
//    - Create an array `letters` with values `['b', 'c']`. Use `unshift` to add `'a'` to the beginning of the array.
//    - Use `shift` to remove the first element from the `letters` array.
// var arr = ['b','c'];
// arr.unshift('a');
// console.log(arr);
// arr.shift();
// console.log(arr);


// 5. **Array Reversal:**
//    - Create an array `original` with values `[1, 2, 3, 4, 5]`. Use `pop` and `unshift` to reverse the elements in place (without creating a new array).
var arr = [1,2,3,4];
for(var i = 0;i<arr.length;i++){
   arr.unshift(arr.pop());                                                       
}
console.log(arr);
