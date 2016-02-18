'use strict'

let timestamps = require('../timestamps-schema')

exports.up = function(knex, Promise) {

  return knex.schema.createTable('pipeline_extension_settings', function(table) {
    table.increments('id')
    table.integer('pipeline_config_id').unsigned().references('pipeline_configs.id')
    table.string('vendor')
    table.string('extension_id')
    table.string('category_id')
    table.string('key')
    table.text('value')
    timestamps(knex, table)
  })

}

exports.down = function(knex, Promise) {

  return knex.schema.dropTable('pipeline_extension_settings')

}
