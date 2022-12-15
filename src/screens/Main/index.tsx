import { useState } from 'react'

import { Header } from '../../components/Header'
import { Categories, CategoryProps } from '../../components/Categories'
import { Menu, ProductProps } from '../../components/Menu'
import { Button } from '../../components/Button'
import { TableModal } from '../../components/TableModal'
import { Cart, CartItems } from '../../components/Cart'
import { Text } from '../../components/Text'
import { Empty } from '../../assets/Icons/Empty'
import { Loading } from '../../components/Loading'

import { CategoriesContainer, CenteredContainer, Container, Footer, FooterContainer, MenuContainer } from './style'

export const Main = () => {
  const [isLoading, setIsLoading] = useState(false)
  const [isModalVisible, setIsModalVisible] = useState(false)
  const [selectedTable, setSelectedTable] = useState('')
  const [products, setProducts] = useState<ProductProps[]>([])
  const [categories, setCategories] = useState<CategoryProps[]>([])
  const [cartItems, setCartItems] = useState<CartItems[]>([])

  const handleSaveTable = (tableNumber: string) => {
    setSelectedTable(tableNumber)
  }

  const handleResetOrder = () => {
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
          onCancelOrder={handleResetOrder}
        />
        {isLoading && (
          <Loading />
        )}
        {!isLoading && (
          <>
            <CategoriesContainer>
              <Categories categories={categories} />
            </CategoriesContainer>
            {products.length > 0
              ? <MenuContainer>
                <Menu
                  products={products}
                  onAddToCart={handleAddToCart}
                />
              </MenuContainer>

              : <CenteredContainer>
                <Empty />
                <Text color="#666" style={{ marginTop: 24 }}>
                  Nenhum produto foi encontrado
                </Text>
              </CenteredContainer>
            }

          </>
        )}
      </Container>
      <Footer>
        <FooterContainer>
          {!selectedTable && (
            <Button
              onPress={() => setIsModalVisible(true)}
              label="Novo Pedido"
              disabled={isLoading}
            />
          )}
          {selectedTable && (
            <Cart
              cartItems={cartItems}
              onAdd={handleAddToCart}
              onDecrement={handleDecrementCartItem}
              onConfirmOrder={handleResetOrder}
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
