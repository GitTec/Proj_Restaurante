import { MigrationInterface, QueryRunner, Table } from "typeorm"

export class criarTabelaItem1675966452597 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(new Table({
            name: "tb_itens",
            columns: [
                {
                    name: "id",
                    type: "int",
                    isGenerated: true,
                    generationStrategy: "increment",
                    isPrimary: true
                },
                {
                    name: "nome",
                    type: "varchar",
                    length: "45",
                    isNullable: false
                },
                {
                    name: "valor",
                    type: "decimal(7,2)",
                    default: 0,
                    isNullable: false
                },
                {
                    name: "detalhes",
                    type: "text",
                    isNullable: true
                },
                {
                    name: "imagem",
                    type: "text",
                    isNullable: false
                },
                {
                    name: "id_categoria",
                    type: "int"
                }
            ],
            foreignKeys: [
                {
                    name: "fk_item_categoria",
                    columnNames: ["id_categoria"],
                    referencedColumnNames: ["id"],
                    referencedTableName: "tb_categorias"
                }
            ]
        }))
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable("tb_itens")
    }

}
