import React from 'react'
import { Grid, Image, Button } from 'semantic-ui-react'
import bags from '../images/bags.png'
import clothing from '../images/clothing.png'
import tailor from '../images/tailor.png'
import ring from '../images/ring.png'
import laundry from '../images/laundry.png'
import shoes from '../images/shoes.png'

const categoryGrid = () => (
  <Grid columns={3} divided paddded style={{ height:'100vh' }}>

    <Grid.Row verticalAlign='middle'>
      <Grid.Column >
       
        <Grid.Row paddded style={{ height: "5vh" }}>
          <Image src={clothing} size='small' centered />
            
          <Button attached='bottom' >CLOTHING + APPAREL</Button>
        </Grid.Row>
        

      </Grid.Column>

      <Grid.Column>
       
        <Grid.Row paddded style={{ height: "5vh" }}>
          <Image src={bags} size='small' centered />
          <Button attached='bottom'>BAGS + ACCESSORIES</Button>
        </Grid.Row>
        
      </Grid.Column>

      <Grid.Column>
        
        <Grid.Row paddded style={{ height: "5vh" }}>
        <Image src={shoes} size='small' centered />
        <Button attached='bottom'>FOOTWEAR</Button>
        </Grid.Row>
   
      </Grid.Column>

    </Grid.Row>

    <Grid.Row verticalAlign='middle' centered>
      <Grid.Column >

        <Grid.Row paddded style={{ height: "5vh" }}>
          <Image src={ring} size='small' centered />
          <Button attached='bottom'>JEWELLERY</Button>
        </Grid.Row>

      </Grid.Column>
      <Grid.Column>

        <Grid.Row paddded style={{ height: "5vh" }}>
          <Image src={tailor} size='small' centered />
          <Button attached='bottom'>TAILORING</Button>
        </Grid.Row>

      </Grid.Column>
      <Grid.Column >

        <Grid.Row paddded style={{ height: "5vh" }}>
          <Image src={laundry} size='small' centered />
          <Button attached='bottom'>CLEANING + RESTORATION</Button>
        </Grid.Row>
        
      </Grid.Column>

    </Grid.Row>
  </Grid>
)

export default categoryGrid