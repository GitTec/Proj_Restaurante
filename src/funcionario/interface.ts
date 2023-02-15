interface ICadastrarFuncionario {
    nome: string;
    email: string;
    cpf: string;
    dtNascimento: Date;
    telefone: string;
}

interface IEditarFuncionario {
    nome: string;
    email: string;
    cpf: string;
    dtNascimento: Date;
    telefone: string;
    id: number;
}

export { ICadastrarFuncionario, IEditarFuncionario }