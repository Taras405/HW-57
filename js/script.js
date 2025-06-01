const logItems = function (...array) {
    for (let i = 0; i < array.length; i++) {
        console.log(`${i + 1} - ${array[i]}`);
    };
};

logItems('Mango', 'Poly', 'Ajax');



const calculateEngravingPrice = function (message, pricePerWord = 10) {
    const word = message.split(' ');
    const totalPrice = message.length * pricePerWord;
    console.log(totalPrice);
    return totalPrice;
};

calculateEngravingPrice(prompt('Введіть текст для гравіювання', ''));



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

while (true) {
    input = prompt('Введіть число', '');

    if (input === null) {
        break;
    }

    if (isNaN(input)) {
        alert('Було введено не число, введіть число');
        continue;
    }
    numbers.push(Number(input));
}

if (numbers.length > 0) {
    for (const number of numbers) {
        total += number;
    }
    console.log(`Загальна сума чисел ${total}`);
}



const logins = [];

const isLoginValid = function (login) {
    return login.length >= 4 && login.length <= 16;
};

const isLoginUnique = function (allLogins, login) {
    return !allLogins.includes(login);
};

const addLogin = function (allLogins, login) {
    if (!isLoginValid(login)) {
        alert('Введіть логін від 4 до 16 символів');
        return;
    }
    if (!isLoginUnique(allLogins, login)) {
        alert('Цей логін вже використовується');
        return;

    }

    allLogins.push(login);
    alert('Логін доданий');

};

while (true) {
    const input = prompt('Введіть логін:', '');

    if (input === null) {
        break;
    }

    addLogin(logins, input);
}

console.table(logins);
