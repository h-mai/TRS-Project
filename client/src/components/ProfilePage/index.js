
import React, { useEffect, useState } from 'react'
import {useParams} from "react-router-dom";
import { Grid, Image } from 'semantic-ui-react'
import UserProfileCard from '../UserProfileCard'
import axios from "axios";

const Profile = () => {

  const [isLoading, setIsLoading] = useState(true);
  const [user, setUser] = useState(null);
  let { id } = useParams();

  useEffect(() => {
    axios.get(`/api/user/${id}`)
      .then(({ data }) => {
        console.log("user = ", data);
        if (data) {
          setUser(data);
          setIsLoading(false);
        }
      })
  }, []);

  if (isLoading) {
    return null;
  }

  return (
    
    <Grid celled>
      <Grid.Row>
        <Grid.Column width={4}>
          <UserProfileCard />
        </Grid.Column>
        <Grid.Column width={8}>
          <Image src='https://react.semantic-ui.com/images/wireframe/centered-paragraph.png' />
        </Grid.Column>
        <Grid.Column width={4}>
          <Image src='https://react.semantic-ui.com/images/wireframe/image.png' />
        </Grid.Column>
      </Grid.Row>

      <Grid.Row>
        <Grid.Column width={8}>
          <Image src='https://react.semantic-ui.com/images/wireframe/image.png' />
        </Grid.Column>
        <Grid.Column width={8}>
          <Image src='https://react.semantic-ui.com/images/wireframe/paragraph.png' />
        </Grid.Column>
      </Grid.Row>
    </Grid>
  )
}

export default Profile