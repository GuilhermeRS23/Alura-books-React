import logo from '/src/assets/imgs/logo.svg';
import './styles.css';

const Logo = () => {
    return (
        <div className='logo'>
            <img className='logo-imagem'
            src={logo} 
            alt="Logo Alura Books" />
            <p><strong>Alura </strong>Books</p>
        </div>
    )
}

export default Logo;