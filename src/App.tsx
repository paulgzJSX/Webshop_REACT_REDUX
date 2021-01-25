import { Breadcrumb, Backdrop, Header, Items, Sidebar } from './components'
import { Container, GridWrapper } from './App.styles'

function App() {
  return (
    <Container>
      <Header />
      <Breadcrumb />
      <GridWrapper>
        <Sidebar />
        <Items />
      </GridWrapper>
      <Backdrop />
    </Container>
  )
}

export default App
