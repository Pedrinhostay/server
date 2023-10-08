import { MigrationInterface, QueryRunner } from "typeorm";

export class Default1696791563977 implements MigrationInterface {
    name = 'Default1696791563977'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "permitions" ("id" SERIAL NOT NULL, "name" character varying NOT NULL, "description" text NOT NULL, CONSTRAINT "PK_368fdb4ccdfadc67344b40145dd" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "roles" ("id" SERIAL NOT NULL, "name" character varying NOT NULL, "description" text NOT NULL, CONSTRAINT "PK_c1433d71a4838793a49dcad46ab" PRIMARY KEY ("id"))`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE "roles"`);
        await queryRunner.query(`DROP TABLE "permitions"`);
    }

}
