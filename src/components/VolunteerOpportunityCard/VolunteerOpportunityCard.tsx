import React from 'react';
import {makeStyles} from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import {Box} from '@material-ui/core';
import './VolunteerOpportunityCard.scss';
import {INGOSummary} from '../../common/interfaces';

const useStyles = makeStyles({
  root: {
    minWidth: 275,
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

interface IProps {
  ngoSummary: INGOSummary;
}

export default function VolunteerOpportunityCard(props: IProps) {
  const {ngoSummary} = props;
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardContent>
        <Typography className={classes.title} variant="h4" component="h1" gutterBottom>
          {ngoSummary.name}
        </Typography>
        <Box>
          <Typography variant="h6" component="h3" className={classes.paragraph}>
            <span className="bold-heading">About: </span> {ngoSummary.ngoDescription}
          </Typography>
        </Box>
        <Box>
          <Typography variant="h6" component="h3" className={classes.paragraph}>
            <span className="bold-heading">Support Needed: </span>{' '}
            {ngoSummary.supportDescription}
          </Typography>
        </Box>
        <Box>
          <Typography variant="h6" component="h3" className={classes.paragraph}>
            <span className="bold-heading">Beneficiaries: </span>{' '}
            {ngoSummary.beneficiaries}
          </Typography>
        </Box>

        <Box className={classes.paragraph}>
          <span className="bold-heading">Location(s): </span>
          {ngoSummary.locations &&
            ngoSummary.locations.length &&
            ngoSummary.locations.map((location, index) => {
              return (
                <span className={classes.span} key={index}>
                  {location}
                </span>
              );
            })}
        </Box>

        <Box className={classes.paragraph}>
          <span className="bold-heading">Skills: </span>
          {ngoSummary.skillsNeeded &&
            ngoSummary.skillsNeeded.length &&
            ngoSummary.skillsNeeded.map((skill, index) => {
              return (
                <span className={classes.span} key={index}>
                  {skill}
                </span>
              );
            })}
        </Box>
      </CardContent>
      <CardActions>
        {/* TODO: Evolve button styles and add functionality in future task / story */}
        <Button size="medium">Call / WhatsApp</Button>
        <Button size="medium">Email</Button>
      </CardActions>
    </Card>
  );
}
