import React from "react";
import { Divider, Grid, Image, Search, Segment } from 'semantic-ui-react'
import "semantic-ui-css/semantic.min.css";

const Home = () => {
    return (
        <Segment>
          
                <Grid columns={2} relaxed="very">
                    <Grid.Column>
                    left side
                    {Search}

                    </Grid.Column>
                
                    <Grid.Column>
                    right side 
                    </Grid.Column>

                </Grid>
            <Divider vertical></Divider>
        </Segment>
    )

}

export default Home