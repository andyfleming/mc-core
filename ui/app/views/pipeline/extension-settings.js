export default ['$rootScope', '$scope', '$http', '$stateParams', '$state', function($rootScope, $scope, $http, $stateParams, $state) {

  function loadPipelineAndProject() {
    $http.get('/api/pipelines/' + $stateParams.id).then(response => {
      $scope.pipeline = response.data.data

      $http.get('/api/projects/' + response.data.data.project_id).then(response => {
        $scope.project = response.data.data
      })

    })
  }

  function loadPipelineExtensionSettings() {
    $http.get('/api/pipelines/' + $stateParams.id + '/extension-settings').then(response => {
      $scope.settings = response.data.data
    })
  }

  loadPipelineAndProject()
  loadPipelineExtensionSettings()

  $scope.saveSettings = function saveSettings(ext, group) {

  }

}]
