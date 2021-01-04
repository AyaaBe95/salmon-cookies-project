'use strict'

function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min); 
}

var seattle = {
    name:"Seattle",
    minHour: 20,
    maxHour: 70,
    avg: 6.3,
    result:[],
    
}
var tokyo = {
    name:"Tokyo",
    minHour: 3,
    maxHour: 24,
    avg: 1.2,
    result:[],
}
var dubai = {
    name: "Dubi",
    minHour: 11,
    maxHour: 38,
    avg: 3.8,
    result:[],
}
var paris = {
    name:"Paris",
    minHour: 20,
    maxHour: 38,
    avg: 2.3,
    result:[],
}
var lima = {
    name:"Lima",
    minHour: 2,
    maxHour: 16,
    avg: 4.6,
    result:[],
}
 var locations = [seattle,tokyo,dubai,paris,lima];