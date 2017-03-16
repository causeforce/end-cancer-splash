$(document).ready(function(){
	
	initPage();//setup page view

	$('#ml-weekend').hover(function(){							  
		clearAll();	
		$('.ml-logo').show();
		$('.bennie-ml-weekend').show();		
		$('a.ml-self').css('color', '#151f6d');
		}, function() {
		$('.bennie-ml-weekend').hide();
		$('a.ml-self').css('color', '#fff');
	});
	$('#ml-oneday').hover(function(){							  
		clearAll();	
		$('.ml-logo-1').show();
		$('.bennie-ml-oneday').show();		
		$('a.ml-self').css('color', '#151f6d');
		}, function() {
		$('.bennie-ml-oneday').hide();
		$('a.ml-self').css('color', '#fff');
	});
	$('#pr16').hover(function(){							  
		clearAll();	
		$('.pr-logo').show();
		$('.bennie-pr16').show();		
		$('a.pr-self').css('color', '#151f6d');
		}, function() {
		$('.bennie-pr16').hide();
		$('a.pr-self').css('color', '#fff');
	});
	$('#pr17').hover(function(){							  
		clearAll();	
		$('.gen-logo').show();
		$('.bennie-pr17').show();		
		$('a.pr-self').css('color', '#151f6d');
		}, function() {
		$('.bennie-pr17').hide();
		$('a.pr-self').css('color', '#fff');
	});
	$('#br-oneday').hover(function(){							  
		clearAll();	
		$('.br-logo').show();
		$('.bennie-br').show();		
		}, function() {
		$('.bennie-br').hide();
	});
/*
	$('.button-option-br, .footer-button-option-br').hover(function(){							  
		clearAll();	
		$('.br-logo').show();
		$('.bennie-br').show();
		$('.button-option-br .desktop-nav-button-br').toggle();
		$('.button-option-br .desktop-label').toggleClass('active');		
	});

	$('.button-option-ml, .footer-button-option-ml').hover(function(){							  
		clearAll();	
		$('.ml-logo').show();
		$('.bennie-ml').show();		
		$('.button-option-ml .desktop-nav-button-ml').toggle();
		$('.button-option-ml .desktop-label').toggleClass('active');
	});

	$('.button-option-pr, .footer-button-option-pr').hover(function(){							  
		clearAll();	
		$('.pr-logo').show();
		$('.bennie-pr').show();		
		$('.button-option-pr .desktop-nav-button-pr').toggle();
		$('.button-option-pr .desktop-label').toggleClass('active');
	});
	
	$('.button-option-sy, .footer-button-option-sy').hover(function(){							  
		clearAll();	
		$('.sy-logo').show();
		$('.bennie-sy').show();		
		$('.button-option-sy .desktop-nav-button-sy').toggle();
		$('.button-option-sy .desktop-label').toggleClass('active');
	});
*/	
});//end on ready function

function initPage(){
	$('.gen-logo').show();
};

function clearAll(){
	clearlogos();
	clearBennies();
};

function clearlogos(){	
	$('.gen-logo, .br-logo, .ml-logo, .pr-logo, .sy-logo, .ml-logo-1').hide();
};

function clearBennies(){
	$('.bennie-br, .bennie-ml, .bennie-pr, .bennie-sy').hide();
};