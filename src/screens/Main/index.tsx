import { useState } from 'react'

import { Header } from '../../components/Header'
import { Categories } from '../../components/Categories'
import { Menu } from '../../components/Menu'
import { Button } from '../../components/Button'
import { TableModal } from '../../components/TableModal'
import { Cart, CartItems } from '../../components/Cart'

import { CategoriesContainer, Container, Footer, FooterContainer, MenuContainer } from './style'

import { categories } from './../../mocks/categories'
import { products } from './../../mocks/products'

export const Main = () => {
  const [isModalVisible, setIsModalVisible] = useState(false)
  const [selectedTable, setSelectedTable] = useState('')
  const [cartItems, setCartItems] = useState<CartItems[]>([
    {
      quantity: 2,
      product: products[0]
    },
    {
      quantity: 4,
      product: products[1]
    }
  ])

  const handleSaveTable = (tableNumber: string) => {
    setSelectedTable(tableNumber)
  }

  const handleCancelOrder = () => {
    setSelectedTable('')
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
          <Menu products={products} />
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
            <Cart cartItems={cartItems} />
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
