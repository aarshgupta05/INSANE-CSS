const daysOfWeek = [
    'sun', 'mon',
    'tus', 'wed',
    'thu', 'fri',
    'sat'
];
const months = [
    'JAN', 'FEB', 'MAR',
    'APR', 'MAY', 'JUN',
    'JUL', 'AUG', 'SEP',
    'OCT', 'NOV', 'DEC',
];

const $ = (id) => document.getElementById(id);
const zeroPadding = (num) => String(num).padStart(2, '0');

function clock() {
    const today = new Date();
    const h = today.getHours();
    const m = today.getMinutes();
    const s = today.getSeconds();
    const ampm = h < 11 ? 'AM' : 'PM';
    const day = today.getDay();
    const date = today.getDate();
    const month = today.getMonth();
    const year = today.getFullYear();

    $('hours').innerHTML = zeroPadding(h);
    $('min').innerHTML = zeroPadding(m);
    $('sec').innerHTML = zeroPadding(s);
    $('ampm').innerHTML = ampm;
    $(daysOfWeek.at(day - 1)).classList.remove('active');
    $(daysOfWeek[day]).classList.add('active');
    $('year').innerHTML = year;
    $('month').innerHTML = months[month];
    $('day').innerHTML = zeroPadding(date);
}

setInterval(clock, 400);