import { MigrationInterface, QueryRunner, Table, TableForeignKey } from "typeorm";

export class Default1696791563978 implements MigrationInterface {
    name = 'Default1696791563978'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
              name: "pivot-permissions",
              columns: [
                { name: "role_id", type: "int" },
                { name: "permission_id", type: "int" },
              ],
            })
          );
      
          await queryRunner.createForeignKey(
            "pivot-permissions",
            new TableForeignKey({
              columnNames: ["permission_id"],
              referencedColumnNames: ["id"],
              referencedTableName: "permitions",
              name: "fk-permissions",
              onDelete: "CASCADE",
              onUpdate: "SET NULL",
            })
          );
      
          await queryRunner.createForeignKey(
            "pivot-permissions",
            new TableForeignKey({
              columnNames: ["role_id"],
              referencedColumnNames: ["id"],
              referencedTableName: "roles",
              name: "fk-roles",
              onDelete: "CASCADE",
              onUpdate: "SET NULL",
            })
          );
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropForeignKey(
            "pivot-permissions",
            "fk-permissions"
          );
          await queryRunner.dropForeignKey(
            "pivot-permissions",
            "fk-roles"
          );
      
          await queryRunner.dropTable("pivot-permissions");
    }

}
