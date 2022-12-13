import { FlatList } from 'react-native'

import { PlusCircle } from '../../assets/Icons/PlusCircle'
import { ProductModal } from '../ProductModal'

import { formatCurrency } from '../../utils/formatCurrency'

import { Text } from '../Text'
import { AddToCartButton, Image, Product, ProductDetails, Separator } from './style'
import { useState } from 'react'

export type ProductProps = {
  _id: string
  name: string
  description: string
  imagePath: string
  price: number
  ingredients: Array<{
    name: string
    icon: string
    _id: string
  }>
}

type MenuProps = {
  products: ProductProps[]
  onAddToCart: (product: ProductProps) => void
}

export const Menu = ({ products, onAddToCart }: MenuProps) => {
  const [isProductModalVisible, setIsProductModalVisible] = useState(false)
  const [selectedProduct, setSelectedProduct] = useState<ProductProps | null>(null)

  const handleOpenModal = (product: ProductProps) => {
    setIsProductModalVisible(true)
    setSelectedProduct(product)
  }

  return (
    <>
      <ProductModal
        visible={isProductModalVisible}
        product={selectedProduct}
        onClose={() => setIsProductModalVisible(false)}
        onAddToCart={onAddToCart}
      />
      <FlatList
        data={products}
        keyExtractor={item => item._id}
        renderItem={({ item }) => {
          return (
            <Product onPress={() => handleOpenModal(item)}>
              <Image source={{ uri: `http://192.168.0.106:3333/uploads/${item.imagePath}` }} />
              <ProductDetails>
                <Text weight="600">
                  {item.name}
                </Text>
                <Text color="#666" size={14} style={{ marginVertical: 8 }}>
                  {item.description}
                </Text>
                <Text color="#333" size={14} weight="600">
                  {formatCurrency(item.price)}
                </Text>
              </ProductDetails>
              <AddToCartButton onPress={() => onAddToCart(item)}>
                <PlusCircle />
              </AddToCartButton>
            </Product>
          )
        }}
        ItemSeparatorComponent={() => <Separator />}
        style={{
          marginTop: 32
        }}
        contentContainerStyle={{
          paddingHorizontal: 24,
          paddingBottom: 60
        }}
      />
    </>
  )
}
