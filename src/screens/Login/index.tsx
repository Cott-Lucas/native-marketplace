
import React from 'react'
import BackIcon from '../../components/common/BackIcon'
import { Container, Logo } from './styled'

const logo = require('../../../assets/images/logo.png')

const Login = () => {
  return (
    <Container>
      <BackIcon marginLeft={30}/>
      <Logo source={logo}/>
    </Container>
  )
}

export default Login