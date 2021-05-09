/* eslint-disable max-len */
import React, { useState } from 'react'
import { Form, Input, Grid, Segment, Button, Container, } from 'semantic-ui-react'
import axios from "axios"
import './index.css'

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
                                        id='form-input-control-first-name'
                                        control={Input}
                                        label='First name'
                                        placeholder='First name'
                                        onChange={handleInputChange}
                                        name="firstName"
                                    />
                                    <Form.Field
                                        id='form-input-control-last-name'
                                        control={Input}
                                        label='Last name'
                                        placeholder='Last name'
                                        onChange={handleInputChange}
                                        name="lastName"
                                    />
                                    <Form.Field
                                        id='form-input-control-error-email'
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
                                        placeholder=' 04xx xxx xxx'
                                        onChange={handleInputChange}
                                        name="phone"

                                    />
                                </Form.Group>

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
