'use strict'

function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min); 
}

var seattle = {
    name:"Seattle",
    minHourlyCust: 20,
    maxHourlyCust: 70,
    avgCookieCust: 6.3,
    result:[],
    
}
var tokyo = {
    name:"Tokyo",
    minHourlyCust: 3,
    maxHourlyCust: 24,
    avgCookieCust: 1.2,
    result:[],
}
var dubai = {
    name: "Dubi",
    minHourlyCust: 11,
    maxHourlyCust: 38,
    avgCookieCust: 3.8,
    result:[],
}
var paris = {
    name:"Paris",
    minHourlyCust: 20,
    maxHourlyCust: 38,
    avgCookieCust: 2.3,
    result:[],
}
var lima = {
    name:"Lima",
    minHourlyCust: 2,
    maxHourlyCust: 16,
    avgCookieCust: 4.6,
    result:[],
}
 var locations = [seattle,tokyo,dubai,paris,lima];


 