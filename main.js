var earnings_expenses, num_one, earnings, expenses, item;

function getNumberOrString(value) {
  // Convert a string value to a number if possible
  let number_value = Number(value);
  if (Number.isNaN(number_value)) {
    return value
  } else {
    return number_value
  }
}


earnings_expenses = [];
earnings = [];
expenses = [];


document.getElementById('button_add').addEventListener('click', (event) => {
  num_one = getNumberOrString(document.getElementById('text').value);
  earnings_expenses.push(num_one);
  if (num_one >= 0) {
    earnings.push(num_one);
  }
  if (num_one < 0) {
    expenses.push(num_one);
  }

});

document.getElementById('button_total').addEventListener('click', (event) => {
  let element_earnings = document.getElementById('earnings');
  element_earnings.innerText = earnings.reduce((a,b) => a+b, 0);
  let element_expenses = document.getElementById('expenses');
  element_expenses.innerText = expenses.reduce((a,b) => a+b, 0);
  let element_earnings_list = document.getElementById('earnings_list');
  earnings.forEach((item) => {
    let new_li = document.createElement('li');
    new_li.innerText = item;

    element_earnings_list.appendChild(new_li);
  });
  let element_expenses_list = document.getElementById('expenses_list');
  expenses.forEach((item) => {
    let new_li2 = document.createElement('li');
    new_li2.innerText = item;

    element_expenses_list.appendChild(new_li2);
  });
  let element_balance = document.getElementById('balance');
  element_balance.innerText = earnings_expenses.reduce((a,b) => a+b, 0);
  let element_slip = document.getElementById('slip');
  element_slip.style.backgroundColor = '#ccccff';

});