import request from './request';

// const baseUrl = 'http://localhost:3010/v1'; // For test Node Server
const baseUrl = 'http://localhost:8080/v1'; // For Java Server
// const baseUrl = 'http://localhost:8081/v1'; // For Load Balancer

const authHeader = jwtToken => Boolean(jwtToken) && {
  'Authorization': `Bearer ${jwtToken}`
};

const get = (url, jwtToken) => request({
  'url': baseUrl + url,
  'method': 'GET',
  'headers': {
    'Access-Control-Allow-Origin': 'http://localhost:3000',
    'Access-Control-Allow-Credentials': 'true',
    ...authHeader(jwtToken)
  }
});

const post = (url, data, jwtToken) => request({
  'url': baseUrl + url,
  'method': 'POST',
  data,
  'headers': {
    'Access-Control-Allow-Origin': 'http://localhost:3000',
    ...authHeader(jwtToken)
  }
});

const del = (url, jwtToken) => request({
  'url': baseUrl + url,
  'method': 'DELETE',
  'headers': {
    'Access-Control-Allow-Origin': 'http://localhost:3000',
    ...authHeader(jwtToken)
  }
});

const patch = (url, data, jwtToken) => request({
  'url': baseUrl + url,
  'method': 'PATCH',
  data,
  'headers': {
    'Access-Control-Allow-Origin': 'http://localhost:3000',
    'Access-Control-Allow-Credentials': 'true',
    ...authHeader(jwtToken)
  }
});

const register = data => post('/users/register', data);

const getRole = (username, token) => get(`/users/role?username=${username}`, token);

const login = data => post('/users/login', data);

const createSight = (data, token) => post('/sights/create', data, token);

const deleteSight = (sightId, token) => del(`/sights/${sightId}/delete`, token);

const getSightDetails = sightId => get(`/sights/${sightId}/retrieve`);

const getPendingSights = token => get('/sights/retrieve/pending', token);

const getSightsBy = ({ sortMethod, category, minRating }) => {
  const sort = sortMethod ? `sort=${sortMethod}` : '';
  const cat = category ? `category=${category}&` : '';
  const minR = minRating ? `min-rating=${minRating}&` : '';

  const url = `/sights/retrieve?${sort}${cat}${minR}`;

  return get(url);
};

const approveSight = (sightId, token) => {
  const url = `/sights/${sightId}/manage`;
  const data = { 'accepted': true };

  return patch(url, data, token);
};
const declineSight = (sightId, token) => {
  const url = `/sights/${sightId}/manage`;
  const data = { 'accepted': false };

  return patch(url, data, token);
};

const rateSight = (sightId, rating, token) => {
  const url = `/sights/${sightId}/rating`;
  const data = { rating };

  return patch(url, data, token);
};

const getSightComments = sightId => get(`/sights/${sightId}/comments/retrieve`);

const addSightComment = (sightId, content, token) => {
  const url = '/comments/create';
  const data = {
    sightId,
    content
  };

  return post(url, data, token);
};

const deleteComment = (commentId, token) => {
  const url = `/comments/${commentId}/delete`;

  return del(url, token);
};

const APIClient = {
  login,
  register,
  getRole,
  createSight,
  deleteSight,
  getSightDetails,
  getPendingSights,
  getSightsBy,
  approveSight,
  declineSight,
  rateSight,
  getSightComments,
  addSightComment,
  deleteComment
};

export default APIClient;
