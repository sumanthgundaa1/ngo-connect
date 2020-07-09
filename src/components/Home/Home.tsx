import React from 'react';
import {makeStyles} from '@material-ui/core/styles';
import {withRouter} from 'react-router-dom';
import Button from '@material-ui/core/Button';
import {Typography, Box, Link} from '@material-ui/core';
import {Grid, Row} from 'react-flexbox-grid';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import './Home.scss';

const useStyles = makeStyles({
  root: {
    width: 350,
    height: '100%',
  },
  title: {
    fontSize: '24px',
    fontWeight: 500,
  },
  paragraph: {
    fontSize: '16px',
    fontWeight: 100,
    marginBottom: '10px',
  },
  span: {
    borderRight: '1px solid black',
    paddingLeft: '5px',
    paddingRight: '5px',
    '&:last-of-type': {
      borderRight: 'none',
    },
  },
  pos: {
    marginBottom: 12,
  },
});

function Home() {
  const classes = useStyles();
  return (
    <Grid className="home-main-container">
      <Row className="home-row-container">
        <Box>
          <Typography variant="h3" className="home-content-heading">
            Connecting NGOs and initiatives in India with individuals who are curious and
            passionate about volunteering
          </Typography>
        </Box>
      </Row>
      <Row className="home-row-container">
        <Box className="home-button-flex-container" display="flex" width="100%">
          <Card className={classes.root}>
            <CardContent>
              <Typography className="home-content-text">
                Interested in volunteering, but don't know where to start? Or, are you
                having trouble finding volunteering opportunities which align with your
                strengths and interests? Check out current, catered opportunities
                available by clicking the button below
              </Typography>
            </CardContent>
            <CardActions>
              <Button variant="contained" color="primary">
                <Link className="home-action-link" href="#volunteer/openings">
                  Volunteering Opportunities
                </Link>
              </Button>
            </CardActions>
          </Card>
          <Card className={classes.root}>
            <CardContent>
              <Typography className="home-content-text">
                As an NGO or individual / group initiative, are you in need of volunteers
                to help support your mission? Have you had trouble in the past to get the
                word out for volunteering opportunities? Please click the button below for
                more information
              </Typography>
            </CardContent>
            <CardActions>
              <Button variant="contained" color="primary">
                {/* TODO: change href to point to external Google form */}
                <Link className="home-action-link" href="#volunteer/openings">
                  Need help finding volunteers
                </Link>
              </Button>
            </CardActions>
          </Card>
        </Box>
      </Row>
    </Grid>
  );
}

export default withRouter(Home);
