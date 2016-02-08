export default ['$scope', '$http', '$uibModalInstance', 'data', function($scope, $http, $uibModalInstance, data) {

  $http
    .get('/api/stage-types')
    .then(res => $scope.stages = res.data.data)

  $scope.ok = () => {
    let stage = $scope.stages.find(stage => {
      // $scope.stage_id is the user selected stage
      if (stage.id === $scope.stage_id) {
        return stage
      }
    })

    let dataToSend = {
      pipeline_config_id: data.pipelineId,
      type: stage.fqid,
      name: $scope.name || stage.name
      // options: {}
    }

    if (typeof data.sort !== 'undefined') {
      dataToSend.sort = data.sort
    }

    console.log('about to send data for new stage')
    console.log(dataToSend)

    $http
      .post('/api/stage/config', dataToSend)
      .then(res => {
        console.log(res)
      })
      .catch(err => {
        console.error(err)
      })

    $uibModalInstance.close()
  }

  $scope.cancel = () => {
    $uibModalInstance.dismiss('cancel')
  }

}]
