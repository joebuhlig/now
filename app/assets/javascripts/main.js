$(document).ready(function(){
	if (navigator.userAgent.match(/Mobile|webOS|Nexus 7/)){
		$("#bg-video video").remove();
		$("#bg-video #mobile_fallback").show();
	}
	setDOM();
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
		setTimeout(setDOM(),3000);
		try {
			_paq.push(['trackPageView']);
		}
		catch(err){
		}
	});
}

function setDOM(){
	$(".link, .menu-icon").unbind("click");
	$(".hello.link").click(function(event){
		event.preventDefault();
		updatePage("hello");
	});
	$(".time.link").click(function(event){
		event.preventDefault();
		updatePage("time");
	});
	$(".reading.link").click(function(event){
		event.preventDefault();
		updatePage("reading");
	});
	$(".development.link").click(function(event){
		event.preventDefault();
		updatePage("development");
	});
	$(".history.link").click(function(event){
		event.preventDefault();
		updatePage("history");
	});
	$('.menu-icon').click(function(event){
		event.preventDefault();
		$('#navigation').toggleClass('open');
	});
	$("#menu .link").click(function(){
		$('#navigation').toggleClass('open');
	});
}