/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */

const paletteColorFields = [1, 2, 3, 4, 5].reduce(
	(acc, colorNum) => (
		[
			...acc,
			...["red", "green", "blue"].map(color => `${color}${colorNum}`)
		]
	),
	[]
);

exports.up = function(knex) {
    return knex.schema.createTable("palettes", function(table) {
		table.increments("id");
		table.string("name", 255).notNullable();
		paletteColorFields.forEach((colorField) => table.integer(colorField));
		table.timestamps(true, true, true);
	  });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
    return knex.schema.dropTable("palettes");
};
