//falsy
//'', 0, false, null, undefined
//truthy
// 'lalmas', 7, true, {}, []
// check  any truthy
let myVar = 5;
if(myVar){
myVar = myVar*100;
}
else{
    myVar = 0;
}
//
let myMoney = 50;
//you check negative or falsy anything
if(!myMoney){

}
const money = 80;
let food;
if(money > 100){
    food = 'biryani';
}
else{
    food = 'cha biscuit';
}
//ternary
let food1 = money > 100 ? 'biryani' : 'cha biscuit';
let drink = (money > 100 && myVar> 100) ?'coke' :'filter water';
//console.log(drink);
//short num to string
const num1 = 52;
const numStr = num1 + '';
//console.log(numStr);
//string to number
const input = '560';
const inputNumber = + input;
//console.log(inputNumber);
let isActive = true;
const showUser = () =>console.log('display user');
const hideUser = () =>console.log('hide user');
//isActive? showUser() : hideUser();
// Use && if the left side is true then right side will be executed.
isActive && showUser();
// use || if the left side is false then right side will be executed 
isActive || hideUser();
//toggle boolean
isActive =! isActive;














/*https://www.youtube.com/channel/UCVS-64rhhzrFsJ9IUY56zSg
https://fakestoreapi.com/
https://github.com/gias-uddin-swe/localstorage-with-bookmark
https://github.com/gias-uddin-swe/localstorage-with-bookmark
https://www.youtube.com/channel/UCVS-64rhhzrFsJ9IUY56zSg*/