var time = 500;

$(document).ready(function() {
	$("#home .nav ul .home").animate({position:"relative", left:-10, marginLeft:"20px"},time).animate({left:0},time);
	$("#home .nav ul .info").animate({position:"relative", left:120},time).animate({left:130},time);
	$("#home .nav ul .company").animate({position:"relative", left:215},time).animate({left:220},time);
	$("#home .nav ul .contacts").animate({position:"relative", left:360},time).animate({left:350},time);
	$("#home .nav ul .clients").animate({position:"relative", left:490, marginRight:"40px"},time).animate({left:480},time);
	$("#home .footer").animate({height:"25px"},time);
});

$(document).ready(function() {
	$(".nav ul li a").click(function(e) {
		var link = $(this).attr('href');
		e.preventDefault();
		$("li").each(function(i) {
			if(i == 0) $(this).animate({marginTop:"35px"},time).animate({marginTop:"30px"}, time).delay(time/2);
			else $(this).animate({marginTop:"35px"},time*i).animate({marginTop:"30px"}, time*i).delay(time/2);
		});
		$(".footer").animate({height:"0px"},time/2);
		$(".nav ul li a").fadeOut(time*2, function(){ window.location = link;});
	});
});