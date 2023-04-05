import { MigrationInterface, QueryRunner, Table } from "typeorm"

export class CreateTabelaVendas1680028830154 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(new Table({
            name: "tb_vendas",
            columns: [
                {
                    name: "id",
                    type: "int",
                    isGenerated: true,
                    generationStrategy: "increment",
                    isPrimary: true
                },
                {
                    name: "nome_cliente",
                    type: "varchar",
                    length: "50",
                    isNullable: false
                },
                {
                    name: "telefone_cliente",
                    type: "varchar",
                    length: "11",
                    isNullable: false
                },
                {
                    name: "endereco",
                    type: "varchar",
                    length: "70",
                    isNullable: false
                },
                {
                    name: "id_tipo_pagamento",
                    type: "int",
                    isNullable: false
                },
                {
                    name: "created_at",
                    type: "timestamp",
                    default: "CURRENT_TIMESTAMP"
                },
                {
                    name: "deleted_at",
                    type: "timestamp",
                    isNullable: true
                },
            ],
            foreignKeys: [
                {
                    name: "fk_venda_tipopgto",
                    columnNames: ["id_tipo_pagamento"],
                    referencedColumnNames: ["id"],
                    referencedTableName: "tb_meio_de_pagamento"
                }
            ]
        }))
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable("tb_vendas")
    }
}
