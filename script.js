function draw(min, max){
    min = Math.ceil(min);
    max = Math.floor(max);

    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function validationFunction(min, max){

    if(!min && min!==0) return "Número mínimo não foi informado!";

    if(!max && max!==0) return "Número máximo não foi informado!";

    if(!Number.isInteger(min)) return "O número mínimo é invalido"

    if(!Number.isInteger(max)) return "O número máximo é invalido"

    if(min < 0) return "O número mínimo não pode ser menor que zero!"

    if(max < 0) return "O número máximo não pode ser menor que zero!"

    if(Number(max) < Number(min)) return "O número mínimo é maior que o máximo!";

    return false;
}

document.querySelector("#drawn-btn").addEventListener("click", () => {
    const minNumber = Number(document.querySelector("#min-number").value)
    const maxNumber = Number(document.querySelector("#max-number").value)

    const validationValue = validationFunction(minNumber, maxNumber)

    if(validationValue){
        return alert("Error: " + validationValue);
    }

    const drawnNumber = draw(minNumber, maxNumber)

    const displayNumber = document.querySelector("#display-number");
    displayNumber.textContent = drawnNumber
})