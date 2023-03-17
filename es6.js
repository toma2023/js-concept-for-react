// 1.template string
const numbers = [89, 35, 88, 12];
const student = {
    name: 'sakib khan',
    age:32,
    movies: ['king khan', 'dhakar mastan']
};
const about =`my name is ${student.name} age of ${student.age} has number ${numbers[2]} also liked movies ${student['movies'][0]}`;
//console.log(about);
// 2. arrow function
const getFiftyFive = () => 55;
const addSixtyFive = num => num +65;
const isEven = x => x % 2 == 0;
const addThree = (x, y, z) => x + y + z;
const doMath = (num1, num2) =>{
    const sum = num1 + num2;
    return sum;
}
//spread operator
const newNumbers = [...numbers];
numbers.push(99);
//console.log(newNumbers)
//create a new array from an older array and add element
const currentNumbers = [...numbers, 90, 144];
//console.log(currentNumbers);