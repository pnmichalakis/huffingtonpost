console.log("Hello")

$(document).ready(function(){

	$("#sections").on('change', function(){
		$("#selected").append("<li class='selectedsection'>"+ $('option:selected').text() +"</li>")
	});

});

