const display = document.getElementById("display");
const billInput = document.getElementById("bill");
const tipInput = document.getElementById("tip");
const peopleInput = document.getElementById("people");

billInput.addEventListener("input", calculateTip);
tipInput.addEventListener("input", calculateTip);
peopleInput.addEventListener("input", calculateTip);

function calculateTip() {
    const billValue = billInput.value;
    const tipValue = tipInput.value;
    const peopleValue = peopleInput.value;

    const tipAmount = billValue * tipValue / 100 / peopleValue;

    display.innerText = `Tip Amount: $${tipAmount.toFixed(2)}`;
}

calculateTip();