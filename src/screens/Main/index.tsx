import { Header } from '../../components/Header'

import { CategoriesContainer, Container, Footer, FooterContainer, MenuContainer } from './style'

export const Main = () => {
  return (
    <>
      <Container>
        <Header />
        <CategoriesContainer></CategoriesContainer>
        <MenuContainer></MenuContainer>
      </Container>
      <Footer>
        <FooterContainer>

        </FooterContainer>
      </Footer>
    </>
  )
}
