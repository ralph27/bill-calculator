function formatmoney(value) {
  value = value.toFixed(2);
  return value + " $";
}

function formatsplit(value) {
  if (value == 1) {
    return value + " person";
  } else {
    return value + " people";
  }
}

function update() {
  let bill = Number(document.getElementById("bill").value);
  let tipPercente = Number(document.getElementById("tipPercente").value);
  let splitInput = Number(document.getElementById("splitInput").value);

  let tipValue = bill * (tipPercente / 100);
  let tipEach = tipValue / splitInput;
  let billEach = (bill + tipValue) / splitInput;
  let total = bill + tipValue;

  document.getElementById("tip").innerHTML = tipPercente + "%";
  document.getElementById("totalTip").innerHTML = formatmoney(tipValue);
  document.getElementById("total").innerHTML = formatmoney(total);
  document.getElementById("split").innerHTML = formatsplit(splitInput);
  document.getElementById("each").innerHTML = formatmoney(billEach);
  document.getElementById("eachTip").innerHTML = formatmoney(tipEach);
}

let container = document.getElementsByClassName("container");
container[0].addEventListener("input", update);
