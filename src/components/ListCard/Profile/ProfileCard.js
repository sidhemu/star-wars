import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import { Grid, Row } from 'react-bootstrap';
import {
  Card,
  CardContent,
  Typography,
  CardActions,
  Button
} from '@material-ui/core';

import { fetchDetails } from '../../../actions';

import './profileStyle.css';

class ProfileCard extends Component {
  constructor(props) {
    super(props);

    this.state = {};
    this.showData = this.showData.bind(this);
  }

  showData(url) {
    this.props.fetchDetails(url, 'RECEIVE_PROFILEDATA');
    this.props.getInput('peopleDetail');
  }
  render() {
    return (
      <Grid fluid>
        <h3 className="title">Characters</h3>
        <Row className="show-grid">
          {this.props.dataList.map((people, index) => {
            return (
              <Card className="card" key={index}>
                <CardContent>
                  <Typography variant="headline" component="h2">
                    {people.name}
                  </Typography>
                  <Typography className="secondary-text" color="textSecondary">
                    Gender : <span>{people.gender}</span>
                  </Typography>
                  <Typography className="secondary-text" color="textSecondary">
                    Height : <span>{people.height}</span>
                  </Typography>
                </CardContent>
                <CardActions>
                  <Button
                    size="small"
                    onClick={() => this.showData(people.url)}
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

ProfileCard.propTypes = {
  dataList: PropTypes.array
};

export default connect(
  null,
  { fetchDetails }
)(ProfileCard);
