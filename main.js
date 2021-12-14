let nameYash = document.getElementById('name-yash');
let royalBikeDropDown = document.getElementById('royal-bike-down');
let arrow = document.getElementById('arrow');
let royalDisplay = document.getElementById('royal-container');


nameYash.onclick = function (e) {
    if (e.target.style.color === '') {
        e.target.style.color = 'brown';
    } else {
        e.target.style.color = '';
    }
};

nameYash.onmouseenter = function (e) {
    e.target.style.cursor = 'pointer';
    e.target.style.textDecoration = 'underline';
};

nameYash.onmouseout = function (e) {
    e.target.style.textDecoration = '';
};

royalBikeDropDown.onmouseenter = function (e) {
    e.target.style.cursor = 'pointer';
};

royalBikeDropDown.onclick = function () {
    if (arrow.style.transform === '') {
        arrow.style.transform = 'rotate(0deg)';
        royalDisplay.style.display = 'block';
    } else {
        arrow.style.transform = '';
        royalDisplay.style.display = '';
    }
};