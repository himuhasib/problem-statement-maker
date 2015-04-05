var app = angular.module('myApp', []);

app.controller('myController', function($scope){
	$scope.problemTitle = "Lorem ipsum!";
	$scope.problemBody = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse egestas dapibus nibh a congue. Donec lobortis mi tortor, quis dignissim risus molestie sit amet. Morbi sollicitudin porttitor luctus. Nulla sem mauris, commodo sed nunc in, tincidunt mollis lacus. Curabitur sed mauris vitae quam aliquam eleifend. Pellentesque varius mi felis, et molestie arcu ultricies ac. Suspendisse semper, leo et aliquam egestas, lorem nunc condimentum justo, nec aliquet turpis nisl non nisi.";
	$scope.inputSpec = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris semper hendrerit massa, in consequat purus tempor sit amet. Curabitur tempus vel mauris et pretium. Donec ullamcorper elementum tincidunt. Integer finibus pellentesque elementum. Duis vehicula gravida mi, quis laoreet erat tempor sagittis. Nam at risus diam. Sed mollis velit enim. Phasellus hendrerit lobortis nunc, venenatis auctor dolor consectetur eget. Quisque blandit risus sed porta semper. Sed metus felis, mattis quis ex ut, finibus volutpat ex. Aenean convallis ultricies ex sed auctor. Fusce lorem odio, eleifend sed ipsum sed, volutpat cursus nisl. Fusce nunc nulla, posuere eu sapien sit amet, iaculis suscipit dolor. Aenean nec lacus pulvinar, mollis orci ut, facilisis elit. Aenean ultricies blandit ante at tincidunt. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Curabitur velit mi, blandit sed massa non, vehicula tincidunt tellus. Vestibulum vel odio ex.";
	$scope.outputSpec = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse egestas dapibus nibh a congue. Donec lobortis mi tortor, quis dignissim risus molestie sit amet. Morbi sollicitudin porttitor luctus. Nulla sem mauris, commodo sed nunc in, tincidunt mollis lacus. Curabitur sed mauris vitae quam aliquam eleifend. Pellentesque varius mi felis, et molestie arcu ultricies ac. Suspendisse semper, leo et aliquam egestas, lorem nunc condimentum justo, nec aliquet turpis nisl non nisi.";
	$scope.sampleInput = "2\n3\n6\n";
	$scope.sampleOutput = "Case 1: Yes\nCase 2: No\n";
	$scope.specialNote = "Data set is huge! Use faster I/O (scanf/printf)";



	$scope.problemBuilder = 1;
	$scope.problemViewer = 0;
	$scope.showButtons = 1;

	$scope.showPreview = function(){
		$scope.problemBuilder = 0;
		$scope.problemViewer = 1;
		$scope.showButtons = 1;
	}

	$scope.showFinal = function(){
		$scope.problemBuilder = 0;
		$scope.problemViewer = 1;
		$scope.showButtons = 0;
	}

	$scope.showForm = function(){
		$scope.problemBuilder = 1;
		$scope.problemViewer = 0;
		$scope.showButtons = 0;
	}


});
