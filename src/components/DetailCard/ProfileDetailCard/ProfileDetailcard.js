import React from 'react';
import PropTypes from 'prop-types';
import { Card, CardContent, Typography } from '@material-ui/core';

import './profileDetailCardStyle.css';

const ProfileDetailcard = props => {
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
                Gender : {props.detailData.gender}
              </Typography>
              <Typography component="span">
                Height : {props.detailData.height}
              </Typography>
              <Typography component="span">
                Weight : {props.detailData.mass} Kilos
              </Typography>
              <Typography component="span">
                Hair : {props.detailData.hair_color}
              </Typography>
              <Typography component="span">
                Eye : {props.detailData.eye_color}
              </Typography>
              <Typography component="span">
                DOB : {props.detailData.birth_year}
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

ProfileDetailcard.propTypes = {
  detailData: PropTypes.shape({
    name: PropTypes.string,
    gender: PropTypes.string,
    height: PropTypes.string,
    mass: PropTypes.string,
    hair_color: PropTypes.string,
    eye_color: PropTypes.string,
    birth_year: PropTypes.string
  })
};

export default ProfileDetailcard;
