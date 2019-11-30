import request from './request';

const get = url => request({
  url,
  'method': 'GET'
});

const post = (url, data) => request({
  url,
  'method': 'POST',
  data
});

const del = url => request({
  url,
  'method': 'DELETE'
});

const patch = (url, data) => request({
  url,
  'method': 'PATCH',
  data
});

const register = data => post('/users/register', data);

const login = data => post('/users/login', data);

const createSight = data => post('/sights/create', data);

const deleteSight = sightId => del(`/sights/${sightId}/delete`);

const getSightDetails = sightId => get(`/sights/${sightId}/retrieve`);

const getSightsBy = ({ sort, category, minRating, isWorking, state }) => {
  const url = `/sights/retrieve?sort=${sort}&category=${category}&min-rating=${minRating}&isworking=${isWorking}&state=${state}`;

  return get(url);
};

const managePendingSight = (sightId, accepted) => patch(`/sights/${sightId}/manage`, { accepted });

const rateSight = (sightId, rating) => post(`/sights/${sightId}/rate`, { rating });

const getSightComments = sightId => get(`sights/${sightId}/comments/retrieve`);

const addSightComment = (sightId, content) => post(`/sights/${sightId}/comments/add`, { content });

const deleteSightComment = (sightId, commentId) => delete (`/sights/${sightId}/comments/${commentId}/delete`);

const APIClient = {
  login,
  register,
  createSight,
  deleteSight,
  getSightDetails,
  getSightsBy,
  managePendingSight,
  rateSight,
  getSightComments,
  addSightComment,
  deleteSightComment
};

// Might do something like Account/Sights/Comments Managers with just CRUD options like CommentsManager.add(content);

export default APIClient;
