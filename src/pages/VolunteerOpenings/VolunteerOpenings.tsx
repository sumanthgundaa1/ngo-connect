import React, {Component} from 'react';
import {withRouter} from 'react-router-dom';
import {Box} from '@material-ui/core';
import {Grid, Row} from 'react-flexbox-grid';
import VolunteerOpportunityCard from '../../components/VolunteerOpportunityCard/VolunteerOpportunityCard';
import './VolunteerOpenings.scss';
import {INGOSummary} from '../../common/interfaces';

// TODO: Remove mock data below once real data exists and can be fetched from API
const mockNgoSummary: INGOSummary[] = [
  {
    name: 'Akshay Patra',
    ngoDescription:
      'Running mid-day meal programmes and serving school lunches to over 1.8 million children across 12 states and 2 union territories',
    supportNeeded: 'Online Fundraising',
    supportDescription:
      'Register yourself as an online fund raising volunteer. Fund raised will go to providing mid-day meal to the school children. Dedicated fundraisers are acknowledged for their efforts on select collaterals of Akshaya Patra.',
    beneficiaries: 'School Children',
    locations: ['Remote / Virtual', 'Hyderabad'],
    skillsNeeded: ['Public Relations', 'Fundraising experience', 'Marketing'],
    contactInformation: {
      email: 'anil.rs@akshayapatra.org',
      phone: '080 30143400',
    },
  },
  {
    name: 'Bhumi India',
    ngoDescription:
      'The organisation provides youngsters a platform to serve the society and bridges the gap between the educated and the uneducated',
    supportNeeded: 'Content generation for education',
    supportDescription:
      'Our volunteers educate and mentor children from orphanages, slum and village community centres across the country to give them a better future, which will benefit them as well as our country.',
    beneficiaries: 'Young adults and children',
    locations: ['Remote / Virtual', 'Bombay', 'Delhi'],
    skillsNeeded: ['Microsoft Office skills'],
    contactInformation: {
      email: 'contact@bhumi.ngo',
    },
  },
  {
    name: 'Bhumi India',
    ngoDescription:
      'The organisation provides youngsters a platform to serve the society and bridges the gap between the educated and the uneducated',
    supportNeeded: 'Content generation for education',
    supportDescription:
      'Our volunteers educate and mentor children from orphanages, slum and village community centres across the country to give them a better future, which will benefit them as well as our country.',
    beneficiaries: 'Young adults and children',
    locations: ['Remote / Virtual', 'Bombay', 'Delhi'],
    skillsNeeded: ['Microsoft Office skills'],
    contactInformation: {
      email: 'contact@bhumi.ngo',
    },
  },
  {
    name: 'Bhumi India',
    ngoDescription:
      'The organisation provides youngsters a platform to serve the society and bridges the gap between the educated and the uneducated',
    supportNeeded: 'Content generation for education',
    supportDescription:
      'Our volunteers educate and mentor children from orphanages, slum and village community centres across the country to give them a better future, which will benefit them as well as our country.',
    beneficiaries: 'Young adults and children',
    locations: ['Remote / Virtual', 'Bombay', 'Delhi'],
    skillsNeeded: ['Microsoft Office skills'],
    contactInformation: {
      email: 'contact@bhumi.ngo',
    },
  },
];

class VolunteerOpenings extends Component<any, any> {
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
            {mockNgoSummary && mockNgoSummary.length && (
              <Box className="volunteer-opening-flex-container">
                {mockNgoSummary.map((summaryItem, index) => {
                  return (
                    <div className="volunteer-opening-flex-item" key={index}>
                      <VolunteerOpportunityCard ngoSummary={summaryItem} />
                    </div>
                  );
                })}
              </Box>
            )}
          </Row>
        </Grid>
      </Box>
    );
  }
}

export default withRouter(VolunteerOpenings);
