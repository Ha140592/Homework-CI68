let box = document.getElementsByClassName("box");

for (let i = 0; i < box.length; i++) {
    box[i].addEventListener("click",randomColor);   
}

function randomColor(){
    const randomBetween = (min, max) => min + Math.floor(Math.random() * (max - min + 1));
    const r = randomBetween(0, 255);
    const g = randomBetween(0, 255);
    const b = randomBetween(0, 255);
    const rgb = `rgb(${r},${g},${b})`;
    this.style= `background-color: ${rgb}`;
}
