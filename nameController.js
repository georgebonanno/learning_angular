app2.controller('nameController',function($scope) {
	$scope.sortingByAttr='name';
	$scope.names=[{name:'Jani',country:'Norway'},
        {name:'Carl',country:'Sweden'},
        {name:'Margareth',country:'England'},
        {name:'Hege',country:'Norway'},
        {name:'Joe',country:'Denmark'},
        {name:'Gustav',country:'Sweden'},
        {name:'Birgit',country:'Denmark'},
        {name:'Mary',country:'England'},
        {name:'Kai',country:'Norway'}
        ];

    $scope.orderByAttr=function(attribute) {
    	$scope.sortingByAttr=attribute;
    };
});