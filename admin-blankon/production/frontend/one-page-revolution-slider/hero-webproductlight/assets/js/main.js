var BlankonSliderRevolutionHeroWebproductlight = function () {

    return {

        // =========================================================================
        // CONSTRUCTOR APP
        // =========================================================================
        init: function () {
            BlankonSliderRevolutionHeroWebproductlight.handlePreloader();
            BlankonSliderRevolutionHeroWebproductlight.handleScrollNav();
            BlankonSliderRevolutionHeroWebproductlight.handleAnimateElement();
            BlankonSliderRevolutionHeroWebproductlight.handleTestimonials();
            BlankonSliderRevolutionHeroWebproductlight.handleBackToTop();
        },

        // =========================================================================
        // SET UP BASE URL
        // =========================================================================
        handleBaseURL: function () {
            var getUrl = window.location,
                baseUrl = getUrl .protocol + "//" + getUrl.host + "/" + getUrl.pathname.split('/')[1];
            return baseUrl;
        },

        // =========================================================================
        // PRELOADER TRIGGER
        // =========================================================================
        handlePreloader: function () {
            setTimeout(function(){
                $('body').addClass('loaded');

                // Call banner with slider
                BlankonSliderRevolutionHeroWebproductlight.handleBanner();
            }, 3000);
        },

        // =========================================================================
        // NAVIGATION SCROLL
        // =========================================================================
        handleScrollNav: function () {
            //jQuery to collapse the navbar on scroll
            $(window).scroll(function() {
                if ($(".navbar").offset().top > 50) {
                    $(".navbar-fixed-top").addClass("top-nav-collapse");
                } else {
                    $(".navbar-fixed-top").removeClass("top-nav-collapse");
                }
            });

            //jQuery for page scrolling feature - requires jQuery Easing plugin
            $(function() {
                $('.page-scroll').bind('click', function(event) {
                    var $anchor = $(this);
                    $('html, body').stop().animate({
                        scrollTop: $($anchor.attr('href')).offset().top-80
                    }, 1500, 'easeInOutExpo');
                    event.preventDefault();
                });
            });

        },

        // =========================================================================
        // ANIMATION ELEMENT
        // =========================================================================
        handleAnimateElement: function () {
            new WOW().init();
        },

        // =========================================================================
        // BANNER SLIDER
        // =========================================================================
        handleBanner: function () {
            var tpj=jQuery;
            var revapi70;
            tpj(document).ready(function() {
                if(tpj("#rev_slider_70_1").revolution == undefined){
                    revslider_showDoubleJqueryError("#rev_slider_70_1");
                }else{
                    revapi70 = tpj("#rev_slider_70_1").show().revolution({
                        sliderType:"hero",
                        jsFileLocation: BlankonSliderRevolutionHeroWebproductlight.handleBaseURL()+"/assets/commercial/plugins/slider-revolution/revolution/js/",
                        sliderLayout:"fullwidth",
                        dottedOverlay:"none",
                        delay:9000,
                        navigation: {
                        },
                        responsiveLevels:[1240,1024,778,480],
                        gridwidth:[1400,1240,778,480],
                        gridheight:[768,768,960,720],
                        lazyType:"none",
                        parallax: {
                            type:"mouse+scroll",
                            origo:"slidercenter",
                            speed:2000,
                            levels:[1,2,3,20,25,30,35,40,45,50],
                            disable_onmobile:"on"
                        },
                        shadow:0,
                        spinner:"spinner2",
                        autoHeight:"off",
                        disableProgressBar:"on",
                        hideThumbsOnMobile:"off",
                        hideSliderAtLimit:0,
                        hideCaptionAtLimit:0,
                        hideAllCaptionAtLilmit:0,
                        debugMode:false,
                        fallbacks: {
                            simplifyAll:"off",
                            disableFocusListener:false,
                        }
                    });
                }
            });	/*ready*/
        },

        // =========================================================================
        // TESTIMONIALS
        // =========================================================================
        handleTestimonials: function () {
            (function($, window, document, undefined) {
                'use strict';

                // init cubeportfolio
                $('#js-grid-testimonials').cubeportfolio({
                    layoutMode: 'slider',
                    drag: true,
                    auto: false,
                    autoTimeout: 5000,
                    autoPauseOnHover: true,
                    showNavigation: false,
                    showPagination: true,
                    rewindNav: false,
                    scrollByPage: false,
                    gridAdjustment: 'responsive',
                    mediaQueries: [{
                        width: 1,
                        cols: 1
                    }],
                    gapHorizontal: 0,
                    gapVertical: 0,
                    caption: '',
                    displayType: 'default',
                });
            })(jQuery, window, document);
        },

        // =========================================================================
        // BACK TOP
        // =========================================================================
        handleBackToTop: function () {
            $('#back-top').hide();
            $(window).scroll(function () {
                if ($(this).scrollTop() > 100) {
                    $('#back-top').fadeIn();
                } else {
                    $('#back-top').fadeOut();
                }
            });
            // scroll body to 0px on click
            $('#back-top').click(function () {
                $('body,html').animate({
                    scrollTop: 0
                }, 800);
                return false;
            });
        }

    };

}();

// Call main app init
BlankonSliderRevolutionHeroWebproductlight.init();