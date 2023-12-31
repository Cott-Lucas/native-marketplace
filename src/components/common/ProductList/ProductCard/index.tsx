import { Alert } from 'react-native'
import React from 'react'
import {
  Container,
  InfoLikeContainer,
  LikeButton,
  LikeIcon,
  ProductImage,
  ProductInfoContainer,
  ProductPrice,
  ProductTitle,
  ProdutPriceTitleContainer,
  PublishedText,
  SellerInfoContainer,
  SellerName,
} from "./styled";
import { ProductType } from '..';

const like = require("../../../../../assets/icons/like.png");
const liked = require("../../../../../assets/icons/liked.png");

interface DataProps {
  data: ProductType
}

const ProductCard = ({data}: DataProps) => {
  return (
    <Container activeOpacity={0.85} onPress={()=>{
      Alert.alert("Navegação para o produto!")
    }}>
      <ProductImage
        source={{
          uri: data.productImage,
        }}
      />
      <ProductInfoContainer>
        <ProdutPriceTitleContainer>
          <ProductPrice>R$ {data.price}</ProductPrice>
          <ProductTitle numberOfLines={2}>{data.name}</ProductTitle>
        </ProdutPriceTitleContainer>
        <InfoLikeContainer>
          <SellerInfoContainer>
            <PublishedText>
              Publicado em: {data.publishedData} por:
            </PublishedText>
            <SellerName>{data.SellerName}</SellerName>
          </SellerInfoContainer>
          {!data.liked ? (
            <LikeButton onPress={()=>{
              Alert.alert('Você deu Like')
            }}>
              <LikeIcon source={like} />
            </LikeButton>
          ) : (
            <LikeButton>
              <LikeIcon source={liked} />
            </LikeButton>
          )}
        </InfoLikeContainer>
      </ProductInfoContainer>
    </Container>
  )
}

export default ProductCard