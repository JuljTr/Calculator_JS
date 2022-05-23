const createNumber = document.querySelector(".number_btn");
const createSymbol = document.querySelector(".operand_btn");

function createOperand(text) {
    const newOperand = document.createElement("button");
    newOperand.innerText = text;
    newOperand.setAttribute("class", "operand")
    createSymbol.appendChild(newOperand);
    console.log("hello")
}

createOperand("+")
createOperand("-")
createOperand("*")
createOperand("/")

function createBtn(text) {
    const newBtn = document.createElement("button");
    newBtn.innerText = text;
    newBtn.setAttribute("class", "number")
    createNumber.appendChild(newBtn);
}

createBtn("C")
createBtn("=")
createBtn(".")

createBtn("7")
createBtn("8")
createBtn("9")
createBtn("4")
createBtn("5")
createBtn("6")
createBtn("1")
createBtn("2")
createBtn("3")
createBtn("0")
