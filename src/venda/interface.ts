interface ICadastrarVenda {
    nomeCliente:string,
    telefone:string,
    endereco:string,
    idTipoPagamento:number
}

interface IEditarVenda {
    id:number,
    nomeCliente:string,
    telefone:string,
    endereco:string,
    idTipoPagamento:number
}

export { ICadastrarVenda, IEditarVenda }