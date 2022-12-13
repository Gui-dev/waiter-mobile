import { ProductProps } from '../Menu'
import { Text } from '../Text'
import { Close } from '../../assets/Icons/Close'

import { CloseButton, Container, Footer, FooterContainer, Image, Ingredient, IngredientsContainer, ModalBody, ModalHeader, PriceContainer } from './style'
import { FlatList } from 'react-native'
import { formatCurrency } from '../../utils/formatCurrency'
import { Button } from '../Button'

type ProductModalProps = {
  visible: boolean
  product: ProductProps | null
  onClose: () => void
  onAddToCart: (product: ProductProps) => void
}

export const ProductModal = ({ visible, product, onClose, onAddToCart }: ProductModalProps) => {
  if (!product) {
    return null
  }

  const handleAddToCart = () => {
    onAddToCart(product)
    onClose()
  }

  return (
    <Container
      visible={visible}
      animationType="slide"
      presentationStyle="pageSheet"
      onRequestClose={onClose}
    >
      <Image
        source={{ uri: `http://192.168.0.106:3333/uploads/${product.imagePath}` }}
      >
        <CloseButton onPress={onClose}>
          <Close />
        </CloseButton>
      </Image>
      <ModalBody>
        <ModalHeader>
          <Text size={24} weight="600">{product.name}</Text>
          <Text color="#666" style={{ marginTop: 8 }}>{product.description}</Text>
        </ModalHeader>
        {product.ingredients.length > 0 && (
          <IngredientsContainer>
            <Text color="#666" weight="600">Ingredientes</Text>
            <FlatList
              data={product.ingredients}
              keyExtractor={item => item._id}
              renderItem={({ item }) => {
                return (
                  <Ingredient>
                    <Text style={{ marginRight: 16 }}>{item.icon}</Text>
                    <Text color="#666" size={14}>{item.name}</Text>
                  </Ingredient>
                )
              }}
              style={{ marginTop: 16 }}
              showsVerticalScrollIndicator={false}
              contentContainerStyle={{
                marginBottom: 16
              }}
            />
          </IngredientsContainer>
        )}
      </ModalBody>
      <Footer>
        <FooterContainer>
          <PriceContainer>
            <Text color="#666">Preço</Text>
            <Text size={20} weight="600">{formatCurrency(product.price)}</Text>
          </PriceContainer>
          <Button
            label="Adicionar ao pedido"
            onPress={handleAddToCart}
          />
        </FooterContainer>
      </Footer>
    </Container>
  )
}
