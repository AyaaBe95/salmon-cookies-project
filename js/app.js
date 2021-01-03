'use strict';
var hour = ['6 AM', '7 AM', '8 AM', '9 AM', '10 AM', '11 AM', '12 PM', '1 PM', '2 PM', '3 PM', '4 PM', '5 PM', '6 PM', '7 PM'];


function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min);
}

function CookiesEachHour(min, max, avg) {
    var customerNumArray = [];
    for (let index = 0; index < hour.length; index++) {
        customerNumArray.push(Math.floor(getRandomInt(min, max) * avg));

    }
    return customerNumArray;
}


function objects(minCus, maxCus, avgCookies, cityName) {
    var shop = {
        name: cityName,
        min: minCus,
        max: maxCus,
        avgSale: avgCookies,
        sales: CookiesEachHour(minCus, maxCus, avgCookies)
    };
    return shop;
}

// city shops
var seattle = objects(22, 65, 6.3, 'Seattle');
var tokyo = objects(3, 24, 1.2, 'Tokyo');
var dubai = objects(11, 38, 3.7, 'Dubai');
var paris = objects(20, 38, 2.3, 'Paris');
var lima = objects(2, 16, 4.6, 'Lima');

var cities = [seattle, tokyo, dubai, paris, lima];


var parent = document.getElementById('salesList');
var list = document.createElement('ul');
parent.appendChild(list);


function Items(shop) {
    for (let i = 0; i < shop.sales.length; i++) {
        var listItem = document.createElement('li');
        listItem.textContent = hour[i] + ': ' + shop.sales[i] + ' Cookies';
        list.appendChild(listItem);
    }
}



for (let i = 0; i < cities.length; i++) {
    var h3 = document.createElement('h3')
    h3.textContent = cities[i].name
    list.appendChild(h3)
    Items(cities[i]);
}