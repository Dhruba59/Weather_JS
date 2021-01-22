
class weather {
  constructor(city) {
    this.apiKey = '5b8c48c41cb2ead0cf8f5e13060b9881';
    this.city = city;
   // this.state = state;
  }

  async getWeather() {
    const response = await fetch(`http://api.weatherstack.com/current?access_key=${this.apiKey}&query=${this.city}`);

    const responseData = await response.json();

    return responseData;
  }

  changeLocation(city) {
    this.city = city;
  }

}