// JavaScript Document
var callbackFormOpen = false;
var getQuoteOpen = false;
$(document).ready(function() {
	
	/* Callback form and Get a Quote Scripts Start */
	$(".callback-button").click(function() {
	  if  (getQuoteOpen) {
		$("#get-quote-container").animate({
		  top: "-525"
		}, 300, function() {
			getQuoteOpen = false;
		});
	  }
	   
	  if(callbackFormOpen == false){		
		  $("#request-a-callback-container").animate({
			left: "0"
		  }, 300, function() {
			callbackFormOpen = true;
		  });
	  }
	  
	  else{
		  $("#request-a-callback-container").animate({
			left: "-260"
		  }, 300, function() {
			callbackFormOpen = false;
		  });
	  }
	});
	
	$(".get-a-quote").click(function() {
		if (callbackFormOpen) {
		    $("#request-a-callback-container").animate({
			    left: "-260"
		      }, 300, function() {
			    callbackFormOpen = false;
		      });
		}
		$(".get-a-quote").css({"cursor":"default"});
		if (getQuoteOpen == false) {
		    $("#get-quote-container").animate({
		      top: "0"
		    }, 300, function() {
			    getQuoteOpen = true;
		    });
		} else {
		    $("#get-quote-container").animate({
			top: "-525"
		      }, 300, function() {
			      getQuoteOpen = false;
		      });
		}
	});
	
	$(".close-button").click(function() {	
		$(".get-a-quote").css({"cursor":"pointer"});	
		$("#get-quote-container").animate({
		  top: "-525"
		}, 300, function() {
			getQuoteOpen = false;
		});
	});
	
	$(".right .submit").mouseover(function() {	
		$(".right .submit").css({
		  "backgroundPosition": "0px -40px"
		});
	});
	
	$(".right .submit").mouseout(function() {	
		$(".right .submit").css({
		  "backgroundPosition": "0px 0px"
		});
	});
	/* Callback form and Get a Quote Scripts End */
	
	
	$('.view').mouseenter(function(){
		var maskFadeIn = $(this).find('.mask');
		var maskFadeInH3 = $(this).find('.mask h3');
		var maskFadeInP = $(this).find('.mask p');
		var maskBounceInA = $(this).find('.mask a');
		
		$(maskFadeIn).animate({opacity:1}, {duration:300, easing:"Strong.easeOut"});
		$(maskBounceInA).animate({opacity:1, bottom:8}, {duration:300, easing:"Bounce.easeOut"});
		$(maskFadeInH3).animate({opacity:1, left:10}, {duration:300, easing:"Strong.easeOut"});
		$(maskFadeInP).animate({opacity:1, left:10}, {duration:300, easing:"Strong.easeOut"});
	});
	
	$('.view').mouseleave(function(){
		var maskFadeOut = $(this).find('.mask');
		var maskFadeOutH3 = $(this).find('.mask h3');
		var maskFadeOutP = $(this).find('.mask p');
		var maskBounceOutA = $(this).find('.mask a');
		
		$(maskFadeOut).animate({opacity:0}, {duration:300, easing:"Strong.easeOut"});
		$(maskBounceOutA).animate({opacity:0, bottom:50}, {duration:300, easing:"Strong.easeOut"});
		$(maskFadeOutH3).animate({opacity:0, left:0}, {duration:300, easing:"Strong.easeOut"});
		$(maskFadeOutP).animate({opacity:0, left:0}, {duration:300, easing:"Strong.easeOut"});
	});
	
	/*Common Pop up timer */
	setTimeout(function(){
	    $("div.message").fadeOut("slow", function () {
		$("div.message").remove();
	    });
	}, 2000);
	
	$(".defaultText").focus(function (srcc) {
	    if ($(this).val() == $(this)[0].title) {
		$(this).removeClass("defaultTextActive");
		$(this).val("");
	    }
	});

	$(".defaultText").blur(function () {
	    if ($(this).val() == "" || $(this).val() == $(this)[0].title) {
		$(this).addClass("defaultTextActive");
		$(this).val($(this)[0].title);
	    }
	});

});

function showMessage(msg) {
    $('<div>', { 
	id: 'msgdiv'
    }).appendTo('body');
    $("#msgdiv").html("<div>" + msg + "</div>");
}
