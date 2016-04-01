$(document).ready(function(){
	$("#hello_link").click(function(){
		updatePage("hello");
	});
	$("#time_link").click(function(){
		updatePage("time");
	});
	$("#reading_link").click(function(){
		updatePage("reading");
	});
	$("#development_link").click(function(){
		updatePage("development");
	});
	$("#history_link").click(function(){
		updatePage("history");
	});
});

function updatePage(page){
	var request = $.ajax({
	    type: "GET",
	    url: "/get/" + page
	});
	request.success(function(data){
		window.history.pushState({}, "Now - Joe Buhlig", page);
		$(".section-content")
			.css('opacity', 0)
			.html(data)
			.animate(
				{ opacity: 1 },
				{ queue: false, duration: 'slow' }
			);
	});
}