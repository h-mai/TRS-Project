import React, { Component } from 'react'
import { Dropdown, } from 'semantic-ui-react'

const repairOptions = [
    { key: 'Restoration + Mending', text: 'Restoration + Mending', value: 'Restoration + Mending' },
    { key: 'Bags + Accessories', text: 'Bags + Accessories', value: 'Bags + Accessories' },
    { key: 'Apparel', text: 'Apparel', value: 'Apparel' },
    { key: 'Jewellery', text: 'Jewellery', value: 'Jewellery' },
    { key: 'Shoes + Footwear', text: 'Shoes + Footwear', value: 'Shoes + Footwear' },
    { key: 'Laundry + Dry Cleaning', text: 'Laundry + Dry Cleaning', value: 'Laundry + Dry Cleaning' },
]
function repairClass() {

    return (
        
    class RClass extends Component {
        state = {}

        handleChange = (e, { value }) => this.setState({ value })

        render() {
            const { value } = this.state
            return (
                <>

                    <Dropdown
                        onChange={this.handleChange}
                        closeOnBlur
                        options={repairOptions}
                        placeholder='What is your specialty?'
                        selection
                        value={value}
                    />
                </>
            )
        }
    }
    )
}

export default repairClass

