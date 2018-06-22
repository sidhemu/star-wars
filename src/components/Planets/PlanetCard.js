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

import './planetStyle.css';

class PlanetCard extends Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.showData = this.showData.bind(this);
  }

  showData(url) {
    this.props.fetchDetails(url, 'RECEIVE_PLANETDATA');
    this.props.getInput('planetDetail');
  }
  render() {
    return (
      <Grid fluid>
        <h3 className="title">Planets</h3>
        <Row className="show-grid">
          {this.props.planetList.map((planet, index) => {
            return (
              <Card className="card" key={index}>
                <CardContent>
                  <Typography variant="headline" component="h2">
                    {planet.name}
                  </Typography>
                  <Typography className="secondary-text" color="textSecondary">
                    Diameter: {planet.diameter}
                  </Typography>
                  <Typography
                    className="secondary-text population"
                    component="p"
                  >
                    Population: {planet.population}
                  </Typography>
                </CardContent>
                <CardActions>
                  <Button
                    size="small"
                    onClick={() => this.showData(planet.url)}
                  >
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
)(PlanetCard);
