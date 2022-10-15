var app = angular.module("mainApp",[]);
app.controller("CRUDController", function($scope)  {

    $scope.EmpList = [];
    $scope.AddData = function(){

        var Emp = {
            ID: $scope.EmpList.length+1,
            Name: $scope.Name,
            Salary: $scope.Salary,
        };

        $scope.EmpList.push(Emp);

        ClearModel(); 

    };
    function ClearModel(){
            $scope.ID=0;
            $scope.Name ='';
            $scope.Salary = 0;

        }
        

    $scope.DeleteData = function(Emp){
        var index = $scope.EmpList.indexOf(Emp);
        $scope.EmpList.splice(index,1);

    };

    $scope.BindSelectedData = function(Emp){

        $scope.ID= Emp.ID;
        $scope.Name= Emp.Name;
        $scope.Salary = Emp.Salary;
    };

    $scope.UpdateData = function(){
        // $.grep($scope.EmpList, function(e)){
        //     if(e.ID== $scope.ID){
        //         e.Name =$scope.Name;
        //         e.Salary =$scope.Salary;
        //     }
        // }
        $.grep($scope.EmpList,function(e){
            if(e.ID== $scope.ID){
                        e.Name =$scope.Name;
                        e.Salary =$scope.Salary;
                    }
        });

    }

    
 
     


});