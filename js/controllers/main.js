'use strict';

app.controller('homeCon', [ '$scope','$http', function($scope, $http) {

    var vm = this;
    $scope.test = 990;
//    var path = 'http://localhost:5090/smartbiz/'
	var path = 'https://biztool.herokuapp.com/';
    vm.dataLoading = false;
    $scope.req = {};
    vm.addQuote = function () {
        var url = path+'api/quote/new';
        vm.dataLoading = true;
        $scope.req.createdOn = new Date();
        $http.post(url,$scope.req)
            .success(function (data) {
                vm.dataLoading = false;
                $('#quoteModal').modal('hide');
                $scope.req = {};
                $.notify('We have received your message, a member of staff will contact you shortly!', "success");
//                $scope.success = data;

            }).error(function (data) {
                vm.dataLoading = false;
                console.log(data);
                $.notify('Failed to save data, please retry', "error");
                //              $scope.error = data;
            })
    };

    vm.supLoading = false;
    $scope.sup = {};
    vm.newSupport = function () {
        vm.supLoading = true;
        var url = path+'api/support/add'
        vm.dataLoading = true;
        $http.post(url,$scope.sup)
            .success(function (data) {
                vm.supLoading = false;
                $.notify(data, "success" );
                //$scope.supsuccess = data;
                vm.dataLoading = false;
                $scope.sup = {};

            })
            .error(function (data) {
                vm.supLoading = false;
                vm.dataLoading = false;
                $.notify("Failed to save data, please retry!", "error");
                console.log(data);
            })
    };

    vm.addLead = function (em) {
        var lead = {};
        lead.email = em;
        var url = path+'api/support/add'
        vm.dataLoading = true;
        $http.post(url,lead)
            .success(function (data) {
                vm.supLoading = false;
                $.notify(data, "success" );
                //$scope.supsuccess = data;

                lead = {};

            })
            .error(function (data) {
                $.notify("Failed to save data, please retry!", "error");
                console.log(data);
            })
    };

	
	$scope.formatCurrency = function(n,currency){
		return currency + " " + n.toFixed(2).replace(/./g, function(c, i, a) {
	        return i > 0 && c !== "." && (a.length - i) % 3 === 0 ? "," + c : c;
	    });
	}

} ]);

app.controller('projectCon', function ($stateParams) {
    var vm = this;
    // get project id from stateparams
    // fetch project


});
app.controller('blogCon', function ($stateParams) {
    var vm = this;
    // get blog id from stateparams
    // fetch project


});