"use strict";
const temperature = document.getElementById(`temperature`);
const temperatureLabel = document.getElementById(`temperature_label`);
const btnChange = document.querySelector(`#btnChange`);
const box = document.querySelector('#box');
const cityLabel = document.querySelector('#city_label');
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
                cityLabel.innerText = `${myData.name}`;
                temperatureLabel.textContent = `${myData.main.temp}`;
            }
            else
                cityLabel.textContent = `Erreur, ville inconnue`;
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


btnChange.addEventListener('click', () =>
{      
    if(!document.getElementById('inputCity')) 
    {   
        box.prepend(inputCity);   
    }

    if(checkInput(inputCity))
    {      
        getTemperature(inputCity.value);
        inputCity.value = ``;
        inputCity.style.display = 'none';
        btnChange.innerText = `Changer de ville`;
    }
    else
    {
        inputCity.style.display = 'block';
        btnChange.innerText = `Valider`;
    }
    
    box.prepend(inputCity);
})


