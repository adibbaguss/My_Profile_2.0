import axios from 'axios';

const API_KEY = '88c997c405756dea1925aa07d789e4c1';
const BASE_URL = 'https://api.openweathermap.org/data/2.5/weather';

const getWeather = async () => {
  try {
    const response = await axios.get(BASE_URL, {
      params: {
        q: 'limpung',
        appid: API_KEY,
        units: 'metric',
      },
    });
    return response.data;
  } catch (error) {
    console.error('Error fetching the weather data', error);
    throw error;
  }
};
export default getWeather;
