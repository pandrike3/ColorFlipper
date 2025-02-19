const body = document.body;

function setColor(name) {
    body.style.backgroundColor = name;
}

function changeBackgroundColor() {
    const colors = ["#FF5733", "#33FF57", "#3357FF", "#F933FF", "#33FFF5", "#FFC300"];
    const randomColor = colors[Math.floor(Math.random() * colors.length)];
    body.style.backgroundColor = randomColor;
}
 