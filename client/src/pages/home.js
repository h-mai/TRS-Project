import React from "react";
import { Divider, Grid, Image, Segment, Button } from 'semantic-ui-react'
import "semantic-ui-css/semantic.min.css";
import SearchBtn from '../components/SearchBtn'
import PageMessage from '../components/PageMessages'


const Home = () => {
    return (
        <Segment>

            <Grid columns={2} padded style={{ height: '100vh' }}>

                <Grid.Column>
                    <PageMessage/>
                    <SearchBtn/>
                </Grid.Column>

                <Grid.Column>

                </Grid.Column>
            </Grid>
            <Divider vertical></Divider>
        </Segment>
    )
}

export default Home