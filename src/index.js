import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap.bundle.min.js'
import './css/styles.css';
import ExchangeRateService from './exchangeRateService.js';

// Business

function getApiData(amount) {
  ExchangeRateService.getExchangeRate(amount)
    .then(function(exchangeAPIResponse) {
      if (exchangeAPIResponse instanceof Error) {
        const errorMessage = `There was an issue accessing exchange rate data for ${amount}:
        ${exchangeAPIResponse.message}`;
        throw new Error(errorMessage);
      }
      const description = exchangeAPIResponse.response[0].
    })
}

//UI Logic