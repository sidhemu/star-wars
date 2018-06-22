import React from 'react';
import PropTypes from 'prop-types';

import ProfileCard from '../ListCard/Profile/ProfileCard';
import MovieCard from '../ListCard/Movies/MovieCard';
import PlanetCard from '../ListCard/Planets/PlanetCard';

const Listing = props => {
  if (props.type === 'people') {
    return (
      <div>
        <ProfileCard
          dataList={props.data}
          getInput={type => props.getTypeForDetail(type)}
        />
      </div>
    );
  }
  if (props.type === 'movies') {
    return (
      <div>
        <MovieCard
          dataList={props.data}
          getInput={type => props.getTypeForDetail(type)}
        />
      </div>
    );
  }

  if (props.type === 'planets') {
    return (
      <div>
        <PlanetCard
          dataList={props.data}
          getInput={type => props.getTypeForDetail(type)}
        />
      </div>
    );
  }
};

Listing.propTypes = {
  data: PropTypes.array,
  getTypeForDetail: PropTypes.func
};

export default Listing;
