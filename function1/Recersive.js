// var arr = [];
var head = [1,2,3,4,5,6];
var start = 0;
var end = head.length -1;
// console.log(end);
var reverseList = function(start,end) {
    if(start >= end){
        return;
    }
    if(start == end){
        return;
    }
    
    var temp = head[start];
    head[start] = head[end];
    head[end] = temp;

    start++;
    end--;
    return reverseList(start,end);
};
reverseList(start,end);

console.log(head);

// // 1. Create a function `multiply` that takes two parameters `x` and `y` and a callback function `callback`. Inside `multiply`, call the callback function with the result of `x * y`.
// function multiply(callback){

// }
// function