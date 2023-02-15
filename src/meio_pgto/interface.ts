interface ICadastrarModeloPagamento {
    tipo_pagamento: number;
    valor_acrescimos: number;
}

interface IEditarModeloPagamento {
    tipo_pagamento: number;
    valor_acrescimos: number;
    id: number;
}
export { ICadastrarModeloPagamento, IEditarModeloPagamento }