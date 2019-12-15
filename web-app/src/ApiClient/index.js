import request from './request';

// const baseUrl = 'http://localhost:3010/v1'; // For test Node Server
const baseUrl = 'http://localhost:8080/v1'; // For Java Server
// const baseUrl = 'http://localhost:8081/v1'; // For Load Balancer

// eslint-disable-next-line max-len
// const token = 'eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJ1c2VyIiwiZXhwIjoxN…8WxzebMeQ6DD0v8Ry505DBwbYJTZw4SzH9jYZ3CQm4l4YLkuw';

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
    'Access-Control-Allow-Origin': '*',
    ...authHeader(jwtToken)
  }
});

const del = (url, jwtToken) => request({
  'url': baseUrl + url,
  'method': 'DELETE',
  'headers': {
    'Access-Control-Allow-Origin': '*',
    ...authHeader(jwtToken)
  }
});

const patch = (url, data, jwtToken) => request({
  'url': baseUrl + url,
  'method': 'PATCH',
  data,
  'headers': {
    'Access-Control-Allow-Origin': '*',
    ...authHeader(jwtToken)
  }
});

const register = data => post('/users/register', data);

const getRole = (username, token) => get(`/users/role?username=${username}`, token);

const login = data => post('/users/login', data);

const createSight = (data, token) => post('/sights/create', data, token);

const deleteSight = (sightId, token) => del(`/sights/${sightId}/delete`, token);

const getSightDetails = sightId => get(`/sights/${sightId}/retrieve`);

const getAllSights = () => {
  const url = '/sights/retrieve';

  return get(url);
};

const getPendingSights = () => get('/sights/retrieve?state=pending');

const getSightsBy = ({ sortMethod, category, minRating, isWorking, state }) => {
  const sort = sortMethod ? `sort=${sortMethod}&` : '';
  const cat = category ? `category=${category}&` : '';
  const minR = minRating ? `min-rating=${minRating}&` : '';
  const working = `isworking=${isWorking}&`;
  const pending = state ? 'state=pending' : '';

  const url = `/sights/retrieve?${sort}${cat}${minR}${working}${pending}`;
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
  const url = `/sights/${sightId}/rate`;
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

// DONE v1 => sending correct data
// DONE v2 => use the response appropriately
const APIClient = {
  login, // DONE v2
  register, // DONE v2
  getRole, // DONE v2
  createSight, // DONE v2 - check pictures
  deleteSight, // DONE v2
  getSightDetails, // DONE v2
  getAllSights, // DONE v2 --should be removed later
  getPendingSights, // DONE v1 -- add Token
  getSightsBy, // DONE v1  -- wait for Todor
  approveSight, // DONE v1 -- wait for Todor
  declineSight, // DONE v1 -- wait for Todor
  rateSight, // DONE v1
  getSightComments, // DONE v2
  addSightComment, // DONE v2
  deleteComment // DONE v2
};

// Might do something like Account/Sights/Comments Managers
// with just CRUD options like CommentsManager.add(content);

export default APIClient;
