$(document).ready(function(){
	'use strict';
	console.log('main.js loaded');
	$("#wonder").on("click",function(){console.log('you cliked it')
		$("#container").load('test.html')
	})
})

$.fn.log_text_on_click = function(){
	this.on('click', function(){
		console.log($(this).html());
	});
	return this;
}

$('.expe').log_text_on_click();