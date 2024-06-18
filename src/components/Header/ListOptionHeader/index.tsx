import { ListOpcoes, Opcao } from "../StyledHeader";

const ListOptionHeader = () => {
    const listaDeOpcoes = ["CATEGORIAS", "FAVORITOS", "MINHA ESTANTE"];

    return (
        <ListOpcoes>
            {listaDeOpcoes.map((item) =>
                <Opcao>{item}</Opcao>
            )}
        </ListOpcoes>
    )
}

export default ListOptionHeader;
