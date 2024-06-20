import Header from './components/Header';
import styled from 'styled-components';
import Search from './components/Search';
import BooksList from './components/BooksList/BooksList';
import CardRecomendado from './components/CardRecomendado/CardRecomendado';

const HeaderContainer = styled.div`
  width: 100vw;
  height: 100vh;
  background-image: linear-gradient(90deg, #160052 35%, #333289);
`

function App() {
  return (
    <HeaderContainer>
      <Header />
      <Search />
      <BooksList />
      <CardRecomendado
        titulo="Talvez você se interesse por"
        subtitulo="Crash Bandicoot"
        descricao="Construindo uma aplicação com a plataforma Google"
        img="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTy8r35uRcGWVrviDV28zLuALLTV17-_J_zoA&s"
      />
    </HeaderContainer>
  )
}

export default App;
