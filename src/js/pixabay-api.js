import axios from 'axios';
const API_KEY = '52821628-dae3b3c31b624417cff84e51c';

export function getImagesByQuery(query) {
  return axios('https://pixabay.com/api/', {
    params: {
      key: API_KEY,
      q: query,
      image_type: 'photo',
      orientation: 'horizontal',
      safesearch: true,
    },
  })
    .then(response => {
      return response.data.hits;
    })
    .catch(error => {
      return [];
    });
}
