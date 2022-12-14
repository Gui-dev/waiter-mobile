import { useState } from 'react'

import { Header } from '../../components/Header'
import { Categories } from '../../components/Categories'
import { Menu, ProductProps } from '../../components/Menu'
import { Button } from '../../components/Button'
import { TableModal } from '../../components/TableModal'
import { Cart, CartItems } from '../../components/Cart'

import { CategoriesContainer, Container, Footer, FooterContainer, MenuContainer } from './style'

import { categories } from './../../mocks/categories'
import { products } from './../../mocks/products'

export const Main = () => {
  const [isModalVisible, setIsModalVisible] = useState(false)
  const [selectedTable, setSelectedTable] = useState('')
  const [cartItems, setCartItems] = useState<CartItems[]>([])

  const handleSaveTable = (tableNumber: string) => {
    setSelectedTable(tableNumber)
  }

  const handleCancelOrder = () => {
    setSelectedTable('')
    setCartItems([])
  }

  const handleAddToCart = (product: ProductProps) => {
    if (!selectedTable) {
      setIsModalVisible(true)
    }
    setCartItems((prevState) => {
      const itemIndex = prevState.findIndex(cartItem => cartItem.product._id === product._id)
      if (itemIndex < 0) {
        return prevState.concat({ quantity: 1, product })
      }
      const newCartItem = [...prevState]
      const item = newCartItem[itemIndex]
      newCartItem[itemIndex] = {
        ...item,
        quantity: item.quantity + 1
      }
      return newCartItem
    })
  }

  const handleDecrementCartItem = (product: ProductProps) => {
    setCartItems((prevState) => {
      const itemIndex = prevState.findIndex(cartItem => cartItem.product._id === product._id)
      const item = prevState[itemIndex]
      const newCartItem = [...prevState]
      if (item.quantity === 1) {
        newCartItem.splice(itemIndex, 1)
        return newCartItem
      }
      newCartItem[itemIndex] = {
        ...item,
        quantity: item.quantity - 1
      }
      return newCartItem
    })
  }

  return (
    <>
      <Container>
        <Header
          table={selectedTable}
          onCancelOrder={handleCancelOrder}
        />
        <CategoriesContainer>
          <Categories categories={categories} />
        </CategoriesContainer>
        <MenuContainer>
          <Menu
            products={products}
            onAddToCart={handleAddToCart}
          />
        </MenuContainer>
      </Container>
      <Footer>
        <FooterContainer>
          {!selectedTable && (
            <Button
              onPress={() => setIsModalVisible(true)}
              label="Novo Pedido"
            />
          )}
          {selectedTable && (
            <Cart
              cartItems={cartItems}
              onAdd={handleAddToCart}
              onDecrement={handleDecrementCartItem}
            />
          )}

        </FooterContainer>
      </Footer>
      <TableModal
        visible={isModalVisible}
        onCloseModal={setIsModalVisible}
        onSave={handleSaveTable}
      />
    </>
  )
}
