/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
    return knex.schema.createTable("group_code", function(table){
        table.increments("id").primary();
        table.string("code", 64).notNullable();
        table.string("col",64).notNullable();
        table.string("row",64).notNullable();
    })
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
    return knex.schema.dropTable("group_code")
};
