//Declaração de arrays
const num1 = [1,2,3];
const num2 = [4,5,6];

//Concatenação de arrays com concat
const num3 = num1.concat(num2);
console.log(num3);

//Concatenação de arrays com spread ...
const num4 = [...num1,...num2];
console.log(num4);