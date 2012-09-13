var time = 900;

$(document).ready(function() {
	$("#contacts .home").delay(time*3/5).animate({top:"30px", opacity:1}, time*2/3).animate({top:"23px", opacity:1}, time/2);
	$("#contacts .info").animate({top:"30px", opacity:1}, time*2/3).animate({top:"23px", opacity:1}, time/2)
	$("#contacts .company").delay(time*3/4).animate({top:"30px", opacity:1}, time*2/3).animate({top:"23px", opacity:1}, time/2);
	$("#contacts .contacts").delay(time/10).animate({top:"30px", opacity:1}, time*2/3).animate({top:"23px", opacity:1}, time/2);
	$("#contacts .clients").delay(time).animate({top:"30px", opacity:1}, time*2/3).animate({top:"23px", opacity:1}, time/2);
	$(".footer").animate({height:"25px"},time);
	$(".holder").animate({width:"515px"},time).animate({width:"495px"},time/2, function() {
		$(".wrap .content ul li").each(function(i) {
			if(i == 0) $(this).animate({width:"100%"},time/2).delay(time);
			else $(this).delay(time*i/2).animate({width:"100%"},time/2);
		});
		$(".c").animate({height:"195px", marginTop:"0px"},time/3, function(){
			$(".o").animate({height:"195px", marginTop:"0px"},time/3, function(){
				$(".n").animate({height:"192px", marginTop:"0px"},time/3, function(){
					$(".t1").animate({height:"168px", marginTop:"-4px"},time/3, function(){
						$(".a").animate({height:"172px", marginTop:"-5px"},time/3, function(){
							$(".c1").animate({height:"175px", marginTop:"-5px"},time/3, function(){
								$(".t2").animate({height:"168px", marginTop:"-4px"},time/3, function() {
									$(".content ul li").each(function (j){
										if(j == 0)$(this).animate({marginTop:"0px"},time).delay(time*50);
										else $(this).delay(time*j*50).animate({width:"100%"},time/2);
										$(".mail").animate({opacity:1},time/2);
										if(j == 2) {
											$(".address p").css("width","0");
											$(".address").css("display","inline");
											$(".address p").each( function (n){
												if(n == 0)$(this).animate({width:"86%"},time/3);
												else $(this).delay(n*time*2/3).animate({width:"100%"},time/3);
											});
										}
									});
								});
							});
						});
					});
				});
			});
		});
	});
	
	$("#contacts .nav ul li a").click(function(ev) {
		var link = $(this).attr('href');
		ev.preventDefault();
		$("#contacts .nav ul li").each(function(p) {
			if(p == 0) $(this).animate({top:"50px"}, time/2).delay(time);
			else $(this).animate({top:"50px"}, time*p/2).delay(time);
		});
		$(".nav ul li a").fadeOut(time,function(){
			window.location = link;
		});
	});
});
