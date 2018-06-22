import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Grid, Row } from 'react-bootstrap';
import {
  Card,
  CardContent,
  Typography,
  CardActions,
  Button
} from '@material-ui/core';

import { fetchDetails } from '../../actions';

import './movieStyle.css';

class MovieCard extends Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.showData = this.showData.bind(this);
  }

  showData(url) {
    this.props.fetchDetails(url, 'RECEIVE_MOVIEDATA');
    this.props.getInput('movieDetail');
  }
  render() {
    return (
      <Grid fluid>
        <h3 className="title">Movies</h3>
        <Row className="show-grid">
          {this.props.moviesList.map((movie, index) => {
            return (
              <Card className="card" key={index}>
                <CardContent>
                  <Typography className="title" color="textSecondary">
                    {movie.director}
                  </Typography>
                  <Typography variant="headline" component="h2">
                    {movie.title}
                  </Typography>
                  <Typography className="secondary-text" color="textSecondary">
                    {movie.producer}
                  </Typography>
                  <Typography
                    className="secondary-text release-date"
                    component="p"
                  >
                    Released Date : {movie.release_date}
                  </Typography>
                </CardContent>
                <CardActions>
                  <Button size="small" onClick={() => this.showData(movie.url)}>
                    Learn More
                  </Button>
                </CardActions>
              </Card>
            );
          })}
        </Row>
      </Grid>
    );
  }
}

export default connect(
  null,
  { fetchDetails }
)(MovieCard);
