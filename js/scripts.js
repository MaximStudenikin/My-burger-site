$(document).ready(function() {

// pagepiling
$('#pagepiling').pagepiling({
	menu: '#menu',
	anchors: ['page1', 'page2', 'page3', 'page4', 'page5', 'page6'],
	navigation: {
		'position': 'right',
		'tooltips': ['Page 1', 'Page 2', 'Page 3', 'Pgae 4', 'Pgae 5', 'Pgae 6']
	},
	afterRender: function(){
//playing the video
// $('video').get(0).play();
$('.play_btn').click(function(){
// starting video
var videoID = "#bg_video";
$(this).toggleClass('run');
if($(this).hasClass('run')){
	$(this).html('<i class="fa fa-play-circle" aria-hidden="true"></i>');
	$(videoID).trigger('play');
} else {
	$(this).html('<i class="fa fa-pause-circle" aria-hidden="true"></i>');
	$(videoID).trigger('pause');
}
});
}
});
});