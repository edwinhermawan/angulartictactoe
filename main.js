// Controller for win condition
function ticTacCtrl($scope){
	$scope.ticTacToe=[['','x',''], 
					['','',''], 
					['','','']];

	$scope.classes = ['X', 'O'];
	$scope.counter=0;
	$scope.cell = classes[counter%2];
	}

	$scope.checkWin = function(){
		var row=$scope.$parent.$index; 
		var column =$scope.$index; 

		for(var x=0;x<=2;x+=1){
			if(((row==0),(column==x)) == ((row==1),(column==x)) &&
			((row==1),(column==x)) == ((row==2),(column==x)) && 
			((row==0),(column==x)) !== ""){
		document.getElementById("popup").style.display="block";}
		// alert(ticTacToe[0]{{x}} + " won in column " +( (x==)
		
		// if((row==x,column==0) == (row==x,column==1}}) &&
		// row({{x}},column{{1}}) == row({{x}},columncolumn{{2}}) && 
		// row({{x}},column{{0}}) != ""){
		// document.getElementById("popup").style.display="block";}
		// };
		};
}
}
