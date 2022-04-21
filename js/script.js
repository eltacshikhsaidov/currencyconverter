let convertFrom = document.querySelector("body > div > div.converter > div.convertFrom > div.result > div.resultNumber > input[type=text]");
let convertTo = document.querySelector("body > div > div.converter > div.convertTo > div.result > div.resultNumber > input[type=text]");

let convertFromCurrency = 'USD';
let convertToCurrency = 'RUB';

let convertFromRUB = document.querySelector("body > div > div.converter > div.convertFrom > div.exchanges > div.rub.exc");
let convertFromUSD = document.querySelector("body > div > div.converter > div.convertFrom > div.exchanges > div.usd.exc");
let convertFromEUR = document.querySelector("body > div > div.converter > div.convertFrom > div.exchanges > div.eur.exc");
let convertFromGBP = document.querySelector("body > div > div.converter > div.convertFrom > div.exchanges > div.gbp.exc");


let convertToRUB = document.querySelector("body > div > div.converter > div.convertTo > div.exchanges > div.rub.exc");
let convertToUSD = document.querySelector("body > div > div.converter > div.convertTo > div.exchanges > div.usd.exc");
let convertToEUR = document.querySelector("body > div > div.converter > div.convertTo > div.exchanges > div.eur.exc");
let convertToGBP = document.querySelector("body > div > div.converter > div.convertTo > div.exchanges > div.gbp.exc");

let url = `https://api.exchangerate.host/latest?base=${convertFromCurrency}&symbols=${convertToCurrency}`;



convertFromRUB.addEventListener('click', () => {
    convertFromRUB.style.backgroundColor = '#833AE0';
    convertFromRUB.style.color = 'white';

    convertFromCurrency = convertFromRUB.innerText;
    console.log(convertFromCurrency);

    url = `https://api.exchangerate.host/latest?base=${convertFromCurrency}&symbols=${convertToCurrency}`;

})

convertFromUSD.addEventListener('click', () => {
    convertFromUSD.style.backgroundColor = '#833AE0';
    convertFromUSD.style.color = 'white';

    convertFromCurrency = convertFromUSD.innerText;
    console.log(convertFromCurrency);

    url = `https://api.exchangerate.host/latest?base=${convertFromCurrency}&symbols=${convertToCurrency}`;

})

convertFromEUR.addEventListener('click', () => {
    convertFromEUR.style.backgroundColor = '#833AE0';
    convertFromEUR.style.color = 'white';

    convertFromCurrency = convertFromEUR.innerText;
    console.log(convertFromCurrency);

    url = `https://api.exchangerate.host/latest?base=${convertFromCurrency}&symbols=${convertToCurrency}`;

})

convertFromGBP.addEventListener('click', () => {
    convertFromGBP.style.backgroundColor = '#833AE0';
    convertFromGBP.style.color = 'white';

    convertFromCurrency = convertFromGBP.innerText;
    console.log(convertFromCurrency);

    url = `https://api.exchangerate.host/latest?base=${convertFromCurrency}&symbols=${convertToCurrency}`;

})

// convert to

convertToRUB.addEventListener('click', () => {
    convertToRUB.style.backgroundColor = '#833AE0';
    convertToRUB.style.color = 'white';

    convertToCurrency = convertToRUB.innerText;
    console.log(convertToCurrency);

    url = `https://api.exchangerate.host/latest?base=${convertFromCurrency}&symbols=${convertToCurrency}`;

})

convertToUSD.addEventListener('click', () => {
    convertToUSD.style.backgroundColor = '#833AE0';
    convertToUSD.style.color = 'white';

    convertToCurrency = convertToUSD.innerText;
    console.log(convertToCurrency);

    url = `https://api.exchangerate.host/latest?base=${convertFromCurrency}&symbols=${convertToCurrency}`;

})

convertToEUR.addEventListener('click', () => {
    convertToEUR.style.backgroundColor = '#833AE0';
    convertToEUR.style.color = 'white';

    convertToCurrency = convertToEUR.innerText;
    console.log(convertToCurrency);

    url = `https://api.exchangerate.host/latest?base=${convertFromCurrency}&symbols=${convertToCurrency}`;

})

convertToGBP.addEventListener('click', () => {
    convertToGBP.style.backgroundColor = '#833AE0';
    convertToGBP.style.color = 'white';

    convertToCurrency = convertToGBP.innerText;
    console.log(convertToCurrency);

    url = `https://api.exchangerate.host/latest?base=${convertFromCurrency}&symbols=${convertToCurrency}`;

})

convertFrom.addEventListener('input', () => {

    if (!isNaN(convertFrom.value)) {
        fetch(url)
            .then(response => response.json())
            .then(data => {
                convertTo.value = data.rates.RUB * convertFrom.value;
            });

    } else {
        alert('Please enter correct amount');
        convertFrom.value = 0;
    }
});

convertTo.addEventListener('input', () => {
    if (!isNaN(convertTo.value)) {

        fetch(url)
        .then(response => response.json())
        .then(data => {
            convertFrom.value =  convertTo.value / data.rates.RUB;
        });

    } else {
        alert('Please enter correct amount');
        convertTo.value = 0;
    }
});
