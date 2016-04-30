app.controller("listController",function($scope) {
	/*$scope.chosen= {
		name:"",
		surname:""
	};*/
	$scope.people=[
		{
			name: 'George',
			surname: 'Best',
			id:1
		},
		{
			name: 'Marku',
			surname: 'Falzon',
			id:2
		},
		{
			name: 'John',
			surname: 'Magro',
			id:0
		}
	];

	function copyPerson(p) {
		return createPerson(p.name,p.surname,p.id);
	}

	function createPerson(name,surname,id) {
		return {
			name:name,
			surname:surname,
			id:id
		};
	}

	$scope.nameChosen=function(p) {
		$scope.chosen={
			name:p.name,
			surname:p.surname,
			id:p.id
		};
	};

	$scope.updateChosen=function() {
		console.log('updating index '+$scope.chosen.id);
		$scope.people[$scope.chosen.id]=copyPerson($scope.chosen);
		$scope.chosen=null;
	};
});