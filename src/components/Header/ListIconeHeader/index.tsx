import perfil from "../../../assets/imgs/perfil.svg";
import sacola from "../../../assets/imgs/sacola.svg";
import "./ListIconeHeader.css";

const ListIconeHeader = () => {
    const icones = [sacola, perfil];
    
    return (
        <ul className="lista-icones">
            {icones.map((icone) =>
                <li className="icone">
                    <img src={icone} alt="Logo" />
                </li>)}
        </ul>
    )
}

export default ListIconeHeader;
