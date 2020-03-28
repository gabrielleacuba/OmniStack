exports.up = function(knex) {
    return knex.schema.createTable('casos', function(table){
        table.increments()
        table.string('title').notNullable() //nao pode ser vazio
        table.string('description').notNullable() //nao pode ser vazio
        table.decimal('value').notNullable() //nao pode ser vazio
    
        table.string('ong_id').notNullable()
    
        table.foreign('ong_id').references('id').inTable('ong') //chave estrangeira
      })
};

exports.down = function(knex) {
    return knex.schema.dropTable('casos')
};
