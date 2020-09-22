const display = document.getElementById("display");
const billInput = document.getElementById("bill");
const tipInput = document.getElementById("tip");

billInput.addEventListener("input", calculateTip);
tipInput.addEventListener("input", calculateTip);

function calculateTip() {
    const billValue = billInput.value;
    const tipValue = tipInput.value;

    const tipAmount = billValue * tipValue / 100;

    display.innerText = `Tip Amount: $${tipAmount.toFixed(2)}`;
}

calculateTip();