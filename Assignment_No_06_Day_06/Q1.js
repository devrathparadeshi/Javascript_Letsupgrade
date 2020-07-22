color = ["red", "yellow", "orange", "blue", "grey", "green", "aqua", "brown", "cyan", "lime"];
let i = 0;

function changecolor() {
    document.body.style.backgroundColor = color[i];
    i++;
    if (i > color.length - 1) {
        i = 0;
    }
}
setInterval(changecolor, 5000);