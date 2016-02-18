'use strict'

const PIPELINE_EXECUTIONS_SETTINGS = 'pipeline_extension_settings'

let connection = require('../../db/connection')
let success = require('../utils/responses/success')
let error = require('../utils/responses/error')

module.exports = {

  /**
   * Fetches a list of pipeline execution
   *
   * @param req
   * @param res
   */
  getList: (req, res) => {
    query.all(PIPELINE_EXECUTIONS_SETTINGS)
      .where('pipeline_config_id', req.params.id)
      .then(rows => {
        let settings = {}
        rows.forEach(setting => {
          const ext = setting.extension_id
          const cat = setting.category_id
          settings[ext] = setting[ext] || {}
          settings[ext][cat] = setting[ext][cat] || {}
          settings[ext][cat][setting.key] = setting.value
        })
        return settings
      })
      .then(success.bind(res))
      .catch(error.bind(res))
  },

}
