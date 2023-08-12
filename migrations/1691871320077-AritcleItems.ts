import { MigrationInterface, QueryRunner } from "typeorm";

export class AritcleItems1691871320077 implements MigrationInterface {
    name = 'AritcleItems1691871320077'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "article" DROP COLUMN "title"`);
        await queryRunner.query(`ALTER TABLE "article" ADD "title" character varying(3)`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "article" DROP COLUMN "title"`);
        await queryRunner.query(`ALTER TABLE "article" ADD "title" character varying(4)`);
    }

}
