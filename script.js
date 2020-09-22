const display = document.getElementById("display");
const billInput = document.getElementById("bill");
const tipInput = document.getElementById("tip");
const peopleInput = document.getElementById("people");

billInput.addEventListener("input", calculateTip);
tipInput.addEventListener("input", calculateTip);
peopleInput.addEventListener("input", calculateTip);

function calculateTip() {
    const billValue = parseInt(billInput.value);
    const tipValue = parseInt(tipInput.value);
    const peopleValue = parseInt(peopleInput.value);

    const tipAmount = billValue * tipValue / 100;
    const totalAmount = tipAmount + billValue;

    display.innerHTML = `<div>Tip Per Person: $${(tipAmount / peopleValue).toFixed(2)}</div>
    <div>Total Per Person: $${(totalAmount / peopleValue).toFixed(2)}</div>`;
}

calculateTip();