import React from "react";
import { Container, Grid, Image } from "semantic-ui-react";

import aboutPhoto1 from "../../assets/images/about-1.jpg";
import aboutPhoto2 from "../../assets/images/about-2.jpg";
import aboutPhoto3 from "../../assets/images/about-3.jpg";

function About() {
  return (
    <div className="body">
      <div className="masthead masthead-about">
        <div className="overlay-blue">
          <Container>
            <h1 className="masthead-title text-white">About Us</h1>
          </Container>
        </div>
      </div>

      <Container>
        <Grid>
          <Grid.Row>
            <Grid.Column>
              <h2>History</h2>
              <p>
                The Society of Hispanic Professional Engineers (SHPE) was
                founded in Los Angeles, California, in 1974 by a group of
                engineers employed by the city of Los Angeles. Their objective
                was to form a national organization of professional engineers to
                serve as role models in the Hispanic community.
              </p>
              <p>
                The concept of Networking was the key basis for the
                organization. SHPE quickly established two student chapters to
                begin the network that would grow to encompass the nation as
                well as reach countries outside the United States. Today, SHPE
                enjoys a strong but independent network of professional and
                student chapters throughout the nation.
              </p>
            </Grid.Column>
          </Grid.Row>
        </Grid>
        <Grid>
          <Grid.Row>
            <Grid.Column>
              <h2>UF Chapter</h2>
              <p>
                The Society of Hispanic Professional Engineers Chapter at the
                University of Florida (SHPE UF) was formerly known as the
                Hispanic Engineering Society. It was founded in the fall of 1982
                in an effort to provide Hispanic Engineers, Mathematicians, and
                Scientists with opportunities to develop as professionals while
                offering an amiable social environment.
              </p>
              <p>
                Since its inception it has prompted the recruitment, retention,
                and graduation of Hispanic students in the fields of science,
                technology, engineering, and mathematics. The society
                coordinates community outreach, corporate exposition meetings,
                academic development programs, and non-technical events. This is
                to ensure SHPE-UF members are presented with the opportunities
                necessary to succeed professionally, academically, and socially
                as Hispanic professionals.
              </p>
              <p>
                The University of Florida's Hispanic Engineering Society
                established a strong connection with the Society of Hispanic
                Professional Engineers, but it was not until the summer of 2001
                that the society underwent a name change in order to affirm its
                close relationship with SHPE National. Today, The University of
                Florida Chapter holds a strong and enriching relationship with
                SHPE National, which has helped increase membership in the
                society.
              </p>
              <p>
                In previous years, SHPE UF has experienced hardships attributed
                to low membership. However, recently, the new executive boards
                have found strategic ways to improve previous recruitment and
                retention initiatives by executing events such as the Goals for
                Tomorrow scholarship and soccer tournament, and the Green Day
                and Green Team events. This semester brought much success to the
                executive board and the chapter members, as well as to the
                society as a whole. The Executive board members were determined
                to execute numerous events and offer many involvement
                opportunities encouraging members to thrive as leaders.
              </p>
              <p>
                SHPE UF hosted the most successful BBQ with Industry yet, with
                20 companies and over 200 students attending the event. The
                chapter also held a ShadowSHPE day for high school students that
                received positive feedback from its participants, motivating the
                chapter to set plans to have a much larger event next year.
                Additionally, the chapter is in the process of establishing a
                mentorship program with Siemens and Kraft for its graduating
                members.
              </p>
              <p>
                The dedication and commitment shown by past and present members
                led to an increase in active participation of the chapter at a
                local, regional, and national level. This drive to further
                involvement in the society led to a strong presence from the
                chapter at National Conference and other events. With over 115
                members attending, The University of Florida had the largest
                number of members present at this year's conference. The
                determination of the chapter's leaders has also led to
                incredible involvement and retention of first-year students in
                the society.
              </p>
              <p>
                As a family, we take pride in the passion that is evident among
                our members. We have observed the success created by past
                leaders in our chapter, and are honored to have the opportunity
                to further their excellence.
              </p>
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Container>

      <Grid stackable>
        <Grid.Row centered columns={3}>
          <Grid.Column>
            <Image bordered src={aboutPhoto1} />
          </Grid.Column>
          <Grid.Column>
            <Image bordered src={aboutPhoto2} />
          </Grid.Column>
          <Grid.Column>
            <Image bordered src={aboutPhoto3} />
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </div>
  );
}

export default About;
