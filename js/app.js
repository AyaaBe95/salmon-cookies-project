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

 for(var i=0;i<locations.length;i++){
     cookiesperHour(locations[i]);
 }
 


 function cookiesperHour(obj){
     var totalCookies=0;
     var purshasedCookie=[]
     var time='am'
    for (var i=6;i<=19;i++){
        var timing = i <=12? i:i-12;
        if(timing>=12)time='pm';
        var computedCookies=computedCookies1(getRandomInt(5,70),obj.avgCookieCust);
        totalCookies+=computedCookies;
        purshasedCookie[i-6]=timing+time+": "+computedCookies+" cookies";
    }
    purshasedCookie[purshasedCookie.length]="total is "+totalCookies;
    obj.result=purshasedCookie;
 }
 
 function computedCookies1(hour1,avg){
    return Math.round(hour1*avg);
 }

 for(var i=0;i<locations.length;i++){
    displayAmoutOfCookies(locations[i]);
}
 function displayAmoutOfCookies(obj){
     var parent=document.getElementById("salesList");

     var ul=document.createElement('ul');
     ul.innerHTML="<h2>"+obj.name+"</h2>";
     for(var i=0;i<obj.result.length;i++){
        var li=document.createElement('li');
        li.textContent=obj.result[i];

        ul.append(li);
     }
     parent.append(ul);
 }