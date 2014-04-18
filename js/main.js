//NAVBAR - load navbar tpl and assign corrent active class
$.get("tpl/header_nav.tpl.html",function(data) {
    $('.container').prepend(data);
    var currentPage = document.location.href.match(/[^\/]+$/);
    $('.nav li').each(function() {
        if (currentPage == null && $(this).children('a').attr('href') == 'index.html') $(this).addClass('active');
        else if ($(this).children('a').attr('href') == currentPage) $(this).addClass('active');
    });
});
//Footer - load footer tpl and append to container
$.get("tpl/footer.tpl.html",function(data) {
    $('.container').append(data);
});
//back to top button appear/disappear
$('<button id="backToTop" type="button" class="btn btn-sm"><span class="glyphicon glyphicon-chevron-up"></span></button>')
    .appendTo('body')
    .addClass('hide');
//back to top button functionality
$(window).scroll(function() {
    var top = $(window).scrollTop();
    if (top >= 200) {
        $('#backToTop').removeClass('hide');
    }
    else {
        $('#backToTop').addClass('hide');
    }
});
$('#backToTop').click(function() {
   $('html,body').animate({ scrollTop: "0px" },"slow");
});