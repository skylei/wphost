$(document).ready(function(){
$('.logo').jrumble({
	rumbleSpeed: 0
});
$(".search-click").click(function(){$(".search-click").toggleClass("active");
$(".searchbox").fadeToggle(300)});
$(".wplist").click(function(){$(".nav").toggleClass("alternative");})

$(".box").hover(function(){
	$(this).find(".more").fadeIn(300)
	},
	function(){$(this).find(".more").fadeOut(300)});

$(".gotop").hide();$(window).scroll(function(){0<$(window).scrollTop()?$(".gotop").fadeIn(200):$(".gotop").fadeOut(200)});$(".gotop").click(function(){$("html,body").animate({scrollTop:"0px"},400)});$(".slide_container").hover(function(){$(".slide_nav").fadeIn(200)},function(){$(".slide_nav").fadeOut(200)});


$('.aboutauthor').jrumble({
	rumbleEvent: 'hover'
});
$('.logo').jrumble({
	rumbleEvent: 'hover'
});
if ($(document).scrollTop()==0){
	$(".topheader").addClass('tou')
}else{
	$(".topheader").removeClass('tou')
 };
});
$(document).scroll(function (){
if ($(document).scrollTop()==0){
	$(".topheader").addClass('tou')
}else{
	$(".topheader").removeClass('tou')
 }})
// 评论分页
$body=(window.opera)?(document.compatMode=="CSS1Compat"?$('html'):$('body')):$('html,body');
$('.page_navi a').live('click', function(e){
    e.preventDefault();
    $.ajax({
        type: "GET",
        url: $(this).attr('href'),
        beforeSend: function(){
            $('.page_navi').remove();
            $('.comments-container').remove();
            $('#loading-comments').slideDown(500);
        },
        dataType: "html",
        success: function(out){
            result = $(out).find('.comments-container');
            nextlink = $(out).find('.page_navi');
            $('#loading-comments').slideUp('fast');
            $('#loading-comments').after(result.fadeIn(500));
            $('.comments-container').after(nextlink);
        }
    });
});

$(function(){$("#slider").responsiveSlides({
	auto:true,
	pager:false,
	nav:true,
	speed:500,  
	pauseControls:true,
	namespace:"slide"
	})});
	

	
