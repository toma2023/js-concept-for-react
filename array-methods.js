const products = [
{name: 'laptop', price: 32000, brand: 'lenovo', color: 'silver'},
{name: 'phone', price: 32, brand: 'iphone', color: 'green '},
{name: 'watch', price: 3204, brand: 'casio', color: 'red'},
{name: 'sunglass', price: 300, brand: 'ray', color: 'blue'},
{name: 'camera', price: 3000, brand: 'canon', color: 'yellow'},
{name: 'headphone', price: 2000, brand: 'lenovo', color: 'black'}
];
const brands = products.map( product => product.brand)
//console.log(brands);
const price = products.map( product => product.price)
//console.log(price);
products.forEach(product => console.log(product.color))
const cheap = products.filter(product => product.price <= 300);
//console.log(cheap);
const specificName = products.filter(product => product.name.includes('n'));
//console.log(specificName);
const special = products.find(product => product.brand.includes('lenovo'));
console.log(special);