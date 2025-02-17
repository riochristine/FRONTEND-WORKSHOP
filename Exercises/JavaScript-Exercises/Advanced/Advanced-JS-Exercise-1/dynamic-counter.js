const countDisplay = document.querySelector("#counter-text");
const addBtn = document.querySelector("#button-add");
const subtractBtn = document.querySelector("#button-subtract");
let counterVal = 0;

addBtn.addEventListener("click", () => {
    add();
});

subtractBtn.addEventListener("click", () => {
    subtract();
});

window.addEventListener("keydown", (event) => {
    if (event.key === "ArrowUp") {
        add();
    } else if (event.key === "ArrowDown") {
        subtract();
    }
});

function add() {
    if (counterVal < 100) {
        counterVal++;
        updateDisplay();
    } else {
        alert("You reached the maximum limit.")
    } 
}

function subtract() {
    if (counterVal > 0) {
        counterVal--;
        updateDisplay();
    } else {
        alert("Counter cannot be less than zero.")
    }
}

function updateDisplay() {
    countDisplay.textContent = counterVal;
}
