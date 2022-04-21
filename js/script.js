let convertFrom = document.querySelector("body > div > div.converter > div.convertFrom > div.result > div.resultNumber > input[type=text]");
let convertTo = document.querySelector("body > div > div.converter > div.convertTo > div.result > div.resultNumber > input[type=text]");

let convertFromInfoText = document.querySelector("body > div > div.converter > div.convertFrom > div.result > div.resultInfo > span");
let convertToInfoText = document.querySelector("body > div > div.converter > div.convertTo > div.result > div.resultInfo > span");

let convertFromCurrency = 'RUB';
let convertToCurrency = 'RUB';

let convertFromRUB = document.querySelector("body > div > div.converter > div.convertFrom > div.exchanges > div.rub.exc");
let convertFromUSD = document.querySelector("body > div > div.converter > div.convertFrom > div.exchanges > div.usd.exc");
let convertFromEUR = document.querySelector("body > div > div.converter > div.convertFrom > div.exchanges > div.eur.exc");
let convertFromGBP = document.querySelector("body > div > div.converter > div.convertFrom > div.exchanges > div.gbp.exc");


let convertToRUB = document.querySelector("body > div > div.converter > div.convertTo > div.exchanges > div.rub.exc");
let convertToUSD = document.querySelector("body > div > div.converter > div.convertTo > div.exchanges > div.usd.exc");
let convertToEUR = document.querySelector("body > div > div.converter > div.convertTo > div.exchanges > div.eur.exc");
let convertToGBP = document.querySelector("body > div > div.converter > div.convertTo > div.exchanges > div.gbp.exc");

let allConvertFroms = [convertFromRUB, convertFromUSD, convertFromEUR, convertFromGBP];
let allConvertTos = [convertToRUB, convertToUSD, convertToEUR, convertToGBP];

let url = `https://api.exchangerate.host/latest?base=${convertFromCurrency}&symbols=${convertToCurrency}`;

convertFromRUB.style.backgroundColor = '#833AE0';
convertFromRUB.style.color = 'white';
convertToRUB.style.backgroundColor = '#833AE0';
convertToRUB.style.color = 'white';

function convert(convertFrom, convertTo) {
    convertFrom.addEventListener('input', () => {

        if (!isNaN(convertFrom.value)) {
            fetch(url)
                .then(response => response.json())
                .then(data => {
                    convertTo.value = data.rates[convertFromCurrency] * convertFrom.value;
                });
    
        } else {
            alert('Please enter correct amount');
            convertFrom.value = 0;
        }

    });
}

convert(convertFrom, convertTo);
// convert(convertTo, convertFrom);


allConvertFroms.forEach((element) => {
    element.addEventListener('click', () => {

        element.style.backgroundColor = '#833AE0';
        element.style.color = 'white';

        for(a in allConvertFroms) {
            if (allConvertFroms[a] !== element) {
                allConvertFroms[a].style.backgroundColor = 'white';
                allConvertFroms[a].style.color = 'rgb(163, 163, 163)';
            }
        }

        convertFromCurrency = element.innerText;
        console.log(convertFromCurrency + ' --> ' + convertToCurrency);
        
        url = `https://api.exchangerate.host/latest?base=${convertFromCurrency}&symbols=${convertToCurrency}`;
        console.log(url);


        fetch(url)
            .then(response => response.json())
            .then(data => {

                console.warn(data.rates);

                convertTo.value =  data.rates[convertToCurrency] * convertFrom.value;
                console.log(data.rates[convertToCurrency]);

                convertFromInfoText.innerText = `1 ${convertFromCurrency} = ${data.rates[convertToCurrency]} ${convertToCurrency}`;
                convertToInfoText.innerText = `1 ${convertToCurrency} = ${data.rates[convertFromCurrency]} ${convertFromCurrency}`;

            }).catch(err => {
                console.log(err);
            });

        convert(convertFrom, convertTo);
    });
});

allConvertTos.forEach((element) => {
    element.addEventListener('click', () => {
        element.style.backgroundColor = '#833AE0';
        element.style.color = 'white';

        for(a in allConvertTos) {
            if (allConvertTos[a] !== element) {
                allConvertTos[a].style.backgroundColor = 'white';
                allConvertTos[a].style.color = 'rgb(163, 163, 163)';
            }
        }

        convertToCurrency = element.innerText;
        console.log(convertFromCurrency + ' --> ' + convertToCurrency);

        
        url = `https://api.exchangerate.host/latest?base=${convertFromCurrency}&symbols=${convertToCurrency}`;
        console.log(url);

        fetch(url)
            .then(response => response.json())
            .then(data => {

                console.warn(data.rates);

                convertToInfoText.innerText = `1 ${convertFromCurrency} = ${data.rates[convertToCurrency]} ${convertToCurrency}`;
                convertFromInfoText.innerText = `1 ${convertFromCurrency} = ${data.rates[convertToCurrency]} ${convertToCurrency}`;

                convertTo.value =  convertFrom.value * data.rates[convertToCurrency];
            }).catch(err => {
                console.log(err);
            });

    })
});