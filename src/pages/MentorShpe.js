import React from "react";
import {
  Container,
  Grid,
  
  Image
} from "semantic-ui-react";

import Title from "../components/FrontPage/Title";


function MentorSHPE(){
    return (
        <div className="body">
          <Title title="MentorSHPE"/>
          <Container>
            <div>
                <Grid>
                    <Grid.Row>
                        <Grid.Column>
                            <p>Basic page for mentor SHPE compoments</p>
                        </Grid.Column>
                    </Grid.Row>
                </Grid>
            </div>
          </Container>
        </div>
      );
}

export default MentorSHPE;
