import axios     from 'axios';
import constants from '../constants';

const client = axios.create({
  baseURL: constants.api.baseURL
});

// const client = axios.create({ 
//   baseURL: constants.api.url, 
//   auth: { 
//     Authorization: 'Bearer ' + {token} 
//   } 
// });

const request = function(options) {
  const onSuccess = function(response) {
    console.debug('Request Successful!', response);
    return response.data;
  }

  const onError = function(error) {
    console.error('Request Failed:', error.config);

    if (error.response) {
      console.error('Status:',  error.response.status);
      console.error('Data:',    error.response.data);
      console.error('Headers:', error.response.headers);

    } else {
        // Maybe retry;
        console.error('Error Message:', error.message);
    }

    return Promise.reject(error.response || error.message);
  }

  return client()
            .then(onSuccess)
            .catch(onError);
}

export default request;