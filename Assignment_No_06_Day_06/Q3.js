name = prompt("Enter your name");
nm.innerText = ("Welcome to LetsUpgrade : " + name)
let currenttime = document.getElementById("time")

function date() {
    let time = new Date();
    let t = time.toLocaleTimeString();
    currenttime.innerText = t
}
setInterval(date, 1000);
let mode = document.getElementById('drkmod');

mode.onclick = function clss() {
    document.body.classList.toggle("dark-mode");
}