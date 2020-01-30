$(document).ready(function($){
	$("#web-design-progressbar").circleProgress({
		value: 0.9,
		size: 200,
		fill: '#177cf2',
		thickness:2,
		emptyFill:'#fff'
	}).on('circle-animation-progress', function(event, progress) {
		$(this).find('.progressbar-percentage').html(Math.round(90 * progress) + '<i>%</i>');
	});
	
	$("#graphic-design-progressbar").circleProgress({
		value: 0.75,
		size: 200,
		fill: 'orange',
		thickness:4,
		emptyFill:'#fff'
	}).on('circle-animation-progress', function(event, progress) {
		$(this).find('.progressbar-percentage').html(Math.round(75 * progress) + '<i>%</i>');
	});
	
	$("#web-develop-progressbar").circleProgress({
		value: 0.65,
		size: 200,
		fill: 'pink',
		thickness:2,
		emptyFill:'#fff'
	}).on('circle-animation-progress', function(event, progress) {
		$(this).find('.progressbar-percentage').html(Math.round(65 * progress) + '<i>%</i>');
	});
});