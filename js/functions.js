$(document).ready(function(){

    // tumblr

    $.ajax({
        type: "GET",
        //url: "http://api.tumblr.com/v2/tagged?tag=gif",
        url: "http://api.tumblr.com/v2/blog/stream.setetres.st/posts/photo?offset=" + Math.floor(Math.random() * 501),
        dataType: "jsonp",
        data: {
            api_key: "TOkL9fw31Ighuo3zysLk5j1ZrksrJclrViAfXJReJdMrt2GYvf"
        }
    }).done(function(data){
        var url = $.rand(data.response.posts);
        var alt = url.photos[0].alt_sizes[0];
        url = alt.width == 1280 ? alt.url : url.photos[0].original_size.url;
        console.log(url);
        console.log($.rand(data.response.posts));
        $('.wr.white').css('background-image', 'url(' + url + ')');
        $('.wr.white').css('background-size', 'cover');
    });

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