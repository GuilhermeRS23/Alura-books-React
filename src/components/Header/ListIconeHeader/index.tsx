import perfil from "../../../assets/imgs/perfil.svg";
import sacola from "../../../assets/imgs/sacola.svg";
import { Icone, ListIcones } from "../StyledHeader";

const ListIconeHeader = () => {
    const icones = [sacola, perfil];

    return (
        <ListIcones >
            {icones.map((icone) =>
                <Icone>
                    <img src={icone} alt="Logo" />
                </Icone>)}
        </ListIcones>
    )
}

export default ListIconeHeader;
