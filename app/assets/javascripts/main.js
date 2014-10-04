$(function() {

	//EVENTOS
	$('#banner-eventos').carouFredSel({
		items : {
			visible : 2,
		},
		auto : true,
		scroll : {
			items : 2,
			easing : 'linear',
			duration : 1000,							
			pauseOnHover : true,
		},
		pagination  : '#nav-eventos'	
	});

	var getAno = new Date();
	var ano = getAno.getFullYear();

	$('#ano').text(ano);

	$('#featured').orbit({
		        auto:true,
                animation: 'horizontal-push',  // fade, horizontal-slide, vertical-slide, horizontal-push
                animationSpeed: 500,           // how fast animtions are
                advanceSpeed: 4000, 		 // if timer is enabled, time between transitions 
                pauseOnHover: false, 		 // if you hover pauses the slider
                timer :true,
                startClockOnMouseOut: true, 	 // if clock should start on MouseOut
                startClockOnMouseOutAfter: 300, 	 // how long after MouseOut should the timer start again
                directionalNav: true, 		 // manual advancing directional navs
                captions: true, 			 // do you want captions?
                captionAnimation: 'horizontal-push', 		 // fade, slideOpen, none
                captionAnimationSpeed: 800, 	 // if so how quickly should they animate in
                bullets: true,			 // true or false to activate the bullet navigation
                bulletThumbs: false,		 // thumbnails for the bullets
                bulletThumbLocation: '',		 // location from this file where thumbs will be
                afterSlideChange: function () { } 	 // empty function 
            });



    $("#topo-ico-tel").hover(function () {
        $('#topo-informacao-email').hide('fast')
        $('#topo-informacao-telefone').show('fast')
    });
    $("#topo-ico-email").hover(function () {
        $('#topo-informacao-telefone').hide('fast')
        $('#topo-informacao-email').show('fast')
    });

});

function initialize() {
    var lat = "-23.319599"
    var lng = "-51.166555"
    var pos = new google.maps.LatLng(lat, lng);
    var mapOptions = {
        center: pos,
        zoom: 15,
        scrollwheel: false,
        mapTypeId: google.maps.MapTypeId.ROADMAP
    };
    map = new google.maps.Map(document.getElementById('map-canvas'), mapOptions);

    var marker = new google.maps.Marker({
        position: pos,
        map: map

    });

}
