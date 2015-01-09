console.log("Hello")

var toSearch = []

$(document).ready(function(){

	$("#searchtitle").hide();
	$("#sections").on('change', function(){
		$("#searchtitle").show();
		$("#selected").append("<li class='selectedsection'>"+ $('option:selected').text() +"</li>");
		var option_all = $("option:selected").map(function() {
			return $(this).text();
		}).get().join();
		toSearch.push(option_all);
	});

	$("#huffposearch").click(function(){
		$(".selectedsection").empty();
		console.log(toSearch);
		toSearch = []
	});

});

