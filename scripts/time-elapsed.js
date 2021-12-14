let makeTimeReadable = function (time) {
    const timeString = time.toString();

    const timeArray = timeString.split('');

    let newTimeArray = [];

    for (let i = timeArray.length-1; i >= 0; i-=3) {
        let counter = 0;
        for (let j = i; j > i - 3 && j >= 0; j--) {
            newTimeArray.push(timeArray[j]);
            counter++;
        }

        if (counter === 3 && i !== 2) {
            newTimeArray.push(',');
        }
    }
    const resultTimeArray = newTimeArray.reverse();
    const resultTimeString = resultTimeArray.join('');
    return resultTimeString;
};

function updateTime () {
    let birthday = new Date('July 30, 1993 13:20:00');
    
    let end = new Date();
    
    let timeShow = document.getElementById('time-show');
    
    // Time passed since my birthday
    
    let timeElapsed = Math.round((end.getTime() - birthday.getTime()) / 1000);

    timeShow.innerHTML = makeTimeReadable(timeElapsed);
    
};

setInterval(updateTime, 1000);