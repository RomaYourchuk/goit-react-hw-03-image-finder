import axios from 'axios';

const ServiceAPI = (q, page) => {
  const options = {
    params: {
      key: 'e900ddd99edc3affd146f1905e638fd1',
      image_type: 'photo',
      orientation: 'horizontal',
      safesearch: false,
      per_page: 12,
      q,
      page,
    },
  };

  return axios.get('https://pixabay.com/api/', options);
};

export { ServiceAPI };