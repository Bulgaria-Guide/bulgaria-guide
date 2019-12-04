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

const getSightsBy = ({ sortMethod, category, minRating, isWorking, state }) => {
  const url = `/sights/retrieve?sort=${sortMethod} &\
                                category=${category}&\
                                min-rating=${minRating}&\
                                isworking=${isWorking}&\
                                state=${state}`;

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
  login,
  register,
  createSight,
  deleteSight,
  getSightDetails,
  getAllSights,
  getSightsBy,
  approveSight,
  declineSight,
  rateSight,
  getSightComments,
  addSightComment,
  deleteSightComment
};

// Might do something like Account/Sights/Comments Managers
// with just CRUD options like CommentsManager.add(content);

export default APIClient;
