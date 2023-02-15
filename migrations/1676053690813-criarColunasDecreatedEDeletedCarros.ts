import { MigrationInterface, QueryRunner, TableColumn } from "typeorm"

export class criarColunasDecreatedEDeletedCarros1676053690813 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.addColumn("tb_meio_de_pagamento", new TableColumn({
            name: "created_at",
            type: "timestamp",
            default: "CURRENT_TIMESTAMP"
        }))

        await queryRunner.addColumn("tb_meio_de_pagamento", new TableColumn({
            name: "deleted_at",
            type: "timestamp",
            isNullable: true
        }))
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropColumn("tb_meio_de_pagamento", "created_at")
        await queryRunner.dropColumn("tb_meio_de_pagamento", "deleted_at")
    }

}
