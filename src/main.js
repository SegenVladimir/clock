const deg = 6;
const lang = navigator.language;

const body = document.querySelector('body');
const hr = document.querySelector('.clock__arrows .hours');
const mn = document.querySelector('.clock__arrows .minutes');
const sc = document.querySelector('.clock__arrows .seconds');
const date = document.querySelector('.information__date');
const time = document.querySelector('.information__time__num');
const timeMeridiem = document.querySelector('.information__time__meridiem')

setInterval(() => {
    const day = new Date();
    const hh = day.getHours() * 30;
    const mm = day.getMinutes() * deg;
    const ss = day.getSeconds() * deg;
    const meridiem = day.getHours() >= 12 ? 'pm' : 'am';

    hr.style.transform = `rotateZ(${(hh) + (mm/12)}deg)`;
    mn.style.transform = `rotateZ(${mm}deg)`;
    sc.style.transform = `rotateZ(${ss}deg)`;

    time.innerHTML = `${day.getHours()}:${day.getMinutes() < 10 ? '0'+day.getMinutes() : day.getMinutes()}`;
    timeMeridiem.innerText = meridiem;
    body.setAttribute('scheme', meridiem === 'pm' ? 'dark' : 'light');

    date.innerText = new Intl.DateTimeFormat(lang, {year: 'numeric', month: 'long', day: 'numeric' }).format(new Date());
});