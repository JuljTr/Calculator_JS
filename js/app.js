

const createElement = document.querySelector(".buttons");

function createBtn(text) {
    const newBtn = document.createElement("button");
    createBtn.innerText = text;
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

createBtn("C")
createBtn("=")
createBtn(".")
createBtn("+")
createBtn("-")
createBtn("*")
createBtn("/")

