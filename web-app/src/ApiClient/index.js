import request from './request';

// const baseUrl = "http://localhost:3010/v1" // For test Node Server
// const baseUrl = "http://localhost:8080/v1" // For Java Server
const baseUrl = 'http://localhost:8081/v1'; // For Load Balancer

// const token = '123asd5';

const authHeader = jwtToken => Boolean(jwtToken) && {
  'Authorization': `Bearer ${jwtToken}`
};

const get = (url, jwtToken) => request({
  'url': baseUrl + url,
  'method': 'GET',
  'headers': authHeader(jwtToken)
});

const post = (url, data, jwtToken) => request({
  'url': baseUrl + url,
  'method': 'POST',
  data,
  'headers': authHeader(jwtToken)
});

const del = (url, jwtToken) => request({
  'url': baseUrl + url,
  'method': 'DELETE',
  'headers': authHeader(jwtToken)
});

const patch = (url, data, jwtToken) => request({
  'url': baseUrl + url,
  'method': 'PATCH',
  data,
  'headers': authHeader(jwtToken)
});

const register = data => post('/users/register', data);

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

const getSightComments = sightId => get(`sights/${sightId}/comments/retrieve`);

const addSightComment = (sightId, content, token) => {
  const url = `/sights/${sightId}/comments/add`;

  return post(url, { content }, token);
};

const deleteSightComment = (sightId, commentId, token) => {
  const url = `/sights/${sightId}/comments/${commentId}/delete`;

  return del(url, token);
};

const APIClient = {
  login, // DONE
  register, // DONE
  createSight,
  deleteSight, // DONE
  getSightDetails,
  getPendingSights, // DONE -- add Token
  getAllSights, // DONE -- to be deleted in a bit
  getSightsBy, // DONE
  approveSight, // DONE
  declineSight, // DONE
  rateSight,
  getSightComments, // DONE
  addSightComment, // DONE
  deleteSightComment // DONE
};

// Might do something like Account/Sights/Comments Managers
// with just CRUD options like CommentsManager.add(content);

export default APIClient;
