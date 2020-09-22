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

    const tipAmount = billValue * tipValue / 100 / peopleValue;
    const totalAmount = tipAmount + billValue / peopleValue;

    display.innerHTML = `<div>Tip Per Person: $${tipAmount.toFixed(2)}</div>
    <div>Total Per Person: $${totalAmount.toFixed(2)}</div>`;
}

calculateTip();