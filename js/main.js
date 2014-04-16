//NAVBAR - load navbar tpl and assign corrent active class
$('#navbar').load('tpl/header_nav.tpl.html',function() {
    var currentPage = document.location.href.match(/[^\/]+$/);
    $('.nav li').each(function() {
	if (currentPage == null && $(this).children('a').attr('href') == 'index.html') $(this).addClass('active');
	else if ($(this).children('a').attr('href') == currentPage) $(this).addClass('active');
    });
});
