/* eslint-disable max-len */
import React, { useState } from 'react'
import { Form, Input, Grid, Segment, Button, Container, } from 'semantic-ui-react'
import axios from "axios"
import './index.css'
import repairClass from '../DropDownOptions/repairClass';

function SignUpForm() {
    const [formObj, setFormObj] = useState();
    const handleInputChange = (e) => {
        const { name, value } = e.target;
        console.log("name = ", name);
        console.log("value = ", value);
        setFormObj({
            ...formObj,
            [name]: value
        });
    };
   
    const submit = () => {
        axios.post("http://localhost:3001/api/signup", formObj)
            .then((res) => {
                console.log("SUCCESS");
                // window.location.href = "/";
            })

        console.log("submitting")
    }
    console.log("state =", formObj)

    return (
        <Container textAlign='justified'>
            <Grid columms={2} divided>
                
                    <Grid.Column>
                        <Segment verticle textAlign='left'>

                            <Form >
                                <Form.Group widths='equal'>
                                    <Form.Field
                                        id='form-input-control-business-name'
                                        control={Input}
                                        label='Business Name'
                                        placeholder='Business Name'
                                        onChange={handleInputChange}
                                        name="businessName"
                                    />
                                    <Form.Field
                                        id='form-input-control-ABN'
                                        control={Input}
                                        label='ABN'
                                        placeholder='ABN'
                                        onChange={handleInputChange}
                                        name="lastName"
                                    />
                                    <Form.Field
                                        id='form-input-control-error-address'
                                        control={Input}
                                        label='Email'
                                        placeholder='joe@schmoe.com'
                                        onChange={handleInputChange}
                                        name="email"
                                    />

                                    <Form.Field
                                        id='form-input-control-error-phone'
                                        control={Input}
                                        label='Phone'
                                        placeholder=' xxxx xxxx'
                                        onChange={handleInputChange}
                                        name="phone"

                                />
                                
                                </Form.Group>
                                <repairClass></repairClass>
                                <Form.Field
                                    id='form-button-control-public'
                                    control={Button}
                                    content='Submit'
                                    onClick={submit}
                                />
                            </Form>

                        </Segment>
                    </Grid.Column>

            </Grid>




        </Container>
    )

}

export default SignUpForm
