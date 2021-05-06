import React from "react";
import { Divider, Grid, Image, Segment } from 'semantic-ui-react'

const Home = () => {
    return (
        <Segment>
            <Divider vertical>
                <Grid columns={2} relaxed="very">
                    This is home page 
                </Grid>
            </Divider>
        </Segment>
    )

}

export default Home