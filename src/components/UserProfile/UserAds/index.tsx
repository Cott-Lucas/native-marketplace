import React from "react";
import {
  AdCard,
  Container,
  Image,
  InfoContainer,
  InfoTrashContainer,
  NoAds,
  Price,
  PriceTitleContainer,
  PublishedText,
  Title,
  TotalAds,
  TrashButton,
  TrashIcon,
} from "./styled";

const trash = require("../../../../assets/icons/trash.png");

interface Product {
  id: string;
  productImage: string;
  price: string;
  title: string;
  publishedData: string;
}

interface productProps {
  product: Product[];
}

const UserAds = ({ product }: productProps) => {
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

              <InfoTrashContainer>
                <PublishedText>{product.publishedData}</PublishedText>
                <TrashButton activeOpacity={0.85} onPress={() => {}}>
                  <TrashIcon source={trash} />
                </TrashButton>
              </InfoTrashContainer>
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
