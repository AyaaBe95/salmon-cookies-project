'use strict'

function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min);
}

var hours = ['6am', '7am', '8am', '9am', '10am', '11am', '12am', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'];
var seattle = {
    name: "Seattle",
    minHourlyCust: 20,
    maxHourlyCust: 70,
    avgCookieCust: 6.3,
    result: [],
    total: 0,
    calcCustAvg: function () {

        for (let index = 0; index < hours.length; index++) {
            var avg = Math.floor(getRandomInt(this.minHourlyCust, this.maxHourlyCust) * this.avgCookieCust);
            this.total = this.total + avg;
            this.result.push(avg);

        }
    },
    render: function () {
    
        var parrent = document.getElementById('salesList');
        var h3 = document.createElement('h3')
        h3.textContent = this.name;
        parrent.appendChild(h3)

        var ulElm = document.createElement('ul');
        parrent.appendChild(ulElm);

        

        for (let i = 0; i < hours.length; i++) {
            var li = document.createElement('li')

            li.textContent = hours[i] + ' : ' + this.result[i];
            ulElm.appendChild(li)
        }
        var totalEl = document.createElement('li');
        totalEl.textContent = 'Total is ' + this.total + ' cookies';
        ulElm.appendChild(totalEl);
    }
}

seattle.calcCustAvg();
seattle.render();

// tokyo

var tokyo = {
    name: "Tokyo",
    minHourlyCust: 3,
    maxHourlyCust: 24,
    avgCookieCust: 1.2,
    result: [],
    total: 0,
    calcCustAvg: function () {

        for (let index = 0; index < hours.length; index++) {
            var avg = Math.floor(getRandomInt(this.minHourlyCust, this.maxHourlyCust) * this.avgCookieCust);
            this.total = this.total + avg;
            this.result.push(avg);

        }
    },
    render: function () {
        var parrent = document.getElementById('salesList');
        var h3 = document.createElement('h3')
        h3.textContent = this.name;
        parrent.appendChild(h3)

        var ulElm = document.createElement('ul');
        parrent.appendChild(ulElm);

        

        for (let i = 0; i < hours.length; i++) {
            var li = document.createElement('li')

            li.textContent = hours[i] + ' : ' + this.result[i];
            ulElm.appendChild(li)
        }
        var totalEl = document.createElement('li');
        totalEl.textContent = 'Total is ' + this.total + ' cookies';
        ulElm.appendChild(totalEl);
    }
}

tokyo.calcCustAvg();
tokyo.render();

var dubai = {
    name: "Dubai",
    minHourlyCust: 11,
    maxHourlyCust: 38,
    avgCookieCust: 3.8,
    result: [],
    total: 0,
    calcCustAvg: function () {

        for (let index = 0; index < hours.length; index++) {
            var avg = Math.floor(getRandomInt(this.minHourlyCust, this.maxHourlyCust) * this.avgCookieCust);
            this.total = this.total + avg;
            this.result.push(avg);

        }
    },
    render: function () {
        var parrent = document.getElementById('salesList');
        var h3 = document.createElement('h3')
        h3.textContent = this.name;
        parrent.appendChild(h3)

        var ulElm = document.createElement('ul');
        parrent.appendChild(ulElm);

       

        for (let i = 0; i < hours.length; i++) {
            var li = document.createElement('li')

            li.textContent = hours[i] + ' : ' + this.result[i];
            ulElm.appendChild(li)
        }
        var totalEl = document.createElement('li');
        totalEl.textContent = 'Total is ' + this.total + ' cookies';
        ulElm.appendChild(totalEl);
    }
}
dubai.calcCustAvg();
dubai.render();

var paris = {
    name: "Paris",
    minHourlyCust: 20,
    maxHourlyCust: 38,
    avgCookieCust: 2.3,
    result: [],
    total: 0,
    calcCustAvg: function () {

        for (let index = 0; index < hours.length; index++) {
            var avg = Math.floor(getRandomInt(this.minHourlyCust, this.maxHourlyCust) * this.avgCookieCust);
            this.total = this.total + avg;
            this.result.push(avg);

        }
    },
    render: function () {
        var parrent = document.getElementById('salesList');
        var h3 = document.createElement('h3')
        h3.textContent = this.name;
        parrent.appendChild(h3)

        var ulElm = document.createElement('ul');
        parrent.appendChild(ulElm);

       

        for (let i = 0; i < hours.length; i++) {
            var li = document.createElement('li')

            li.textContent = hours[i] + ' : ' + this.result[i];
            ulElm.appendChild(li)
        }
        var totalEl = document.createElement('li');
        totalEl.textContent = 'Total is ' + this.total + ' cookies';
        ulElm.appendChild(totalEl);
    }
}

paris.calcCustAvg();
paris.render();

var lima = {
    name: "Lima",
    minHourlyCust: 2,
    maxHourlyCust: 16,
    avgCookieCust: 4.6,
    result: [],
    total: 0,
    calcCustAvg: function () {

        for (let index = 0; index < hours.length; index++) {
            var avg = Math.floor(getRandomInt(this.minHourlyCust, this.maxHourlyCust) * this.avgCookieCust);
            this.total = this.total + avg;
            this.result.push(avg);

        }
    },
    render: function () {
        var parrent = document.getElementById('salesList');
        var h3 = document.createElement('h3')
        h3.textContent = this.name;
        parrent.appendChild(h3)
        
        var ulElm = document.createElement('ul');
        parrent.appendChild(ulElm);

        

        for (let i = 0; i < hours.length; i++) {
            var li = document.createElement('li')

            li.textContent = hours[i] + ' : ' + this.result[i];
            ulElm.appendChild(li)
        }
        var totalEl = document.createElement('li');
        totalEl.textContent = 'Total is ' + this.total + ' cookies';
        ulElm.appendChild(totalEl);
    }
}

lima.calcCustAvg();
lima.render();


//  var locations = [seattle,tokyo,dubai,paris,lima];


