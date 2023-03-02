interface ICadastrarFuncionario {
    nome: string;
    email: string;
    cpf: string;
    dtNascimento: Date;
    telefone: string;
    senha: string;
}

interface IEditarFuncionario {
    nome: string;
    email: string;
    cpf: string;
    dtNascimento: Date;
    telefone: string;
    senha: string;
    id: number;
}

interface IRecuperarSenha {
    senha: string;
    id: number;
}
export { ICadastrarFuncionario, IEditarFuncionario, IRecuperarSenha }