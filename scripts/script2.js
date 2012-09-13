var time = 700;

$(document).ready(function() {
	$("#starter").animate({height:"172px", width:"172px"},time,function() {
		$("#starter").animate({top:"0px"},time, function() {
			$("#starter").animate({top:"917px"},time);
			$(".title").animate({minHeight:"917px"},time, function() {
				$("#starter").animate({height:"0px"}, time/500, function() {
					// $("#starter").animate({left:"73px"},time);
					$(".title").animate({marginLeft:"730px", height:"100%"},time/2,function(){
						$(".title").animate({marginLeft:"73px"},time);
						$(".info-text").animate({width:"620px", marginLeft:"418px"},time, function() {
							$("#info .home").delay(time*3/5).animate({top:"30px", opacity:1}, time*2/3).animate({top:"23px", opacity:1}, time/2);
							$("#info .info").animate({top:"30px", opacity:1}, time*2/3).animate({top:"23px", opacity:1}, time/2)
							$("#info .company").delay(time*3/4).animate({top:"30px", opacity:1}, time*2/3).animate({top:"23px", opacity:1}, time/2);
							$("#info .contacts").delay(time/10).animate({top:"30px", opacity:1}, time*2/3).animate({top:"23px", opacity:1}, time/2);
							$("#info .clients").delay(time/2).animate({top:"30px", opacity:1}, time*2/3).animate({top:"23px", opacity:1}, time/2);
							$(".text p").each(function (i){
								$(this).delay(time*i/3).fadeIn(time*5);
								if(i == 5){
									$(".footer").animate({height:"25px"},time);
								}
							})
						});
					});
				});
			});
		});
	});

$(".nav ul li a").click(function(e) {
		var link = $(this).attr('href');
		e.preventDefault();
		$(".text").animate({marginLeft:"550px"},time);
		$(".info-text .nav ul li").each(function(i) {
			if(i == 0) $(this).animate({top:"40px"}, time/2).delay(time);
			else $(this).animate({top:"40px"}, time*i/2).delay(time);
		});
		$(".nav ul li a").fadeOut(time);
		$(".footer").animate({height:"0px"},time,function(){
			console.log("hello");
			$(".title").animate({
				width:"0px", 
				marginLeft:"345px"
			},time);
			$(".info-text").animate({
				width:"0px", 
				marginLeft:"620px", 
				marginRight:"220px"
			},time,function(){
				window.location = link;
			});
		});
	});
});
	
