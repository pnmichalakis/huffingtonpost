console.log("Hello")

$(document).ready(function(){

	$("#sections").on('change', function(){
		$("#selected").append("<li>"+ $('option:selected').text() +"</li>")
	});

});

