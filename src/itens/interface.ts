interface ICadastrarItem {
    nome: string;
    valor: number;
    detalhes: string;
    imagem?: string;
    idCategoria: number;
}

interface IEditarItem {
    nome: string;
    valor: number;
    detalhes: string;
    imagem?: string;
    idCategoria: number;
    id: number;
}

export { ICadastrarItem, IEditarItem }
