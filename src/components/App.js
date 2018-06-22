import React, { Component } from 'react';
import { connect } from 'react-redux';

import Listing from './Listing/ListingType';
import DetailContainer from './DetailContainer/DetailContainer';

import { fetchPeoples, fetchMovies, fetchPlanets } from '../actions';

import {
  Button,
  AppBar,
  Toolbar,
  Drawer,
  List,
  ListItem
} from '@material-ui/core';

import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      page: 1,
      moviePage: 1,
      type: 'people',
      detailType: 'peopleDetail'
    };

    this.next = this.next.bind(this);
    this.previous = this.previous.bind(this);
    this.getMovies = this.getMovies.bind(this);
    this.getPeoples = this.getPeoples.bind(this);
    this.getPlanets = this.getPlanets.bind(this);
    this.handleType = this.handleType.bind(this);
  }

  handleType(type) {
    this.setState({ detailType: type });
  }

  next() {
    if (this.props.allData.next) {
      this.setState({ page: this.state.page + 1 }, () => {
        this.props.fetchPeoples(this.state.page);
      });
    }
  }
  previous() {
    if (this.props.allData.previous) {
      this.setState({ page: this.state.page - 1 }, () => {
        this.props.fetchPeoples(this.state.page);
      });
    }
  }

  getMovies() {
    this.setState({ type: 'movies' }, () => {
      this.props.fetchMovies(this.state.moviePage);
    });
  }
  getPeoples() {
    this.setState({ type: 'people' }, () => {
      this.props.fetchPeoples(this.state.page);
    });
  }
  getPlanets() {
    this.setState({ type: 'planets' }, () => {
      this.props.fetchPlanets(this.state.page);
    });
  }
  render() {
    if (this.props.allData.results) {
      return (
        <div className="App">
          <AppBar position="absolute" className="app-bar">
            <Toolbar>
              <h1 className="App-title">Welcome to Star Wars</h1>
            </Toolbar>
          </AppBar>
          <Drawer variant="permanent" className="drawer-div">
            <List component="nav">
              <ListItem button onClick={this.getPeoples}>
                <span>Characters</span>
              </ListItem>
              <ListItem button onClick={this.getMovies}>
                <span>Movies</span>
              </ListItem>
              <ListItem button onClick={this.getPlanets}>
                <span>Planets</span>
              </ListItem>
            </List>
          </Drawer>
          <main>
            <header className="App-header">
              <Listing
                className="listing-div"
                type={this.state.type}
                data={this.props.allData.results}
                getTypeForDetail={this.handleType}
              />
              {this.props.allData.previous ? (
                <Button
                  variant="outlined"
                  size="small"
                  color="primary"
                  onClick={this.previous}
                >
                  Previous
                </Button>
              ) : null}
              &nbsp;
              {this.props.allData.next ? (
                <Button
                  variant="outlined"
                  size="small"
                  color="primary"
                  onClick={this.next}
                >
                  Next
                </Button>
              ) : null}
            </header>
            <div className="body-detail">
              <DetailContainer
                type={this.state.detailType}
                detailData={this.props.detailData}
              />
            </div>
          </main>
        </div>
      );
    } else {
      return null;
    }
  }
}

function mapStateToProps(state) {
  return state;
}

export default connect(
  mapStateToProps,
  { fetchPeoples, fetchMovies, fetchPlanets }
)(App);
