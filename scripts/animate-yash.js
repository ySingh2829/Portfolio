//Animte Yash
let y = document.getElementById('Y');
let a = document.getElementById('A');
let s = document.getElementById('S');
let h = document.getElementById('H');

setTimeout(() => {
    y.innerHTML = 'y';
    setTimeout(() => {
        a.innerHTML = 'a';
        setTimeout(() => {
            s.innerHTML = 's';
            setTimeout(() => {
                h.innerHTML = 'h';
            }, 600);
        }, 600);
    }, 600);
}, 800);