import Logo from "../Logo";
import ListOptionHeader from "./ListOptionHeader";
import ListIconeHeader from "./ListIconeHeader";
import { HeaderStyled } from './StyledHeader';

const Header = () => {
    return (
        <HeaderStyled >
            <Logo />
            <ListOptionHeader />
            <ListIconeHeader />
        </HeaderStyled>
    )
}

export default Header;