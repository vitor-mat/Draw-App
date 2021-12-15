function draw(min, max){
    min = Math.ceil(min);
    max = Math.floor(max);

    return Math.floor(Math.random() * (max - min + 1)) + min;
}

document.querySelector("#drawn-btn").addEventListener("click", () => {
    const minNumber = document.querySelector("#min-number").value
    const maxNumber = document.querySelector("#max-number").value
    
    const drawnNumber = draw(minNumber, maxNumber)

    const displayNumber = document.querySelector("#display-number");
    displayNumber.textContent = drawnNumber
})