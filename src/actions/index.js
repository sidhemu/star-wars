function receivePeoples(json) {
  const allData = { ...json };
  return { type: 'RECEIVE_PEOPLE', allData };
}
function receiveMovies(json) {
  const allMovies = { ...json };
  return { type: 'RECEIVE_MOVIES', allMovies };
}

function receivePlanets(json) {
  const allPlanets = { ...json };
  return { type: 'RECEIVE_PLANETS', allPlanets };
}

export function fetchPeoples(page) {
  return function(dispatch) {
    return fetchPeoplesJson(page).then(json => dispatch(receivePeoples(json)));
  };
}

function fetchPeoplesJson(page) {
  return fetch('http://swapi.co/api/people/?page=' + page).then(response =>
    response.json()
  );
}

export function fetchMovies(page) {
  return function(dispatch) {
    return fetchMoviesJson(page).then(json => dispatch(receiveMovies(json)));
  };
}

function fetchMoviesJson(page) {
  return fetch('http://swapi.co/api/films/?page=' + page).then(response =>
    response.json()
  );
}

export function fetchPlanets(page) {
  return function(dispatch) {
    return fetchPlanetsJson(page).then(json => dispatch(receivePlanets(json)));
  };
}

function fetchPlanetsJson(page) {
  return fetch('http://swapi.co/api/planets/?page=' + page).then(response =>
    response.json()
  );
}

function receiveData(json, typetext) {
  const detailData = { ...json };
  return { type: typetext, detailData };
}

export function fetchDetails(url, typetext) {
  return function(dispatch) {
    return fetchDetailJson(url).then(json =>
      dispatch(receiveData(json, typetext))
    );
  };
}

function fetchDetailJson(url) {
  return fetch(url).then(response => response.json());
}
