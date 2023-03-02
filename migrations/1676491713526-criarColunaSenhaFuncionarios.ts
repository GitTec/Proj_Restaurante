import { MigrationInterface, QueryRunner, TableColumn } from "typeorm"

export class criarColunaSenhaFuncionarios1676491713526 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.addColumn("tb_funcionarios", new TableColumn({
            name: "senha",
            type: "varchar",
            length: "150",
            isNullable: false
        }))
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropColumn("tb_funcionarios", "senha")
    }
}
