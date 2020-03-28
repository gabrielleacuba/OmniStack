exports.up = function(knex) {
    return knex.schema.createTable('ong', function (table){
        table.string('id').primary() //chave primária
        table.string('name').notNullable() //nao pode ser vazio
        table.string('email').notNullable() //nao pode ser vazio
        table.string('whatsapp').notNullable() //nao pode ser vazio
        table.string('city').notNullable() //nao pode ser vazio
        table.string('uf',2).notNullable() //nao pode ser vazio e 2 char
    })   
      
};

exports.down = function(knex) {
  return knex.schema.dropTable('ong')
};
