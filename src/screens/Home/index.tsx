import React from 'react'
import Header from "../../components/common/Header";
import { Container } from './styled'
import NavBar from '../../components/common/NavBar';

const Home = () => {
  return (
    <Container>
      <Header/>
      <NavBar/>
    </Container>
  )
}

export default Home