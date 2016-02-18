'use strict'

const connection = require('../db/connection')

module.exports = {

  executePipeline: (pipelineConfigId, options, callback) => {

    const executePipeline = require('../core/pipelines/execute-pipeline-command')

    executePipeline(pipelineConfigId, options, callback)
  },

  pipelineSettings: (pipelineConfigId, vendor, extId, category) => {
    return new Promise(resolve => {
      let settings = {}

      return connection.select()
        .where('pipeline_config_id', req.params.id)
        .andWhere('vendor', vendor).andWhere('extension_id', extId)
        .andWhere('category', category).from('pipeline_extension_settings')
        .then(results => {
          results.forEach(res => settings[res.key] = res.value)
          resolve(settings)
        })
    })
  },

}
