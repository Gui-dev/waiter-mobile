import { FlatList, TouchableOpacity } from 'react-native'
import { Text } from '../Text'
import { Actions, Image, Item, Product, ProductDetails, QuantityContainer, Summary, TotalContainer } from './style'

import { ProductProps } from '../Menu'
import { formatCurrency } from '../../utils/formatCurrency'
import { PlusCircle } from '../../assets/Icons/PlusCircle'
import { MinusCircle } from '../../assets/Icons/MinusCircle'
import { Button } from '../Button'

export type CartItems = {
  product: ProductProps
  quantity: number
}

type CartProps = {
  cartItems: CartItems[]
}

export const Cart = ({ cartItems }: CartProps) => {
  return (
    <>
      <FlatList
        data={cartItems}
        keyExtractor={item => item.product._id}
        renderItem={({ item }) => {
          return (
            <Item>
              <Product>
                <Image
                  source={{ uri: `http://192.168.0.106:3333/uploads/${item.product.imagePath}` }}
                />
                <QuantityContainer>
                  <Text color="#666" size={14}>{item.quantity}x</Text>
                </QuantityContainer>
                <ProductDetails>
                  <Text size={14} weight="600">{item.product.name}</Text>
                  <Text color="#666" size={14} style={{ marginTop: 4 }}>
                    {formatCurrency(item.product.price)}
                  </Text>
                </ProductDetails>
              </Product>
              <Actions>
                <TouchableOpacity style={{ marginRight: 24 }}>
                  <PlusCircle />
                </TouchableOpacity>
                <TouchableOpacity>
                  <MinusCircle />
                </TouchableOpacity>
              </Actions>
            </Item>
          )
        }}
        style={{ maxHeight: 150 }}
        contentContainerStyle={{
          paddingBottom: 30
        }}
        showsVerticalScrollIndicator={false}
      />
      <Summary>
        <TotalContainer>
          <Text color="#666">Total</Text>
          <Text size={20} weight="600">R$120,00</Text>
        </TotalContainer>
        <Button label="Confirmar pedido" />
      </Summary>
    </>
  )
}
