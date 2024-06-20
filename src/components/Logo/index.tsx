import logo from '/src/assets/imgs/logo.svg';
import styled from 'styled-components';

const LogoContainer = styled.div`
     display: flex;
     font-size: 1.75rem;
`
const LogoImg = styled.img`
    margin: 15px;
`

const Logo = () => {
    return (
        <LogoContainer >
            <LogoImg
                src={logo}
                alt="Logo Alura Books" />
            <p><strong>Alura </strong>Books</p>
        </LogoContainer>
    )
}

export default Logo;