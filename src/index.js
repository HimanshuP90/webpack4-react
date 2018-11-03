import FormContainer from "./js/components/container/FormContainer";

const numbers = [2, 4, 8, 10];
const halsves = numbers.map(x => x/2);

console.log(halsves);

const filters = numbers.filter(x => x>2);
console.log(filters);