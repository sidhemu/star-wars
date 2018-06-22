import React from 'react';

import { Card, CardContent, Typography } from '@material-ui/core';

import './movieDetailCardStyle.css';

const ProlieDetailCard = props => {
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

export default ProlieDetailCard;
