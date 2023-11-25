import React from 'react'
import Header from "../../components/common/Header";
import { Container } from './styled'
import NavBar from '../../components/common/NavBar';
import ProductList from '../../components/common/ProductList';

const Home = () => {
  return (
    <Container>
      <Header/>
      <ProductList/>
      <NavBar/>
    </Container>
  )
}

export default Home