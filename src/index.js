import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import './css/styles.css';
import ExchangeRateService from './services/exchangeRateAPI.js';
import CurrencyList from '../src/assets/globalCurrencyList.js';

// Business

async function getExchangeRate(currencyCode, dollarAmount) {
  const response = await ExchangeRateService.getExchangeRate(currencyCode, dollarAmount);
  if (response.result) {
    printElements(response, currencyCode, dollarAmount);
  } else {
    printError(response, currencyCode, dollarAmount);
  }
}

//UI Logic

function populateDropdownMenu() {
  const selectOptions = document.getElementById("inputGroupSelect");
  const populateMenu = CurrencyList.codeList;
  for(i=0; i<populateMenu.length; i++) {
    let menuItem = populateMenu[i];
    let element = document.createElement('option');
    element.innerText = menuItem;
    selectOptions.appendChild(element);    
  }
}

function printElements(response, dollarAmount) {
  document.querySelector('#showExchangeRates').innerText = `The exchange rate from US Dollars to ${response.target_code} is ${response.conversion_rate}.
  The ${dollarAmount} in USD is ${response.conversion_result}.`;
}

function printError(error, currencyCode) {
  document.querySelector('#error').innerText = `There was an error accessing exchange rates for ${currencyCode}:
  ${error}.`;
}

function handleFormSubmission(e) {
  e.preventDefault();
  const currencyCode = document.querySelector('#inputGroupSelect').value;
  const dollarAmount = document.querySelector('#dollar').value;
  document.querySelector('#dollar').value = null;
  getExchangeRate(currencyCode, dollarAmount);
}

window.addEventListener("load", function() {
  this.document.querySelector('inputGroupSelect').addEventListener('click', populateDropdownMenu);
  this.document.querySelector('form').addEventListener('submit', handleFormSubmission);
});

