import React from 'react'
import { Back, BackContainer } from './styled'
import { useNavigation } from '@react-navigation/native'
import { PropsStack } from '../../../routes'

const back = require('../../../../assets/icons/arrow-left.png')

type props={
  marginLeft: number;
}

const BackIcon = ({marginLeft}: props) => {

  const navigation = useNavigation<PropsStack>()

  return (
    <BackContainer onPress={()=> {
      navigation.goBack();
    }}>
      <Back marginLeft={marginLeft} source={back}/>
    </BackContainer>
  )
}

export default BackIcon