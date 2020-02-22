let history = document.querySelector('.history__value');
var output = document.querySelector('.output__value');

// PushBtn
let numbers = '';
let arr = [];
let i = 0;
let currentValue = '';
let values = '';
let result = '';

function pushBtn(obj) {
  let className = obj.getAttribute('class');
  let value = obj.getAttribute('value');

  if (className == 'number') {
    numbers += value;
    output.textContent += value;
  } else if (className == 'operator') {
    switch (value) {
      case '+':
        arr.push(output.textContent);
        history.textContent += arr[i];
        history.textContent += ' + ';
        values += arr[i];
        values += ' + ';
        output.textContent = '';
        i++;
        break;
      case '-':
        arr.push(output.textContent);
        history.textContent += arr[i];
        history.textContent += ' - ';
        values += arr[i];
        values += ' - ';
        output.textContent = '';
        i++;
        break;
      case '*':
        arr.push(output.textContent);
        history.textContent += arr[i];
        history.textContent += ' x ';
        values += arr[i];
        values += ' * ';
        output.textContent = '';
        i++;
        break;
      case '/':
        arr.push(output.textContent);
        history.textContent += arr[i];
        history.textContent += ' / ';
        values += arr[i];
        values += ' / ';
        output.textContent = '';
        i++;
        break;
      case '%':
        arr.push(output.textContent);
        history.textContent += arr[i];
        history.textContent += ' % ';
        values += arr[i];
        values += ' % ';
        output.textContent = '';
        i++;
        break;
      case 'c':
        // Reset
        history.textContent = '';
        output.textContent = '';
        numbers = '';
        arr = [];
        currentValue = '';
        values = '';
        result = '';
        i = 0;
        break;
      case 'ce':
        output.textContent = output.textContent.slice(0,-1);
        break;
      case '=':
        currentValue = output.textContent;
        history.textContent += currentValue;
        history.textContent += ' = ';
        for (let i = 0; i < arr.length; i++) {
          result += parseInt(arr[i]);
        }
        result = eval(values + currentValue);
        output.textContent = result;
        break;
    }
  }
}

/* 
    if (value == '+') {
      arr.push(output.textContent);
      history.textContent += arr[i];
      history.textContent += ' + ';
      values += arr[i];
      values += ' + ';
      output.textContent = '';
      i++;
    } else if (value == '-') {
      arr.push(output.textContent);
      history.textContent += arr[i];
      history.textContent += ' - ';
      values += arr[i];
      values += ' - ';
      output.textContent = '';
      i++;
    } else if (value == '=') {
      currentValue = output.textContent;
      history.textContent += currentValue;
      history.textContent += ' = ';
      for (let i = 0; i < arr.length; i++) {
        result += parseInt(arr[i]);
      }
      result = eval(values + currentValue);
      output.textContent = result;
    }*/