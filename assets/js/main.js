"use strict";
const city = 'Tokyo';
const key = '3ba750e375ce856d1fecdb1aa520f18e';
const url = `http://api.openweathermap.org/geo/1.0/direct?q=${city}&limit=5&appid=${key}`;

const myRequest = new XMLHttpRequest();
myRequest.open('GET', url);
myRequest.responseType = 'json';
myRequest.send();


