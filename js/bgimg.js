const worldCup_body = document.querySelector(".worldCup-body");

const bgimg = [
    "1.png",
    "2.png",
    "3.png",
    "4.png"
]


const choseImage = bgimg[Math.floor(Math.random() * bgimg.length)];


const image = new Image();
image.src =`img/${choseImage}`;
worldCup_body.appendChild(image);




