function calculateSubtotal(input) {
  let row = input.parentElement.parentElement;
  let price = parseFloat(row.querySelector('.price').value) || 0;
  let quantity = parseFloat(row.querySelector('.quantity').value) || 0;
  let subtotalCell = row.querySelector('.subtotal');
  
  
  subtotalCell.textContent = price * quantity;

  calculateTotal();
}

function calculateTotal() {
  let total = 0;
  let subtotals = document.querySelectorAll('.subtotal');

  subtotals.forEach(function(subtotal) {
      total += parseFloat(subtotal.textContent) || 0;
  });

  document.getElementById('total').textContent = total;
}

function addRow() {
  let table = document.getElementById('table');
  let newRow = table.insertRow(table.rows.length - 1); // insert before the total row

  let cell1 = newRow.insertCell(0);
  let cell2 = newRow.insertCell(1);
  let cell3 = newRow.insertCell(2);
  let cell4 = newRow.insertCell(3);
  let cell5 = newRow.insertCell(4);
  

  cell1.textContent = 'Item ' + (table.rows.length - 2);
  cell2.innerHTML = '<input type="number" value="0" class="price" oninput="calculateSubtotal(this)">';
  cell3.innerHTML = '<input type="number" value="0" class="quantity" oninput="calculateSubtotal(this)">';
  cell5.innerHTML = '0';
  cell5.className = 'subtotal';
  cell4.innerHTML = '<input type="text" class="Description Of Goods/Services" output="text">';
}

function deleteRow() {
  let table = document.getElementById('table');

  // Ensure the table has more than three rows (header + first data row + at least one more data row)
  if (table.rows.length > 3) {
    table.deleteRow(table.rows.length - 2); // Delete the second-to-last row (excluding the total row)
  } else {
    console.error("Cannot delete the table header or the first data row.");
  }
}