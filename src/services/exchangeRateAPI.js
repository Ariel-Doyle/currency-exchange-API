export default class ExchangeRateService {
  static async getExchangeRate(currencyCode, dollarAmount) {
    try {
      const response = await fetch(`https://v6.exchangerate-api.com/v6/${process.env.API_KEY}/pair/USD/${currencyCode}/${dollarAmount}`);
      const jsonifiedResponse = await response.json();
      if (!response.ok) {
        const errorMessage = `${response.result} ${response['error-type']} ${jsonifiedResponse.message}`;
        throw new Error(errorMessage);        
      }
      return jsonifiedResponse;
    } catch(error) {
      return error;
    }
  }
}