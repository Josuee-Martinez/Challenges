let numbers = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20];
let evenNumbers = [];
let oddNumbers = [];

let calculate = (numbers) => {
  for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] % 2 === 0) {
      evenNumbers.push(numbers[i]);
    } else {
      oddNumbers.push(numbers[i]);     
    }
  }
};

calculate(numbers);

console.log(evenNumbers);
console.log(oddNumbers);