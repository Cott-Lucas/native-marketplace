import React from "react";
import {
  AdCard,
  Container,
  Image,
  InfoContainer,
  InfoIconContainer,
  NoAds,
  Price,
  PriceTitleContainer,
  PublishedText,
  Title,
  TotalAds,
  IconButton,
  Icon,
} from "./styled";

const trashIcon = require("../../../../assets/icons/trash.png");
const favoriteIcon = require("../../../../assets/icons/like.png");


interface Product {
  id: string;
  productImage: string;
  price: string;
  title: string;
  publishedData: string;
}

interface productProps {
  product: Product[];
  seller: boolean;
}

const UserAds = ({ product, seller }: productProps) => {
  return (
    <Container>
      <TotalAds>Você tem {product?.length} anúncios</TotalAds>

      {product.length > 0 ? (
        product.map((product) => (
          <AdCard key={product.id} activeOpacity={0.85} onPress={() => {}}>
            <Image
              source={{
                uri: product.productImage,
              }}
            />
            <InfoContainer>
              <PriceTitleContainer>
                <Price>R$ {product.price}</Price>
                <Title numberOfLines={2}>{product.title}</Title>
              </PriceTitleContainer>

              {!seller ? (
                <InfoIconContainer>
                  <PublishedText>{product.publishedData}</PublishedText>
                  <IconButton activeOpacity={0.85} onPress={() => {}}>
                    <Icon source={trashIcon} />
                  </IconButton>
                </InfoIconContainer>
              ) : (
                <InfoIconContainer>
                  <PublishedText>{product.publishedData}</PublishedText>
                  <IconButton activeOpacity={0.85} onPress={() => {}}>
                    <Icon source={favoriteIcon} />
                  </IconButton>
                </InfoIconContainer>
              )}
            </InfoContainer>
          </AdCard>
        ))
      ) : (
        <NoAds>Por enquanto você não tem anúncios</NoAds>
      )}
    </Container>
  );
};

export default UserAds;
