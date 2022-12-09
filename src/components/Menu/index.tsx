import { FlatList } from 'react-native'
import { PlusCircle } from '../../assets/Icons/PlusCircle'

import { formatCurrency } from '../../utils/formatCurrency'

import { Text } from '../Text'
import { AddToCartButton, Image, Product, ProductDetails, Separator } from './style'

type ProductProps = {
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
}

export const Menu = ({ products }: MenuProps) => {
  return (
    <FlatList
      data={products}
      keyExtractor={item => item._id}
      renderItem={({ item }) => {
        return (
          <Product>
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
            <AddToCartButton onPress={() => alert('Pedir')}>
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
        paddingHorizontal: 24
      }}
    />
  )
}
