import { combineReducers } from 'redux';

function allData(state = {}, action) {
  switch (action.type) {
    case 'RECEIVE_PEOPLE':
      return { ...action.allData };
    case 'RECEIVE_MOVIES':
      return { ...action.allMovies };
    case 'RECEIVE_PLANETS':
      return { ...action.allPlanets };
    default:
      return state;
  }
}

function detailData(state = {}, action) {
  switch (action.type) {
    case 'RECEIVE_PROFILEDATA':
      return { ...action.detailData };
    case 'RECEIVE_PLANETDATA':
      return { ...action.detailData };
    case 'RECEIVE_MOVIEDATA':
      return { ...action.detailData };
    default:
      return state;
  }
}

const rootReducer = combineReducers({ allData, detailData });

export default rootReducer;
