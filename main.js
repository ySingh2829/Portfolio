let nameYash = document.getElementById('name-yash');

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