import React from 'react';

import ProfileCard from '../Profile/ProfileCard';
import MovieCard from '../Movies/MovieCard';
import PlanetCard from '../Planets/PlanetCard';

const Listing = props => {
  if (props.type === 'people') {
    return (
      <div>
        <ProfileCard
          peoplesList={props.data}
          getInput={type => props.getTypeForDetail(type)}
        />
      </div>
    );
  }
  if (props.type === 'movies') {
    return (
      <div>
        <MovieCard
          moviesList={props.data}
          getInput={type => props.getTypeForDetail(type)}
        />
      </div>
    );
  }

  if (props.type === 'planets') {
    return (
      <div>
        <PlanetCard
          planetList={props.data}
          getInput={type => props.getTypeForDetail(type)}
        />
      </div>
    );
  }
};

export default Listing;
