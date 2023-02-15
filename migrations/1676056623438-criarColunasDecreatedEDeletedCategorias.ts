import { MigrationInterface, QueryRunner, TableColumn } from "typeorm"

export class criarColunasDecreatedEDeletedCategorias1676056623438 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.addColumn("tb_categorias", new TableColumn({
            name: "created_at",
            type: "timestamp",
            default: "CURRENT_TIMESTAMP"
        }))

        await queryRunner.addColumn("tb_categorias", new TableColumn({
            name: "deleted_at",
            type: "timestamp",
            isNullable: true
        }))
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropColumn("tb_categorias", "created_at")
        await queryRunner.dropColumn("tb_categorias", "deleted_at")
    }

}
