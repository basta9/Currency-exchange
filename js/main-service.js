'use strict';

function getCurrency() {
    var prm = axios.get('https://free.currencyconverterapi.com/api/v6/currencies')

    return prm.then(res => {
        var currenciesHtmls = [];
        for (let key in res.data.results) {
            currenciesHtmls.push(`<option id="${key}" 
            data="${res.data.results[key].currencySymbol}" value="${key}">${key}
                                </option>`);
        }
        return currenciesHtmls;
    });
}

function getExchange(exc, amount) {
    var prm = axios.get(`http://free.currencyconverterapi.com/api/v5/convert?q=${exc}&compact=y`);
    return prm.then(res => {
        // debugger
        amount = +amount;
        if (isNaN(amount)) {
            throw new Error('Enter a number!');
        }
        return res.data[exc].val * amount;
    });
}