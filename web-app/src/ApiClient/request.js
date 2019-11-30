import axios from 'axios';
import constants from '../constants';

const client = axios.create({
  'baseURL': constants.api.baseURL
});

// const client = axios.create({
//   baseURL: constants.api.url,
//   auth: {
//     Authorization: 'Bearer ' + {token}
//   }
// });

const request = options => {
  const onSuccess = response => {
  // console.debug('Request Successful!', response);
    response.data;
  };
  const onError = error => {
    // console.error('Request Failed:', error.config);
    if (error.response) {
      // console.error('Status:', error.response.status);
      // console.error('Data:', error.response.data);
      // console.error('Headers:', error.response.headers);
    } else {
      // Maybe retry;
      // console.error('Error Message:', error.message);
    }

    return Promise.reject(error.response || error.message);
  };

  return client(options)
    .then(onSuccess)
    .catch(onError);
};

export default request;
