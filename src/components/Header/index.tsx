import Logo from "../Logo";
import ListOptionHeader from "./ListOptionHeader";
import './Header.css';
import ListIconeHeader from "./ListIconeHeader";

const Header = () => {
    return (
        <header className="cabecalho">
            <Logo />
            <ListOptionHeader />
            <ListIconeHeader />
        </header>
    )
}

export default Header;