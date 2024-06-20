import livrosBanco from '../../db/livros.json';
import { SubTitulo } from '../Search/SearchStyled';
import { BooksContainer, BooksListContainer, ItemList, Titulo } from './StyledBooksList';

const BooksList = () => {
    const livros = livrosBanco.livros;

    return (
        <BooksListContainer>
            <Titulo cor="#EB9B00">
                ÚLTIMOS LANÇAMENTOS</Titulo>
            <BooksContainer>
                {
                    livros.map(livro => (
                        <ItemList key={livro.id}>
                             <img src={livro.capa} alt={livro.nome} />
                             <SubTitulo>{livro.nome}</SubTitulo>
                        </ItemList>
                    ))
                }
            </BooksContainer>
        </BooksListContainer>
    )
}

export default BooksList;