//NAVBAR - load navbar tpl and assign corrent active class
$('body :after').load('tpl/header_nav.tpl.html',function() {
    var currentPage = document.location.href.match(/[^\/]+$/);
    $('.nav li').each(function() {
	if (currentPage == null && $(this).children('a').attr('href') == 'index.html') $(this).addClass('active');
	else if ($(this).children('a').attr('href') == currentPage) $(this).addClass('active');
    });
});
//back to top button
$('<button id="backToTop" type="button" class="btn btn-sm"><span class="glyphicon glyphicon-chevron-up"></span></button>')
    .appendTo('body')
    .addClass('hide');
$(window).scroll(function() {
    var top = $(window).scrollTop();
    if (top >= 300) {
        $('#backToTop').addClass('show');
    }
    else {
        $('#backToTop').removeClass('show');
    }
});
$('#backToTop').click(function() {
   $('html,body').animate({ scrollTop: "0px" },"slow");
});
