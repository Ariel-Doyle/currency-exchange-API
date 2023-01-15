import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import './css/styles.css';
import ExchangeRateService from './services/exchangeRateAPI.js';
import CurrencyList from '../src/assets/globalCurrencyList.js';

// Business

function getApiData(amount, countryCode) {
  ExchangeRateService.getExchangeRate(amount)
    .then(function(exchangeAPIResponse) {
      if (exchangeAPIResponse instanceof Error) {
        const errorMessage = `There was an issue accessing exchange rate data for ${amount}:
        ${exchangeAPIResponse.message}`;
        throw new Error(errorMessage);
      }
      const description = exchangeAPIResponse.response[0];
    });
}

//UI Logic

