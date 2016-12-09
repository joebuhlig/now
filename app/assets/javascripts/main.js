$(document).ready(function(){
	if (navigator.userAgent.match(/Mobile|webOS|Nexus 7/)){
		$("body").addClass("mobile");
	}
	scaleVideoContainer();

    initBannerVideoSize('.video-container .poster img');
    initBannerVideoSize('.video-container .filter');
    initBannerVideoSize('.video-container video');

    $(window).on('resize', function() {
        scaleVideoContainer();
        scaleBannerVideoSize('.video-container .poster img');
        scaleBannerVideoSize('.video-container .filter');
        scaleBannerVideoSize('.video-container video');
    });
	$(".menu-icon").click(function(e){
		e.preventDefault();
		$(".site-nav").toggleClass("menu-toggled");
	});
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
	$(".link").unbind("click");
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
}
function scaleVideoContainer() {

    var height = $(window).height() + 5;
    var unitHeight = parseInt(height) + 'px';
    $('.homepage-hero-module').css('height',unitHeight);

}

function initBannerVideoSize(element){

    $(element).each(function(){
        $(this).data('height', $(this).height());
        $(this).data('width', $(this).width());
    });

    scaleBannerVideoSize(element);

}

function scaleBannerVideoSize(element){

    var windowWidth = $(window).width(),
    windowHeight = $(window).height() + 5,
    videoWidth,
    videoHeight;

    $(element).each(function(){
        var videoAspectRatio = $(this).data('height')/$(this).data('width');

        $(this).width(windowWidth);

        if(windowWidth < 1000){
            videoHeight = windowHeight;
            videoWidth = videoHeight / videoAspectRatio;
            $(this).css({'margin-top' : 0, 'margin-left' : -(videoWidth - windowWidth) / 2 + 'px'});

            $(this).width(videoWidth).height(videoHeight);
        }

        $('.homepage-hero-module .video-container video').addClass('fadeIn animated');

    });
}