const student = {
    name: 'sakib khan',
    age: 32,
    movies: ['king khan', 'dhakar mastan']
};
const studentJSON = JSON.stringify(student);
const studentObj = JSON.parse(studentJSON);
//console.log(student);
//console.log(studentJSON);
//console.log(studentObj);
// 2.fetch
/*fetch('url')
    .then(res => res.json())
    .then(data => console.log(data));*/
// 3. keys, values
const keys = Object.keys(student);
const values = Object.values(student);
//console.log(values);
const numbers = [23, 56, 789, 890];
numbers.forEach(num =>console.log(num));
numbers.map(num => num*2);
//for of on array like objects
// loop on a object using for in 
//add or remove from an array
const products = [
    {name: 'laptop', price: 32000, brand: 'lenovo', color: 'silver'},
    {name: 'phone', price: 32, brand: 'iphone', color: 'green '},
    {name: 'watch', price: 3204, brand: 'casio', color: 'red'},
    {name: 'sunglass', price: 300, brand: 'ray', color: 'blue'},
    {name: 'camera', price: 3000, brand: 'canon', color: 'yellow'},
    {name: 'headphone', price: 2000, brand: 'len', color: 'black'}
    ];
const newProduct = {name: 'webcam', price: 700, brand: 'lal'};
//copy products Array and then add new product
const newProducts = [...products, newProduct];
//console.log(newProducts)
//create a new array without one specific item
//remove phone means create new array without phone 
const remaining =products.filter(product=>product.brand !== 'len');
console.log(remaining);



