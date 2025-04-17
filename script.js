function calculate(operation) {
    const num1 = parseFloat(document.getElementById('num1').value);
    const num2 = parseFloat(document.getElementById('num2').value);
    let res = '';

    if (isNaN(num1) || isNaN(num2)) {
      res = 'Iltimos, raqam kiriting!';
    } else {
      switch (operation) {
        case '+': res = num1 + num2; break;
        case '-': res = num1 - num2; break;
        case '*': res = num1 * num2; break;
        case '/': res = num2 !== 0 ? (num1 / num2).toFixed(2) : '0 ga bo‘lish mumkin emas'; break;
      }
    }

    document.getElementById('result').innerHTML = 'Result: ' + res;
  }