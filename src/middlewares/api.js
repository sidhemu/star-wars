const api = ({ dispatch, getState }) => next => action => {
  if (action.type !== 'API') {
    return next(action);
  }

  const { url, success } = action.payload;

  fetch(url)
    .then(response => response.json())
    .then(data => dispatch(success(data)));
};

export default api;
