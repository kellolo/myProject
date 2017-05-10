//VARIABLES
var scrolledY;
var mainScrHg = window.innerHeight;
var menuHeight = $('.stick_line').outerHeight();

/*
RESIZE=============================
*/

$(function(){
	$(window).resize(function(){
		mainScrHg = window.innerHeight;
	});
	$(window);
});


/*
*sticky_menu*======================
*/
$(function(){
	topToBottom();
	$(window).scroll(function(){
		scrolledY = $(window).scrollTop();
		if(mainScrHg - scrolledY <= menuHeight){
			$('.stick_line').css({'top': '0'});
			doFluid();
			//$('.helloText').addClass('hellotext_hidden');
		}

		else if(scrolledY < mainScrHg && scrolledY > 0){
			$(".stick_line").css({'bottom' : scrolledY, 'top':''});
			undoFluid();
		}

		else if(scrolledY < mainScrHg){
			$(".stick_line").css({'bottom' : '0', 'top':''});
			undoFluid();
		}
		/*parallax*/
		$('.helloText').css({
			'transform':'translate(0%, ' + scrolledY/5 + '%)',
			'opacity': 1 - scrolledY/900
		});

		topToBottom()
	});
	$(window);	
});

/*DROPDOWNED*/
$(function(){
	let hovered = false;
	$('.parent_menu').hover(
		function(){
			if(hovered == false){
				$(this).addClass('hovered');
				hovered = true;
			}
		else if(hovered == true){
			$(this).removeClass('hovered');
			hovered = false;
		}
		});	
});

/*ARROWS ADD*/

$(function(){
	var parent_menu = $('.parent_menu'), 
	parent_menu_child = $('.parent_menu').children('nav');
	if(parent_menu_child){
		parent_menu_child.parent().addClass('childrened');
	}
});

/*
*NAMED FUNCTIONS*==================
*/
function doFluid(){
	$('.menu_box').removeClass('col-md-12');
	$('.menu_box').addClass('col-md-8');
	$('.stick_line').removeClass('container');
	$('.login_form').removeClass('col-md-4 col-md-offset-6 col-xs-offset-6');
	$('.login_form').addClass('col-md-2');
	$('.stick_line').addClass('container-fluid col-md-12');
	$('.startpage_wrapper').append($('.header_3rdline'));
	$('.logotype').insertBefore($('.menu_box'));
	$('.login_form').insertAfter($('.menu_box'));
}
	
function undoFluid(){
	$('.menu_box').removeClass('col-md-8');
	$('.menu_box').addClass('col-md-12');
	$('.stick_line').removeClass('container-fluid col-md-12');
	$('.login_form').removeClass('col-md-2');
	$('.login_form').addClass('col-md-offset-6 col-xs-offset-6');
	$('.stick_line').addClass('container');
	$('.startpage').append($('.header_3rdline'));
	$('.header_1stline').append($('.logotype'));
	$('.header_1stline').append($('.login_form'));
}

/*MENU_TOP_TO_BOTTOM*/
function topToBottom(){
	let menu_position = $('.stick_line').css('top');
	if(menu_position == 0){
		alert(1);
	}
}

/*
*main scr*=========================
*/



