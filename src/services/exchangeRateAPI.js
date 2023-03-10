export default class ExchangeRateService {
  static async getExchangeRate(currencyCode, dollarAmount) {
    try {
      const response = await fetch(`https://v6.exchangerate-api.com/v6/${process.env.API_KEY}/pair/USD/${currencyCode}/${dollarAmount}`);
      const jResponse = await response.json();
      if (!response.ok) {
        const errorMessage = `${response.status}: ${jResponse['error-type']}`;
        throw new Error(errorMessage);        
      }
      return jResponse;
    } catch(error) {
      return error;
    }
  }
}