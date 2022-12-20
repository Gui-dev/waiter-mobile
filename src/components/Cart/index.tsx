import { useState } from 'react'
import { FlatList, TouchableOpacity } from 'react-native'

import { Text } from '../Text'
import { ProductProps } from '../Menu'
import { formatCurrency } from '../../utils/formatCurrency'
import { PlusCircle } from '../../assets/Icons/PlusCircle'
import { MinusCircle } from '../../assets/Icons/MinusCircle'
import { Button } from '../Button'
import { OrderConfirmedModal } from '../OrderConfirmedModal'

import { api } from '../../services/api'

import { Actions, Image, Item, Product, ProductDetails, QuantityContainer, Summary, TotalContainer } from './style'

export type CartItems = {
  product: ProductProps
  quantity: number
}

type CartProps = {
  cartItems: CartItems[]
  selectedTable: string
  onAdd: (product: ProductProps) => void
  onDecrement: (product: ProductProps) => void
  onConfirmOrder: () => void
}

export const Cart = ({ cartItems, selectedTable, onAdd, onDecrement, onConfirmOrder }: CartProps) => {
  const [isLoading, setIsLoading] = useState(false)
  const [isModalVisible, setIsModalVisible] = useState(false)
  const total = cartItems.reduce((totalSum, item) => {
    return totalSum + item.quantity * item.product.price
  }, 0)

  const handleConfirmOrder = async () => {
    try {
      setIsLoading(true)
      const products = cartItems.map(cartItem => {
        return {
          product: cartItem.product._id,
          quantity: cartItem.quantity
        }
      })
      await api.post('/orders', {
        table: selectedTable,
        products
      })
      setIsModalVisible(true)
    } catch (error) {
      console.log(error)
    } finally {
      setIsLoading(false)
    }
  }

  const handleOk = () => {
    setIsModalVisible(false)
    onConfirmOrder()
  }

  return (
    <>
      <OrderConfirmedModal
        visible={isModalVisible}
        onOk={handleOk}
      />
      {cartItems.length > 0 && (
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
                  <TouchableOpacity
                    style={{ marginRight: 24 }}
                    onPress={() => onAdd(item.product)}
                  >
                    <PlusCircle />
                  </TouchableOpacity>
                  <TouchableOpacity
                    onPress={() => onDecrement(item.product)}
                  >
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
      )}
      <Summary>
        <TotalContainer>
          {
            cartItems.length > 0
              ? <>
                <Text color="#666">Total</Text>
                <Text size={20} weight="600">{formatCurrency(total)}</Text>
              </>
              : <Text color="#999">Seu carrinho{'\n'}está vazio</Text>
          }
        </TotalContainer>
        <Button
          label="Confirmar pedido"
          disabled={cartItems.length === 0}
          onPress={handleConfirmOrder}
          loading={isLoading}
        />
      </Summary>
    </>
  )
}
