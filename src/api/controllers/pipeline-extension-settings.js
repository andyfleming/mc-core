'use strict'

const PIPELINE_EXTENSION_SETTINGS = 'pipeline_extension_settings'

//let connection = require('../../db/connection')
const success = require('../utils/responses/success')
const error = require('../utils/responses/error')
const connection = require('../../db/connection')
const registry = require('../../extensions/registry')
const _ = require('lodash')

module.exports = {

  /**
   * Fetches a list of pipeline settings (values)
   *
   * @param req
   * @param res
   */
  getList: (req, res) => {
    connection.select()
      .where('pipeline_config_id', +req.params.pipeline_id)
      .from(PIPELINE_EXTENSION_SETTINGS)
      .then(rows => {
        let settings = {}
        rows.forEach(setting => {
          const ext = setting.extension_id
          const cat = setting.category_id
          settings[ext] = settings[ext] || {}
          settings[ext][cat] = settings[ext][cat] || {}
          settings[ext][cat].settings = settings[ext][cat].settings || {}
          settings[ext][cat].settings[setting.key] = settings[ext][cat].settings[setting.key] || {}
          settings[ext][cat].settings[setting.key].value = setting.value
        })

        return _.defaultsDeep({}, registry.getPipelineSettingsGroups(), settings)
      })
      .then(success.bind(res))
      .catch(error.bind(res))
  }

}
