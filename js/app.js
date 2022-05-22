const createElement = document.querySelector(".buttons");

function createOperand(text) {
    const newOperand = document.createElement("button");
    newOperand.innerText = text;
    newOperand.setAttribute("class", "operand")
    createElement.appendChild(newOperand);
    console.log("hello")
}

createOperand("C")
createOperand("=")
createOperand(".")
createOperand("+")
createOperand("-")
createOperand("*")
createOperand("/")

function createBtn(text) {
    const newBtn = document.createElement("button");
    newBtn.innerText = text;
    newBtn.setAttribute("class", "number")
    createElement.appendChild(newBtn);
}

createBtn("0")
createBtn("1")
createBtn("2")
createBtn("3")
createBtn("4")
createBtn("5")
createBtn("6")
createBtn("7")
createBtn("8")
createBtn("9")
