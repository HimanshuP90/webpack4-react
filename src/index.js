import FormContainer from "./js/components/container/FormContainer";

//Array.prototype.map()
const numbers = [2, 4, 8, 10];
const halsves = numbers.map(x => x/2);

console.log(halsves);

//Array.prototype.filter()
const filters = numbers.filter(x => x>2);
console.log(filters);

//Array.prototype.reduce()
// The reduce() method executes a reducer function on each member
// of the array resulting in a single array


const array1 = [9, 8, 7, 6];
console.log([9, 8, 7, 6])
const reducer = (accumulator, currentValue) => { 
    console.log('accumulator: ', accumulator)
    console.log('currentValue: ', currentValue);
    console.log('accumulator + currentValue = ', accumulator + currentValue)
    return accumulator + currentValue
};
console.log(array1.reduce(reducer));
