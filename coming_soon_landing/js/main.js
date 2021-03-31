const countdown = document.querySelector('.countdown');

//set launch date
const launchDate = new Date('June 1, 2021 12:00:00').getTime();

//Update every second
const intvl = setInterval(() => {
//Get current time
const now = new Date().getTime();
//distance from now to launch date
const distance = launchDate - now;
//time calculations
const days = Math.floor(distance / (1000 * 60 * 60 * 24));
const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
const mins = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
const seconds = Math.floor((distance % (1000 * 60)) / 1000);

//display results
countdown.innerHTML = `
<div>${days}<span>Days</span></div>
<div>${hours}<span>Hours</span></div>
<div>${mins}<span>Minutes</span></div>
<div>${seconds}<span>Seconds</span></div>
`;

//If launch hdate passed
if(distance < 0 ) {
    //stop countdown
    clearInterval(intvl);
    //style and output text
    countdown.style.color = '#ffb6c1';
    countdown.innerHTML = 'Launched!'

}

}, 1000);