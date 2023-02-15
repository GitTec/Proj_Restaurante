import { MigrationInterface, QueryRunner, TableColumn } from "typeorm"

export class criarColunasDecreatedEDeletedFuncionarios1676066619518 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.addColumn("tb_funcionarios", new TableColumn({
            name: "created_at",
            type: "timestamp",
            default: "CURRENT_TIMESTAMP"
        }))

        await queryRunner.addColumn("tb_funcionarios", new TableColumn({
            name: "deleted_at",
            type: "timestamp",
            isNullable: true
        }))
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropColumn("tb_funcionarios", "created_at")
        await queryRunner.dropColumn("tb_funcionarios", "deleted_at")
    }

}
