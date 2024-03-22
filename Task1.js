function convert() {
    const amount = parseFloat(document.getElementById('amount').value);
    const fromCurrency = document.getElementById('from').value;
    const toCurrency = document.getElementById('to').value;
  
    fetch(`https://api.exchangerate-api.com/v4/latest/${fromCurrency}`)
    .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then(data => {
        const exchangeRate = data.rates[toCurrency];
        if (!exchangeRate) {
          throw new Error('Invalid currency');
        }
        const result = amount * exchangeRate;
        document.getElementById('result').innerHTML = `${amount} ${fromCurrency} = ${result.toFixed(2)} ${toCurrency}`;
      })
      .catch(error => console.error('Error:', error.message));
  }