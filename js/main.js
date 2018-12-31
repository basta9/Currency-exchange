'use sreict';

function init() {
    var strHtmls = getCurrency();
    strHtmls.then(renderCurrencies);
}

function renderCurrencies(coins) {
    document.querySelector('.from-coin').innerHTML = coins.join('');
    document.querySelector('.to-coin').innerHTML = coins.join('');
}

function convert() {
    let from = document.querySelector('.from-coin').value;
    let to = document.querySelector('.to-coin').value;
    let amount = document.querySelector('.amount').value;
    let exc = from + '_' + to;
    let prmEx = getExchange(exc, amount);
    prmEx.then(renderRate);
}

function renderRate(rate) {
    let coin = document.querySelector('.to-coin').value;
    let symbol = document.getElementById(coin).getAttribute('data');
    (symbol === 'undefined') ? symbol = '' : symbol;
    console.log(rate);
    document.querySelector('.result').innerHTML = rate + symbol;
}
