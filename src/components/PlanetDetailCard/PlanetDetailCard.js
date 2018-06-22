import React from 'react';

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
                Diameter : {props.detailData.diameter} Kilos
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

export default PlanetDetailCard;
