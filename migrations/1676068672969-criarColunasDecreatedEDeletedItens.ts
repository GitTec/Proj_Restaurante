import { MigrationInterface, QueryRunner, TableColumn } from "typeorm"

export class criarColunasDecreatedEDeletedItens1676068672969 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.addColumn("tb_itens", new TableColumn({
            name: "created_at",
            type: "timestamp",
            default: "CURRENT_TIMESTAMP"
        }))

        await queryRunner.addColumn("tb_itens", new TableColumn({
            name: "deleted_at",
            type: "timestamp",
            isNullable: true
        }))
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropColumn("tb_itens", "created_at")
        await queryRunner.dropColumn("tb_itens", "deleted_at")
    }

}
