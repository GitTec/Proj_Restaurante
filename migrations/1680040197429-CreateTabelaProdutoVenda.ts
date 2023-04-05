import { MigrationInterface, QueryRunner, Table } from "typeorm"

export class CreateTabelaProdutoVenda1680040197429 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(new Table({
            name: "tb_produto_venda",
            columns: [
                {
                    name: "id",
                    type: "int",
                    isGenerated: true,
                    generationStrategy: "increment",
                    isPrimary: true
                },
                {
                    name: "id_venda",
                    type: "int",
                    isNullable: false
                },
                {
                    name: "id_produto",
                    type: "int",
                    isNullable: false
                },
                {
                    name: "quantidade",
                    type: "int",
                    isNullable: false
                },
                {
                    name: "preco",
                    type: "int",
                    isNullable: false
                },
                {
                    name: "deleted_at",
                    type: "timestamp",
                    isNullable: true
                },
            ],
            foreignKeys: [
                {
                    name: "fk_produto_venda_produto",
                    columnNames: ["id_produto"],
                    referencedColumnNames: ["id"],
                    referencedTableName: "tb_itens"
                },
                {
                    name: "fk_produto_venda_venda",
                    columnNames: ["id_venda"],
                    referencedColumnNames: ["id"],
                    referencedTableName: "tb_vendas"
                }
            ]
        }))
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable("tb_produto_venda")
    }

}
