import React from 'react';
import PropTypes from 'prop-types';

import ProfileDetailcard from '../DetailCard/ProfileDetailCard/ProfileDetailcard';
import MovieDetailCard from '../DetailCard/MovieDetailCard/MovieDetailCard';
import PlanetDetailCard from '../DetailCard/PlanetDetailCard/PlanetDetailCard';

const DetailContainer = props => {
  if (props.type === 'peopleDetail') {
    return (
      <div>
        <ProfileDetailcard detailData={props.detailData} />
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

DetailContainer.propTypes = {
  detailData: PropTypes.object
};

export default DetailContainer;
