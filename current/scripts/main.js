jQuery(document).ready(function($) {
    var isLateralNavAnimating = false;

    //open/close lateral navigation
    $('.cd-nav-trigger').on('click', function(event) {
        event.preventDefault();
        //stop if nav animation is running 
        if (!isLateralNavAnimating) {
            if ($(this).parents('.csstransitions').length > 0) isLateralNavAnimating = true;

            $('body').toggleClass('navigation-is-open');
            $('.cd-navigation-wrapper').one('webkitTransitionEnd otransitionend oTransitionEnd msTransitionEnd transitionend', function() {
                //animation is over
                isLateralNavAnimating = false;
            });
        }
    });

});


window.onload = () => {
    // $(".thumb").css({height: '370px'})
    $(".project:nth-child(odd) img").css({ height: $(".project-content-container")[0].scrollHeight + 'px' })



    //bottom image + footer
    $(".descImg").css({ top: $(".page-desc").last().offset().top + 'px' })
    $(".descImg").css({ height: $(".page-desc").last()[0].offsetHeight + $(".site-footer")[0].clientHeight + 'px' })

    // about image 


    $(".descImg1").css({ top: $(".page-desc").first().offset().top + 'px' })
    $(".descImg1").css({ height: $(".page-desc")[0].offsetHeight + 'px' })



};

$(function() {

    var timer_id;

    $(window).resize(function() {

        clearTimeout(timer_id);

        timer_id = setTimeout(function() {

            $(".project:nth-child(odd) img").css({ height: $(".project-content-container")[0].scrollHeight + 'px' })


            $(".descImg").css({ top: $(".page-desc").last().offset().top + 'px' })
            $(".descImg").css({ height: $(".page-desc").last()[0].offsetHeight + $(".site-footer")[0].clientHeight + 'px' })



            $(".descImg1").css({ top: $(".page-desc").first().offset().top + 'px' })
            $(".descImg1").css({ height: $(".page-desc")[0].offsetHeight + 'px' })



        }, 300);
    });
});

$(window).resize = () => {
    console.log('hit')


};




! function(a) {
    "use strict";
    a(document).ready(function() {
        function b() {
            window.location = i
        }
        var e = a(".site-title"),
            f = a("body");
        setTimeout(function() {
            f.addClass("loaded")
        }, 150);
        var g = a(".project-assets").children("div");
        a.each(g, function(b, c) {
            var d = a(this);
            d.imagesLoaded(function() {
                setTimeout(function() {
                    d.addClass("loaded")
                }, 50 + 150 * b)
            })
        });
        var h = a(".projects-feed .project");
        a.each(h, function(b, c) {
            var d = a(this);
            d.imagesLoaded(function() {
                setTimeout(function() {
                    d.addClass("loaded")
                }, 50 + 50 * b)
            })
        });
        var i;
        a("a").on("click", function(a) {
            return "" == this.href || null == this.href ? void a.preventDefault() : void(-1 == this.href.indexOf("#") && -1 == this.href.indexOf("mailto:") && -1 == this.href.indexOf("javascript:") && "_blank" != this.target && (a.preventDefault(), i = this.href, f.removeClass("loaded"), setTimeout(b, 250)))
        })
    })
}(window.jQuery);