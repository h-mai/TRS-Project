import React from 'react'
import { Grid, Image, Segment } from 'semantic-ui-react'
import renew from '../../images/renew.png'
import repair from '../../images/repair.png'
import repurpose from '../../images/repurpose.png'

const HomeMessage = () => {

    return (
        
            <Grid >

                <Grid.Row verticalAlign='top'>
                    <Image src={renew} />
                </Grid.Row>
                <Grid.Row verticalAlign='center' >
                    <Image src={repair} />
                </Grid.Row>
                <Grid.Row verticalAlign='bottom' >
                    <Image src={repurpose} />
                </Grid.Row>

            </Grid>
        
    )
}


export default HomeMessage
