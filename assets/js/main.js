"use strict";
const temperature = document.getElementById(`temperature`);
const temperatureLabel = document.getElementById(`temperature_label`);
const btnChange = document.querySelector(`#change`);
const box = document.querySelector('#box');
const cityBox = document.querySelector('#city');
let city = 'Tokyo';
const key = '3ba750e375ce856d1fecdb1aa520f18e';

const urlOFF = `http://api.openweathermap.org/geo/1.0/direct?q=${city}&limit=5&appid=${key}`;


const inputCity = document.createElement('input');
inputCity.setAttribute('id', 'inputCity');


const getTemperature = (city) =>
{
    if(typeof city === 'string' || city instanceof String);
    else
        city = 'Paris';
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${key}&units=metric`;
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
                cityBox.innerText = `${myData.name}`;
                temperatureLabel.innerText = `${myData.main.temp}`;
            }
            else
            console.log('Erreur informations non reçues');
        }
    }
}

const checkInput = (inputUser = String) =>
{
    if(typeof inputUser.value === 'string' 
        || inputUser.value instanceof String              
    )
    {
        if(inputUser.value.length >= 2)
            return true;
        else
            return false;
    }
    else
        return false;
}

getTemperature('San francisco');


// inputCity.value = "GROS TEST";
btnChange.addEventListener('click', () =>
{      
    if(checkInput(inputCity))
    {
        console.log(inputCity.value.length);
        getTemperature(inputCity.value);
    }

    if(!document.getElementById('inputCity')) 
    {
        box.prepend(inputCity);   
    }
    box.prepend(inputCity);
})


