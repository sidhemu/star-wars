import React from 'react';
import PropTypes from 'prop-types';
import { Card, CardContent, Typography } from '@material-ui/core';

import './planetDetailCardStyle.css';

const PlanetDetailCard = props => {
  if (Object.keys(props.detailData).length > 0) {
    return (
      <div>
        <Card className="detail-card">
          <CardContent>
            <Typography gutterBottom variant="headline" component="h2">
              {props.detailData.name}
            </Typography>
            <Typography component="p">
              <Typography component="span">
                Rotation : {props.detailData.rotation_period}
              </Typography>
              <Typography component="span">
                Orbital : {props.detailData.orbital_period}
              </Typography>
              <Typography component="span">
                Diameter : {props.detailData.diameter} KM
              </Typography>
              <Typography component="span">
                Climate : {props.detailData.climate}
              </Typography>
              <Typography component="span">
                gravity : {props.detailData.gravity}
              </Typography>
              <Typography component="span">
                Terrain : {props.detailData.terrain}
              </Typography>
              <Typography component="span">
                Surface Water : {props.detailData.surface_water}
              </Typography>
              <Typography component="span">
                Popluation : {props.detailData.population}
              </Typography>
            </Typography>
          </CardContent>
        </Card>
      </div>
    );
  } else {
    return null;
  }
};

PlanetDetailCard.propTypes = {
  detailData: PropTypes.shape({
    name: PropTypes.string,
    rotation_period: PropTypes.string,
    orbital_period: PropTypes.string,
    diameter: PropTypes.string,
    climate: PropTypes.string,
    gravity: PropTypes.string,
    terrain: PropTypes.string,
    surface_water: PropTypes.string,
    population: PropTypes.string
  })
};

export default PlanetDetailCard;
