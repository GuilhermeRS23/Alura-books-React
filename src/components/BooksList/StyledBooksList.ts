import styled from "styled-components";

interface Props {
    cor?: string
    tamanhoFonte?: string
    alinhamento?: string
}

export const BooksListContainer = styled.section`
    background-color: #EBECEE;
    padding-bottom: 20px;
    display: flex;
    flex-direction: column;
`

export const Titulo = styled.h2<Props>`
    width: 100%;
    padding: 30px 0;
    background-color: #FFF;
    color: ${props => props.cor || '#000'};
    font-size: ${props => props.tamanhoFonte || '36px'};
    text-align: ${props => props.alinhamento || 'center'};
    margin: 0;
`

export const BooksContainer = styled.ul`
    margin-top: 30px;
    display: flex;
    width: 100%;
    justify-content: center;
    cursor: pointer;
    gap: 35px;
`

export const ItemList = styled.li`
    width: 250px;
`