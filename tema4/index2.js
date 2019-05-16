function sum() {
    const y = document.getElementById("number1").value;
    const z = document.getElementById("number2").value;
    const x = Number(y) + Number(z);
    document.getElementById("sum").textContent = "[" + y + " ] + [ " + z + " ] = " + x;
  }