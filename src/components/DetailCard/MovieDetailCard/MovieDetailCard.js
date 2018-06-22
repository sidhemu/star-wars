import React from 'react';
import PropTypes from 'prop-types';
import { Card, CardContent, Typography } from '@material-ui/core';

import './movieDetailCardStyle.css';

const MovieDetailcard = props => {
  if (Object.keys(props.detailData).length > 0) {
    return (
      <div>
        <Card className="detail-card">
          <CardContent>
            <Typography gutterBottom variant="headline" component="h2">
              {props.detailData.title}
            </Typography>
            <Typography component="p">
              <Typography component="span">
                Episode : {props.detailData.episode_id}
              </Typography>
              <Typography component="span">
                Opening : {props.detailData.opening_crawl}
              </Typography>
              <Typography component="span">
                Director : {props.detailData.director}{' '}
              </Typography>
              <Typography component="span">
                Producer : {props.detailData.producer}
              </Typography>
              <Typography component="span">
                Release Date : {props.detailData.release_date}
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

MovieDetailcard.propTypes = {
  detailData: PropTypes.shape({
    title: PropTypes.string,
    episode_id: PropTypes.number,
    opening_crawl: PropTypes.string,
    director: PropTypes.string,
    producer: PropTypes.string,
    release_date: PropTypes.string
  })
};

export default MovieDetailcard;
