// Controller for win condition
function ticTacCtrl($scope){
	$scope.ticTacToe=[['','x',''], 
					['','',''], 
					['','','']];

	$scope.classes = ['X', 'O'];
	$scope.counter=0;


	$scope.checkWin = function(row, column, holder){ 
		
		this.ticTacToe[row] [column] = holder;
		
		for(var x=0;x<=2;x+=1){
			if(this.ticTacToe[x][0] == this.ticTacToe[x][1] &&
			this.ticTacToe[x][1] == this.ticTacToe[x][2] && 
			this.ticTacToe[x][1] !== ""){
			document.getElementById("popup").style.display="block";}
		
			if(this.ticTacToe[0][x] == this.ticTacToe[1][x] &&
			this.ticTacToe[1][x] == this.ticTacToe[2][x] && 
			this.ticTacToe[1][x] !== ""){
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
