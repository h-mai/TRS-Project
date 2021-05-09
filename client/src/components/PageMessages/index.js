import React from 'react'
import { Image } from 'semantic-ui-react'
import renew from '../../images/renew.png'
import repair from '../../images/repair.png'
import repurpose from '../../images/repurpose.png'

const HomeMessage = () => {

    return (
        <div>
        <Image src={renew} />
        <Image src={repair} />
        <Image src={repurpose} />
        </div>       
    )
     }

        
export default  HomeMessage
