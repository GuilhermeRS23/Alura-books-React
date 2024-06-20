import { useState } from "react";
import livrosBanco from '../../db/livros.json';
import Input from "../Input";
import { Resultado, SearchSection, SubTitulo, Titulo } from "./SearchStyled";
import { ILivro } from "../../shared/types/ILivros";


const Search = () => {
    const [busca, setBusca] = useState<ILivro[]>([])
    const livros = livrosBanco.livros;

    return (
        <SearchSection>
            <Titulo>Já sabe por onde começar?</Titulo>
            <SubTitulo>Encontre seu livro em nossa estante</SubTitulo>
            <Input
                placeholder="Escreva a sua proxima leitura..."
                onBlur={evento => {
                    const textDigitado = evento.target.value
                    const resultado = livros.filter((livro) => livro.nome.includes(textDigitado));
                    setBusca(resultado);
                }
                }
            />
            {busca.map(livro => (
                <Resultado>
                    <p>{livro.nome}</p>
                    <img src={livro.capa} alt={livro.nome} />
                </Resultado>
            ))}
        </SearchSection>
    )
}

export default Search;
