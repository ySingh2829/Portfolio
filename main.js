let nameYash = document.getElementById('name-yash');
let cityBikeDown = document.getElementById('city-bike-down');
let arrow = document.getElementById('arrow');
let cityDisplay = document.getElementById('city-container');
let cityTechUsed = document.getElementById('city-tech');


nameYash.onclick = function (e) {
    if (e.target.style.color === '') {
        e.target.style.color = 'brown';
    } else {
        e.target.style.color = '';
    }
};

nameYash.onmouseenter = function (e) {
    e.target.style.cursor = 'pointer';
};

nameYash.onmouseout = function (e) {
    e.target.style.textDecoration = '';
};

cityBikeDown.onmouseenter = function (e) {
    e.target.style.cursor = 'pointer';
};

cityBikeDown.onclick = function () {
    if (arrow.style.transform === '') {
        arrow.style.transform = 'rotate(0deg)';
        cityDisplay.style.display = 'flex';
        cityTechUsed.style.display = 'flex';

    } else {
        arrow.style.transform = '';
        cityDisplay.style.display = '';
        cityTechUsed.style.display = '';
    }
};