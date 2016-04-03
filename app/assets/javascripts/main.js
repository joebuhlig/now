$(document).ready(function(){
	if (navigator.userAgent.match(/Mobile|webOS|Nexus 7/)){
		$("#bg-video video").hide();
		$("#bg-video #mobile_fallback").show();
	}
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
	$('.menu-icon').click(function(event){
		event.preventDefault();
		$('#navigation').toggleClass('open');
	});
});

function updatePage(page){
	var request = $.ajax({
	    type: "GET",
	    url: "/get/" + page
	});
	request.success(function(data){
		$('#navigation').toggleClass('open');
		window.history.pushState({}, "Now - Joe Buhlig", page);
		$(".section-content")
			.css('opacity', 0)
			.html(data)
			.animate(
				{ opacity: 1 },
				{ queue: false, duration: 'slow' }
			);
		try {
			_paq.push(['trackPageView']);
		}
		catch(err){
		}
	});
}