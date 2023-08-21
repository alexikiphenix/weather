"use strict";
const temperature = document.getElementById(`temperature`);
const temperatureLabel = document.getElementById(`temperature_label`);
const btnChange = document.querySelector(`#change`);
let city = 'Tokyo';
const key = '3ba750e375ce856d1fecdb1aa520f18e';

const urlOFF = `http://api.openweathermap.org/geo/1.0/direct?q=${city}&limit=5&appid=${key}`;
const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${key}&units=metric`;


const cityBox = document.createElement('input');

btnChange.addEventListener('click', () =>
{
    temperature.prepend(cityBox);
})
const myRequest = new XMLHttpRequest();
myRequest.open('GET', url);
myRequest.responseType = 'json';
myRequest.send();


myRequest.onload = function()
{
    if(myRequest.readyState === XMLHttpRequest.DONE)
    {
        if(myRequest.status === 200)
        {
            const myData = myRequest.response;
            console.log(myData);
            // temperatureLabel.innerText = `${myData[0].name} - ${myData[0].country}`;
        }
        else
            console.log('Erreur informations non reçues');
    }
}

