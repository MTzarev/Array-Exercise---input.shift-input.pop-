function sumFirstAndLast (input){
let a = input.shift();
let b = input.pop();
let sum = a+b;


    console.log(sum);
}
sumFirstAndLast([20, 0, 40]);
sumFirstAndLast([10, 17, 22, 33]);
sumFirstAndLast([11, 58, 69]);