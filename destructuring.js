//array destructuring 
const numbers = [42, 65];
//const x = numbers[0];
//const y = numbers[1];
const [x, y] = numbers;
//console.log(x, y);
function boxify(num1, num2) {
    const nums = [num1, num2];
    return nums;
}
//console.log(boxify(34, 56));
const student = {
    name: 'salib khan',
    age: 32,
    movies: ['king khan ', 'dhakar mastan']
}
const [firstMovie, secondMovie] = student.movies;

//object destructuring
const { name, age } = { name: 'alu', age: 14 };
//const {id,name, age} = { id: 12 ,name: 'alu', age: 14}
const employee = {
    ide: 'VS Code',
    designation: 'developer',
    machine: 'mac',
    languages: ['html', 'css', 'javaScript'],
    specification: {
        height: 66,
        weight: 65,
        address: 'kumerkhali',
        drink: 'water',
        watch:{
            color: 'black',
            price: 500, 
            brand: 'garmin',
        }
    }
}
const {machine, ide} = employee;
const {weight, address} = employee.specification;
const {brand} = employee?.specification?.watch;
