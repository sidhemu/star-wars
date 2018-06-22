import React from 'react';

import ProlieDetailCard from '../ProfileDetailCard/ProlieDetailCard';
import MovieDetailCard from '../MovieDetailCard/MovieDetailCard';
import PlanetDetailCard from '../PlanetDetailCard/PlanetDetailCard';

const DetailConatiner = props => {
  if (props.type === 'peopleDetail') {
    return (
      <div>
        <ProlieDetailCard detailData={props.detailData} />
      </div>
    );
  }
  if (props.type === 'movieDetail') {
    return (
      <div>
        <MovieDetailCard detailData={props.detailData} />
      </div>
    );
  }

  if (props.type === 'planetDetail') {
    return (
      <div>
        <PlanetDetailCard detailData={props.detailData} />
      </div>
    );
  }
};

export default DetailConatiner;
