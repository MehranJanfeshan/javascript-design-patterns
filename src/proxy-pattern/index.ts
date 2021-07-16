function CryptocurrencyAPI() {
  this.getValue = function (coin) {
    console.log('Calling External API...')
    switch (coin) {
      case 'Bitcoin':
        return '300$'
      case 'Litecoin':
        return '100$'
      case 'Ethereum':
        return '1000$'
    }
  }
}

const api = new CryptocurrencyAPI()

console.log(api.getValue('Bitcoin'))
console.log(api.getValue('Litecoin'))
console.log(api.getValue('Ethereum'))


// this the proxy that basically has reference to another object and can control it
// in this example we have implemented caching but it can be adding extra functionality as well.
function CryptocurrencyAPIProxy() {
  const api = new CryptocurrencyAPI()
  this.cache = {}

  this.getValue = function (coin) {
    if (this.cache[coin] == null) {
      this.cache[coin] = api.getValue(coin)
    }
    return this.cache[coin]
  }
}

