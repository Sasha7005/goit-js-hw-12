import axios from 'axios';
const API_KEY = '52821628-dae3b3c31b624417cff84e51c';
const BASE_URL = 'https://pixabay.com/api/?';

export async function getImagesByQuery(query, page) {
  const params = new URLSearchParams({
    key: API_KEY,
    q: query,
    image_type: 'photo',
    orientation: 'horizontal',
    safesearch: true,
    page,
    per_page: 15,
  });
  const response = await axios(`${BASE_URL}${params}`);
  return response.data;
}
