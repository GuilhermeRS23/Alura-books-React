import Header from './components/Header';
import styled from 'styled-components';

const HeaderContainer = styled.div`
  width: 100vw;
  height: 100vh;
  background-image: linear-gradient(90deg, #160052 35%, #333289);
`

function App() {
  return (
    <HeaderContainer>
      <Header />
    </HeaderContainer>
  )
}

export default App;
