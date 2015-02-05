$(document).ready(function(){


    $('.wr.white').css('background-image', 'url(http://31.media.tumblr.com/e7cd556f95d3b10c1c65d5d46ded36ea/tumblr_mzf88uEJ571s1t9sxo1_500.gif)');
    $('.wr.white').css('background-size', 'cover');

    // window load

    $('.browserTabs li:first-child').addClass('active');
    $('.browserTabs li.right').addClass('active');

    $(window).load(function(){
        $('.browserTabs li:first-child').addClass('active');
        $('.browserTabs li.right').addClass('active');
    });

    // window resize

    $(window).resize(function(){
        $('#iframe').css('height',$(window).height()-108);
    });

    // screenfull

    $('#toggle').click(function(){
        screenfull.toggle($('#container')[0]);
        return false;
    });

    // iframe

    $('#iframe').css('height',$(window).height()-108);

    $('.logo a').click(function(){
        $('.browserTabs li').removeClass('active');
        $('.browserTabs li:nth-child(1)').addClass('active');
        $('.browserTabs li.right').addClass('active');
    });

    $('.browserTabs li a').click(function(){
        $('.browserTabs li').removeClass('active');
        $('.browserTabs li.right').addClass('active');
        $(this).parent().addClass('active');
    });

    // menu

    $('.browserToolbar .menu').click(function(e){
        $('.popup, .tail').toggleClass('active');
         e.stopPropagation();
    });

    $('.popup, .tail').click(function(e){
        e.stopPropagation();
    });

    $('html, body, .iframe').click(function(){
        $('.popup, .tail').removeClass('active');
    });

    // targets

    $('[rel=external]').attr('target','_blank');
    $('[rel=canvas]').attr('target','canvasBrowser');

});

(function ($){
    $.rand = function (arg){
        if ($.isArray(arg)){
            return arg[$.rand(arg.length)];
        } else if (typeof arg == "number"){
            return Math.floor(Math.random() * arg);
        }
    };
})(jQuery);