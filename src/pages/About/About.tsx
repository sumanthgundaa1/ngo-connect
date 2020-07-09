import React, {Component} from 'react';
import {withRouter} from 'react-router-dom';
import {Box} from '@material-ui/core';
import {Grid, Row} from 'react-flexbox-grid';
import './About.scss';

class About extends Component<any, any> {
  constructor(props) {
    super(props);
    this.state = {};
  }

  /*
    TODO: make an API call to fetch volunteer opportunity data to pass down to VolunteerOpportunityCard component
    1. I recommend we use Apollo / GraphQL to hit our API endpoints, it's a seamless and smooth experience with React
  */

  render() {
    return (
      <Box component="div" className="volunteer-openings-page-container" display="block">
        <Grid fluid className="grid">
          <Row className="data-row" between="xs">
            About
          </Row>
        </Grid>
      </Box>
    );
  }
}

export default withRouter(About);
