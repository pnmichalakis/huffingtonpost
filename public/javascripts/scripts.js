console.log("Hello")

$(document).ready(function(){

// $('#selectorbutton').click(function(){
// 	console.log("jam")
// 	$('#selectorform').submit();
// });

// $("#selectorform").submit(function(e){
// 	e.preventDefault();
// 	console.log("throop")
// });

$("#sections").on('change', function(){
	 alert($('option:selected').text());
});



});

$(function(){

$('#selectorbutton').click(function(){
	$('#selectorform').submit();
});

$("#selectorform").submit(function(){
	console.log("throop")
});



});