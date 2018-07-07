const log = ({ dispatch, getState }) => next => action => {
  console.log('ACTION ' + JSON.stringify(action));
  next(action);
};

export default log;
