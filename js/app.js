'use strict'

var hours = ['6:00 am', '7:00 am', '8:00 am', '9:00 am', '10:00 am', '11:00 am', '12:00 am', '1:00 pm', '2:00 pm', '3:00 pm', '4:00 pm', '5:00 pm', '6:00 pm', '7:00 pm'];


function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);

    return Math.floor(Math.random() * (max - min + 1) + min);
}

function calcCustAvg() {

    for (let index = 0; index < hours.length; index++) {

        var avg = Math.floor(getRandomInt(this.minHourlyCust, this.maxHourlyCust) * this.avgCookieCust);
        var total = total + avg
        this.result.push(avg)

    }
}

    // construction

    function Shop(name, minHourlyCust, maxHourlyCust, avgCookieCust) {
        this.name = name;
        this.minHourlyCust = minHourlyCust;
        this.maxHourlyCust = maxHourlyCust;
        this.avgCookieCust = avgCookieCust;
        result = [];
        total = 0;

    }

    // call
    var seattle = new shop("seattle", 23, 65, 6.3);
    var dubai = new shop("dubai", 11, 38, 3.7);
    var tokyo = new shop("tokyo", 3, 24, 1.2);
    var paris = new shop("paris", 20, 38, 2.3);
    var lima = new shop("lima", 2, 16, 4.6);

    // DOM header

    var parent = document.getElementById('salesList');
    var table = document.createElement('table');
    parent.appendChild(table);

    var tableRow = document.createElement('tr');
    table.appendChild(tableRow);

    for (let index = 0; index < hours.length; index++) {
        var tablehead = document.createElement('th');
        tablehead.textContent = hours[index];
        tableRow.appendChild(tablehead);
    }

 // DOM body                                                                                                                                                                               
var cities = [seattle, tokyo, dubai, paris, lima];

Shop.prototype.render = function () {
    var tableRow = document.createElement('tr');
    table.appendChild(tableRow);
    var tableData = document.createElement('td');
    tableData.textContent = this.name;
    tableRow.appendChild(tableData);

   
   
}

    