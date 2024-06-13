import "./ListOptionHeader.css";

const ListOptionHeader = () => {
    const listaDeOpcoes = ["CATEGORIAS", "FAVORITOS", "MINHA ESTANTE"];

    return (
        <ul className="lista-opcoes">
            {listaDeOpcoes.map((item) =>
                <li className="lista-opcao">{item}</li>
            )}
        </ul>
    )
}

export default ListOptionHeader;
