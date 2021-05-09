import React from "react";
import { Grid, Container } from 'semantic-ui-react'
import "semantic-ui-css/semantic.min.css";
import SearchBtn from '../components/SearchBtn'
import PageMessage from '../components/PageMessages'


const Home = () => {
    return (

        <Container>

            <Grid columns={2} padded style={{ height: '100vh' }}>
                <Grid.Column verticalAlign='middle'>

                    <Grid.Row>
                        <PageMessage />
                    </Grid.Row>
                    <Grid.Row padded style={{ height: '5vh' }}></Grid.Row>
                    <Grid.Row>
                        <SearchBtn />
                    </Grid.Row>

                </Grid.Column>

                <Grid.Column>

                </Grid.Column>
            </Grid>

        </Container>


    )
}

export default Home