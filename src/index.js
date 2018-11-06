import FormContainer from "./js/components/container/FormContainer";

//Array.prototype.map()
const numbers = [2, 4, 8, 10];
const halsves = numbers.map(x => x/2);

// console.log(halsves);

//Array.prototype.filter()
const filters = numbers.filter(x => x>2);
// cons ole.log(filters);

//Array.prototype.reduce()
// The reduce() method executes a reducer function on each member
// of the array resulting in a single array


const array1 = [9];
// console.log([9, 8, 7, 6])
const reducer = (accumulator, currentValue) => { 
    console.log('accumulator: ', accumulator)
    console.log('currentValue: ', currentValue);
    console.log('accumulator + currentValue = ', accumulator + currentValue)
    return accumulator + currentValue
};
// console.log(array1.reduce(reducer));

//Flatten an array of arrays
var flattened = [[0,1], [2,3], [4,5]].reduce(
    function(accumulator, currentValue) {
        return accumulator.concat(currentValue);
    },
    []
);
console.log(flattened)
