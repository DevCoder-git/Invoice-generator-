
document.getElementById('invoiceForm').addEventListener('submit', function (e) {
    e.preventDefault();

    const customerName = document.getElementById('customerName').value;
    const itemDescription = document.getElementById('itemDescription').value;
    const quantity = parseInt(document.getElementById('quantity').value);
    const price = parseFloat(document.getElementById('price').value);
    const taxRate = parseFloat(document.getElementById('tax').value);

    const taxAmount = (quantity * price * taxRate) / 100;
    const totalAmount = quantity * price + taxAmount;

    document.getElementById('invoiceCustomer').textContent = customerName;

    const invoiceDetails = `
                <tr>
                    <td>${itemDescription}</td>
                    <td>${quantity}</td>
                    <td>₹${price.toFixed(2)}</td>
                    <td>${taxRate}%</td>
                    <td>₹${totalAmount.toFixed(2)}</td>
                </tr>
            `;
    document.getElementById('invoiceDetails').innerHTML = invoiceDetails;
    document.getElementById('grandTotal').textContent = `₹${totalAmount.toFixed(2)}`;

    document.getElementById('invoice').style.display = 'block';
});
