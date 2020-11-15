import React from 'react'
import Button from '../components/Button/Button'
import Card from '../components/Card/Card'
import Container from '../components/container/Container'
import FlexBox from '../components/FlexBox/FlexBox'
import Grid from '../components/Grid/Grid'
import GridItem from '../components/Grid/GridItem/GridItem'
import Hero from '../components/Hero/Hero'
import { Link } from 'react-router-dom'
import Avatar from '../components/Avatar/Avatar'
import Parralax from '../components/Parralax/Parralax'
const Home = () => {
  return (
    <Container>
      <Hero title='The Best In Catering' subText='Edam fondue mozzarella. Cheese slices cheese and wine chalk and cheese squirty cheese smelly cheese camembert de normandie emmental st. agur blue cheese.' imageUrl='imgs/meal1.png'>
        <Button color='primary' size='xl'><Link to='/pricing'>Menu <i className="fas fa-book-open" style={{ marginLeft: '16px'}}></i></Link></Button>
      </Hero>
      <div style={{ backgroundColor: '#4e3cf625', height: '5px' }} className='my-2' />
      <Grid cols='2' >
        <GridItem colStart={1} colEnd={2} rowStart={1} rowEnd={2}>
        <Card addClasses='p-2'>
            <Avatar addClasses='my-2' imgUrl='imgs/avatars/avatar5.jpg' size='lg' />
            <h3>5 Michaelin Stars</h3>
            <p style={{ textAlign: 'center', width: '50%'}}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia, excepturi!</p>
          </Card>
        </GridItem>
        <GridItem colStart={2} colEnd={3} rowStart={1} rowEnd={2}>
          <Card addClasses='p-1'>
            <FlexBox direction='column' justifyContent='justifyEvenly' alignItems='alignCenter'>
            <Avatar addClasses='my-2' imgUrl='imgs/avatars/avatar2.png' size='lg' />
            <h3>Professional Standards</h3>
            <p style={{ textAlign: 'center', width: '50%' }}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia, excepturi!</p>
            </FlexBox>
          </Card>
        </GridItem>
      </Grid>
      <Parralax imageUrl='./imgs/bo-leaf.png' width='100%' height='800px' addClasses=''>
        <FlexBox direction='column' alignItems='alignCenter' justifyContent='justifyCenter' >
          <Card color='light' addClasses='p-1'>
            <h4 style={{ color: 'black', fontSize: '32px', fontWeight: 200 }}>Where The Magic Happens</h4>
          </Card>
        </FlexBox>
      </Parralax>
    </Container>
  )
}

export default Home
