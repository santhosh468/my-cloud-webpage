// JavaScript for Stock Market Data and Calculator
document.addEventListener('DOMContentLoaded', function () {
  // Fetch stock market data (dummy data here)
  const stockPriceElement = document.getElementById('stockPrice');
  stockPriceElement.textContent = "$1245.76"; // Dummy stock price

  // Finance Calculator
  window.calculate = function () {
    const amount = parseFloat(document.getElementById('amount').value);
    const interestRate = parseFloat(document.getElementById('interest').value);
    const years = parseFloat(document.getElementById('years').value);

    if (isNaN(amount) || isNaN(interestRate) || isNaN(years) || amount <= 0 || interestRate <= 0 || years <= 0) {
      alert("Please enter valid numbers.");
      return;
    }

    const futureValue = amount * Math.pow(1 + (interestRate / 100), years);
    document.getElementById('result').textContent = futureValue.toFixed(2);
  };
});
