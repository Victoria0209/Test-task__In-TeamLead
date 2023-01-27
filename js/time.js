// обратный отсчет
// https://denis-creative.com/jstimer/

function getTimeRemaining(endtime) {
    const t = Date.parse(endtime) - Date.parse(new Date());
    const seconds = Math.floor((t / 1000) % 60);
    return {
        'total': t,
        'seconds': seconds
    };
}

function initializeClock(id, endtime) {
    const clock = document.getElementById(id);
    const minutesSpan = clock.querySelector('.minutes');
    const secondsSpan = clock.querySelector('.seconds');

    function updateClock() {
        const t = getTimeRemaining(endtime);
        if (t.total <= 0) {
            clearInterval(timeinterval);
            const deadline = new Date(Date.parse(new Date()) + 31 * 1000);
            initializeClock('countdown', deadline);
        }
        minutesSpan.innerHTML = ('0')
        secondsSpan.innerHTML = ('0' + t.seconds).slice(-2);

    }

    updateClock();
    const timeinterval = setInterval(updateClock, 1000);
}

const deadline = new Date(Date.parse(new Date()) + 30 * 1000);
initializeClock('countdown', deadline);