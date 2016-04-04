$(document).ready(function(){
	if (navigator.userAgent.match(/Mobile|webOS|Nexus 7/)){
		$("#bg-video video").remove();
		$("body").addClass("mobile");
	}
	$(window).scroll(function(){
		console.log($(window).scrollTop());
		if ($(window).scrollTop() > 50 && !$("#navigation #menu").is(":visible")){
			$(".menu-icon").not(".open").fadeOut();
		}
		else{
			$(".menu-icon").fadeIn();	
		}
	})
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
	$("body .link, .menu-icon").unbind("click");
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
	$(".work.link").click(function(event){
		event.preventDefault();
		updatePage("work");
	});
	$('.menu-icon').click(function(event){
		event.preventDefault();
		$('#navigation').toggleClass('open');
	});
	$("#menu .link").click(function(){
		$('#navigation').toggleClass('open');
	});
	$("#section_wrapper").click(function(){
		$('#navigation').removeClass('open');
	})
}