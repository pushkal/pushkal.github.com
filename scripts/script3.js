var time = 700;

$(document).ready(function() {
	$("#company .home").delay(time*3/5).animate({top:"30px", opacity:1}, time*2/3).animate({top:"23px", opacity:1}, time/2);
	$("#company .info").animate({top:"30px", opacity:1}, time*2/3).animate({top:"23px", opacity:1}, time/2)
	$("#company .company").delay(time*3/4).animate({top:"30px", opacity:1}, time*2/3).animate({top:"23px", opacity:1}, time/2);
	$("#company .contacts").delay(time/10).animate({top:"30px", opacity:1}, time*2/3).animate({top:"23px", opacity:1}, time/2);
	$("#company .clients").delay(time/2).animate({top:"30px", opacity:1}, time*2/3).animate({top:"23px", opacity:1}, time/2);
	$(".upper").animate({width:"60%", minWidth:"500px"},time, function() {
		$(".text").animate({opacity:1},time);
		$(".lower").animate({width:"72%", marginLeft:"28%"},time, function(){
			$(".footer").animate({height:"25px"},time);
		});
	})


	$("#company .nav ul li a").click(function(e) {
		var link = $(this).attr('href');
		e.preventDefault();
		$("#company .nav ul li").each(function(i) {
			if(i == 0) $(this).animate({top:"40px"}, time/2).delay(time);
			else $(this).animate({top:"40px"}, time*i/2).delay(time);
		});
		$(".nav ul li a").fadeOut(time);
		$(".footer").animate({height:"0px"},time);
		$(".upper h2").animate({left:"-450px"},time/2,function(){
			$(".upper").animate({marginTop:"110px"},time);
			$(".text").animate({height:0},time);
			$(".lower").animate({marginTop:"-40px"},time, function(){
				$(".upper").animate({marginLeft:"50%",width:"80px", minWidth:"0px"},time);
				$(".lower").animate({right:"50%", marginRight:"-80px", width:"80px"},time,function(){
					$(".lower").animate({height:"0px"},time/2);
					$(".upper").delay(time).animate({height:0, width:0},time/2, function(){
						window.location = link;
					});
				});
			})
		});
	});
});	

