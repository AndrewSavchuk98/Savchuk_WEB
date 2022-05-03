let base_url = "http://jsonplaceholder.typicode.com/users";
var request = new XMLHttpRequest();
let userName = document.querySelectorAll('.name');
let email = document.querySelectorAll('.email');
let city = document.querySelectorAll('.city');
let phone = document.querySelectorAll('.phone');
let website = document.querySelectorAll('.website');
let catchPhrase = document.querySelectorAll('.text__company');

request.open('GET', base_url);
request.responseType = 'json';
request.send();

request.onload = function() {
    let requestJson = request.response;
    getName(requestJson);
    getEmail(requestJson);
    getCity(requestJson);
    getPhone(requestJson);
    getWebsite(requestJson);
    getcatchPhrase(requestJson);
}

function getName(jsonObj) {
    userName.forEach((item, index) => {
        item.innerHTML = jsonObj[index].name;
    });
}
function getEmail (jsonObj) {
    email.forEach((item, index) => {
        item.innerHTML = jsonObj[index].email;
    });
}
function getCity (jsonObj) {
    city.forEach((item, index) => {
        item.innerHTML = jsonObj[index]["address"].city;
    });
}
function getPhone (jsonObj) {
    phone.forEach((item, index) => {
        item.innerHTML = jsonObj[index].phone;
    });
}
function getWebsite (jsonObj) {
    website.forEach((item, index) => {
        item.innerHTML = jsonObj[index].website;
    });
}
function getcatchPhrase (jsonObj) {
    catchPhrase.forEach((item, index) => {
        item.innerHTML = jsonObj[index]["company"].catchPhrase;
    });
}
