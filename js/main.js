//NAVBAR - load navbar tpl and assign corrent active class
$('#navbar').load('tpl/header_nav.tpl.html',function() {
    var currentPage = document.location.href.match(/[^\/]+$/)[0];
    $('.nav li').each(function() {
        if ($(this).children('a').attr('href') == currentPage) $(this).addClass('active');
    });
});
