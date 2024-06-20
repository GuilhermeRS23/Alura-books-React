import { Titulo } from "../BooksList/StyledBooksList";
import { Button, Card, Descricao, ImgLivro, Subtitulo } from "./StyledCard";

interface Props {
    titulo:string
    subtitulo: string
    descricao:string
    img: string
}

const CardRecomendado = ({ titulo, subtitulo, descricao, img }: Props) => {
    return (
        <Card>
            <div>
                <Titulo tamanhoFonte="16px" cor="#EB9B00" alinhamento="left">{titulo}</Titulo>
                <Subtitulo>{subtitulo}</Subtitulo>
                <Descricao>{descricao}</Descricao>
            </div>
            <div>
                <ImgLivro src={img} />
                <Button>Saiba mais</Button>
            </div>
        </Card>
    )
}

export default CardRecomendado;