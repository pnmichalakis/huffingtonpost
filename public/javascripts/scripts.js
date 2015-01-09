console.log("Hello")

var toSearch = []

$(document).ready(function(){


	$("#sections").on('change', function(){
		$("#selected").append("<li class='selectedsection'>"+ $('option:selected').text() +"</li>");
		var option_all = $("option:selected").map(function() {
			return $(this).text();
		}).get().join();
		toSearch.push(option_all);
	});

});

