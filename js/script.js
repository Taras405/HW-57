const logItems = function (...array) {
    for (let i = 0; i < array.length; i++) {
        console.log(`${i + 1} - ${array[i]}`);
    };
};

logItems('Mango', 'Poly', 'Ajax');



// const calculateEngravingPrice = function (message, pricePerWord = 10) {
//     const word = message.split(' ');
//     const totalPrice = message.length * pricePerWord;
//     console.log(totalPrice);
//     return totalPrice;
// };

// calculateEngravingPrice(prompt('Введіть текст для гравіювання', ''));



const findLongestWord = function (string) {
    const words = string.split(' ');
    return words.reduce(function (longest, current) {
        return current.length > longest.length ? current : longest;
    }, "");
};

console.log(findLongestWord('Lorem ipsum, dolor sit amet consectetur adipisicing elit.'));



const formatString = function (string) {
    const maxLength = 40;
    return (string.length > maxLength) ?
        string.slice(0, maxLength).trim() + '...' : string;
};

console.log(formatString('Lorem ipsum, dolor sit amet consectetur adipisicing elit.'));



const checkForSpam = function (message) {
    message = message.toLowerCase();
    return message.includes('spam') || message.includes('sale');
};

console.log(checkForSpam('Lorem ipsum, dolor sit amet consectetur adipisicing elit.'));



let input;
const numbers = [];
let total = 0;

// const saveNumbers = function (numbers) {

// };

console.log(input(prompt('Введіть число', '')));
numbers = input;
console.log(numbers);

