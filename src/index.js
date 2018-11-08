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
// console.log(flattened)


//Grouping objects by a property

var people = [
    { name: 'Alice', age: 21 },
    { name: 'Max', age: 20 },
    { name: 'Jane', age: 20 },
    { name: 'Bravo', age: 20 },
];

function groupBy(objectArray, property){
    return objectArray.reduce(function(acc, obj){
        var key = obj[property];
        if (!acc[key]) {
          acc[key] = [];
        }
        acc[key].push(obj);
        return acc;
    }, {});
}

var groupedPeople = groupBy(people, 'age');
// console.log(groupedPeople);


//Remove duplicate items in array

let arr = [1, 2, 1, 2, 3, 5, 4, 5, 3, 4, 4, 4, 4];
let result =  arr.sort().reduce((accumulator, currentValue) => {
    const length = accumulator.length
    if(length == 0 || accumulator[length-1] != currentValue){
        accumulator.push(currentValue)
    }
    return accumulator
}, []);

console.log(result);


/* 
    3 Steps before it it executed, roughly called "compilation" :

    1) Tokenizing/Lexing:
         var a = 2;
         This would likely be broken up into the following tokens:
         var, a, =, 2 and ;.

    2) Parsing:
         The tree of var a = 2; might start with a top-level node called VariableDeclaration,
         with a child node called Identifier(whose value is a), and another child is called 
         AssignmentExpresion which itself has a child called NumericLiteral (whose value is 2 ) 

    3) Code-Generation: 
*/
































