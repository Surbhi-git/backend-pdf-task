import { Knex } from "knex";


export async function up(knex: Knex): Promise<void> {
    const migration = await knex.schema.createTable("pdf", function (table) {
        table.increments("id").primary();
        table.string("pdf_data");
        table.timestamp("created_at").defaultTo(knex.fn.now());
        table.timestamp("updated_at").defaultTo(knex.fn.now());
      });
      return migration;
}


export async function down(knex: Knex): Promise<void> {
    return knex.schema.dropTableIfExists("pdf");
}
