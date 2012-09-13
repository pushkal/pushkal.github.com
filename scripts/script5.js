var time =1000;
var i,j,k,l,m,n;
var v =0;

$(document).ready(function() {
	$("#clients .home").delay(time*3/5).animate({top:"30px", opacity:1}, time*2/3).animate({top:"23px", opacity:1}, time/2);
	$("#clients .info").animate({top:"30px", opacity:1}, time*2/3).animate({top:"23px", opacity:1}, time/2)
	$("#clients .company").delay(time*3/4).animate({top:"30px", opacity:1}, time*2/3).animate({top:"23px", opacity:1}, time/2);
	$("#clients .contacts").delay(time/10).animate({top:"30px", opacity:1}, time*2/3).animate({top:"23px", opacity:1}, time/2);
	$("#clients .clients").delay(time/2).animate({top:"30px", opacity:1}, time*2/3).animate({top:"23px", opacity:1}, time/2);
	$("span").each(function(i) {
		if(i == 0) $(this).animate({marginTop:"0px", height:"300px"}, time/2).delay(time/5);
		else $(this).delay(time/5).animate({marginTop:"0px", height:"300px"}, time*i/5);
	});
	$(".footer").animate({height:"25px"},time,function(){
		$(".cl").each(function(j) {
			$(this).animate({paddingLeft:"5px", opacity:1},time/2)
		});
		$(".cl1").each(function(j) {
			$(this).animate({paddingLeft:"5px", opacity:1},time/2)
		});
	});
	
	$(".nav ul li a").click(function(e){
		var link = $(this).attr('href');
		e.preventDefault();
		$(".nav ul li").each(function(k) {
			if(k == 0) $(this).animate({top:"60px"}, time/2).delay(time);
			else $(this).animate({top:"60px"}, time*k/2).delay(time);
		});
		$(".nav ul li a").fadeOut(time,function(){
			$(".cl").each(function(m) {
				$(this).animate({paddingLeft:"18px", opacity:0},time/2);
			});
			$(".cl1").each(function(s){
				$(this).animate({paddingRight:"20px",opacity:0}, time/2);
				if(s == 10){
					$(".footer").animate({height:"0px"},time,function(){
						$("span").each(function(n) {
							if(n == 0) $(this).animate({marginTop:"250px", height:"0px"}, time/2).delay(time/5);
							else $(this).delay(time/5).animate({marginTop:"250px", height:"0px"}, time*n/5);
							if(v == 11){
								window.location = link;
							}
							v = v+1;
						});
					});
				}
			});
		});	
	});
});
