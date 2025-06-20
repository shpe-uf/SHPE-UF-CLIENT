import React, { useState } from 'react';
import { Modal, Button, Form, Grid } from 'semantic-ui-react';

function CorporationFilter(props) {

  const [academia, setAcademia] = useState(false);
  const [govContractor, setGovContractor] = useState(false);
  const [nonProfit, setNonProfit] = useState(false);
  const [visaSponsor, setVisaSponsor] = useState(false);
  const [shpeSponsor, setShpeSponsor] = useState(false);
  const [industryPartnership, setIndustryPartnership] = useState(false);
  const [fallBBQ, setFallBBQ] = useState(false);
  const [springBBQ, setSpringBBQ] = useState(false);
  const [nationalConvention, setNationalConvention] = useState(false);
  const [recruitmentDay, setrecruitmentDay] = useState(false);

  function sendFilter() {
    props.getCorporations({
      academia: academia,
      govContractor: govContractor,
      nonProfit: nonProfit,
      visaSponsor: visaSponsor,
      shpeSponsor: shpeSponsor,
      industryPartnership: industryPartnership,
      fallBBQ: fallBBQ,
      springBBQ: springBBQ,
      nationalConvention: nationalConvention,
      recruitmentDay: recruitmentDay,
    })
    props.close();
  }

  return (
    <Modal open={props.open} size='tiny' centered>
      <Modal.Header>
        Filters
      </Modal.Header>
      <Grid>
        <Grid.Column>
          <Form>
            <Form.Radio
              toggle
              label='Academia'
              onChange={(_,data) => setAcademia(data.checked)}
              defaultChecked={props.filter.academia}
            />
            <Form.Radio
              toggle
              label='Government Department/Contractor'
              onChange={(_,data) => setGovContractor(data.checked)}
              defaultChecked={props.filter.govContractor}
            />
            <Form.Radio
              toggle
              label='Non-profit Organization'
              onChange={(_,data) => setNonProfit(data.checked)}
              defaultChecked={props.filter.nonProfit}
            />
            <Form.Radio
              toggle
              label='Providing Visa Sponsorship'
              onChange={(_,data) => setVisaSponsor(data.checked)}
              defaultChecked={props.filter.visaSponsor}
            />
            <Form.Radio
              toggle
              label='SHPE UF Sponsor'
              onChange={(_,data) => setShpeSponsor(data.checked)}
              defaultChecked={props.filter.shpeSponsor}
            />
            <Form.Radio
              toggle
              label='Industry Partnership Council'
              onChange={(_,data) => setIndustryPartnership(data.checked)}
              defaultChecked={props.filter.industryPartnership}
            />
            <Form.Radio
              toggle
              label='Attending Fall BBQ with Industry'
              onChange={(_,data) => setFallBBQ(data.checked)}
              defaultChecked={props.filter.fallBBQ}
            />
            <Form.Radio
              toggle
              label='Attending Spring BBQ with Industry'
              onChange={(_,data) => setSpringBBQ(data.checked)}
              defaultChecked={props.filter.springBBQ}
            />
            <Form.Radio
              toggle
              label='Attending SHPE National Convention'
              onChange={(_,data) => setNationalConvention(data.checked)}
              defaultChecked={props.filter.nationalConvention}
            />
            <Form.Radio
              toggle
              label='Hosting Recruitment Day'
              onChange={(_,data) => setrecruitmentDay(data.checked)}
              defaultChecked={props.filter.recruitmentDay}
            />
          </Form>
        </Grid.Column>
      </Grid>
      <Modal.Actions>
        <Button
          color='red'
          onClick={() => props.close()}
          floated='left'
        >
          Cancel
        </Button>
        <Button
          onClick={() => sendFilter()}
        >
          Apply
        </Button>
      </Modal.Actions>
    </Modal>
  )
}

export default CorporationFilter;