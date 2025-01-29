const timeEl = document.querySelector(".profile__time");



const time = () => {
  let date = new Date().toLocaleString()
let currentTime = date.split(",")[1];
  

timeEl.innerHTML = currentTime;
};

setInterval(() => {
  time();
}, 1000);


