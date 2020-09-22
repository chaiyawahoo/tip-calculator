const display = document.getElementById("display");
const billInput = document.getElementById("bill");
const tipInput = document.getElementById("tip");
const peopleInput = document.getElementById("people");
const subtractButtons = Array.from(document.getElementsByClassName("subtract"));
const addButtons = Array.from(document.getElementsByClassName("add"));

billInput.addEventListener("input", calculateTip);
tipInput.addEventListener("input", calculateTip);
peopleInput.addEventListener("input", calculateTip);

subtractButtons.forEach(applySubtractEventListener);
addButtons.forEach(applyAddEventListener);

function calculateTip() {
    let billValue = parseInt(billInput.value);
    let tipValue = parseInt(tipInput.value);
    let peopleValue = parseInt(peopleInput.value);

    if (isNaN(billValue) || billValue < 0) billValue = 0;
    if (isNaN(tipValue) || tipValue < 0) tipValue = 0;
    if (isNaN(peopleValue) || peopleValue < 1) peopleValue = 1;
    billInput.value = billValue;
    tipInput.value = tipValue;
    peopleInput.value = peopleValue;

    const tipAmount = billValue * tipValue / 100;
    const totalAmount = tipAmount + billValue;

    display.innerHTML = `<div>Tip Per Person: $${(tipAmount / peopleValue).toFixed(2)}</div>
    <div>Total Per Person: $${(totalAmount / peopleValue).toFixed(2)}</div>`;
}

function applySubtractEventListener(button) {
    button.addEventListener("click", function (e) {
        const inputElement = e.target.parentElement.children[1];
        if (inputElement.name === "tip" && inputElement.value > 0) {
            inputElement.value--;
        } else if (inputElement.name === "people" && inputElement.value > 1) {
            inputElement.value--;
        }
        calculateTip();
    });
}

function applyAddEventListener(button) {
    button.addEventListener("click", function (e) {
        const inputElement = e.target.parentElement.children[1];
        if (inputElement.name === "tip" || inputElement.name === "people") {
            inputElement.value++;
        }
        calculateTip();
    });
}

calculateTip();