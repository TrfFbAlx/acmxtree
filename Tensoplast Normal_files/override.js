/**
 * Created by desar06 on 02/10/2018.
 */

$(window).scroll(function () {
    if($(window).width() > 1199){
        if ($(this).scrollTop() >= 20 ) {
            stickyOn();
        } else {
            stickyOff();
        }
    }else{
        if ($(this).scrollTop() >= 30 ) {
            $(".header-mobile .container").css("position","fixed");
        } else {
            $(".header-mobile .container").css("position","initial");
        }
    }
});


$( document ).ready(function() {
    if($(window).width() <= 1199){
        $(".header-mobile-right-user").append($(".header_user_info"));
        /*cargamos los productos del carrito*/
        $(".header-mobile-right-cart .ajax_cart_quantity").text($("#header .shopping_cart .ajax_cart_quantity").text());
        $(".primary_block h1").after($(".av_product_award"));
       /* $(".our_price_display").after($(".iva-incluido"));*/
        $(".header-mobile").append($("#layer_cart"));
        $(".header-mobile").append($(".layer_cart_overlay"));
        $("#more_info_block").before($("#video-producto"));
        $(document).on('touchstart', '#lgpie_block div.container', function(){
            toggleItemFooterMobile(this);
        })

        $(".header-mobile-search").append($("#search_block_top"));
    }
});

$(document).on('touchstart', '.header-mobile-left-menu', function(e){
    MenuResponsive();
})

$(document).on('touchstart', '.header-mobile-left-search', function(e){
    elemento = $(".header-mobile-search");

    if(elemento.css('display') == 'none'){
        elemento.show();
    }else{
        elemento.hide();
    }

})


$(document).on('submit', '#add_address', function(e){
    var phone_mobile = $("#phone_mobile").val();
    var phone = $("#phone").val();

    if(phone_mobile.length == 0 && phone.length == 0){
        alert(" Debe registrar al menos un número telefónico");
        e.preventDefault();
    }
})


$(document).on('' +
    '', '.header-mobile-right-user', function(e){
    location.href = "https://www.fisiomarket.com/mi-cuenta"
})

$(document).on('touchstart click', '.header-mobile-right-cart', function(e){
    location.href = "https://www.fisiomarket.com/carrito"
})

$(document).on('touchstart click', '.sticky #categories_block_left .title_block', function(e){
    $('.sticky #categories_block_left .block_content').toggle();
})

$(document).on('touchstart click', '#box-toggle-stripe', function(e){
    $('.cart-stripe-official').slideToggle();
})


/*
function toggleItemFooterMobile(e){
    console.log(e);
    var id = e.id;
    var selector = "#"+id+" p a";
    var selector_after = "#"+id+" p strong";

    if($(selector).css('display') == 'none'){
        $(selector).show();
        $(selector_after).addClass('abierto');
    } else {
        $(selector).hide();
        $(selector_after).removeClass('abierto');
    }
}*/

function MenuResponsive(){
    var elemento = $(".header-mobile-categorias #categories_block_left");

    if(elemento.css('display') == 'none'){
        elemento.show();
        $(".header-mobile-left-menu").addClass("abierto");
    }else{
        elemento.hide();
        $(".header-mobile-left-menu").removeClass("abierto");
    }
}

function stickyOn(){
    /*$("header .nav nav").addClass('sticky');
    $(".header").hide();
    $("#contact_block").append($("#searchbox"));
    $(".sticky #categories_block_left .title_block").text("Productos");
    $(".sticky #categories_block_left .block_content").hide();
    $("#contact_block").prepend($("ul.menu-content"));*/
    $("header .nav").hide();
    $("header").addClass('sticky-top-header');
}

function stickyOff(){
/*    $("header .nav nav").removeClass('sticky');
    $(".header").show();
    $("#search_block_top").append($("#searchbox"));
    $("#block_top_menu").prepend($("ul.menu-content"));*/
    $("header .nav").show();
    $("header").removeClass('sticky-top-header');
}


/*** carrusel productos ***/

$(document).ready(function () {
    if ($('.swiper-container').length) {
        var swiper = new Swiper('.swiper-container', {
            slidesPerView: 5,
            spaceBetween: 0,
            loop: false,
            simulateTouch: false,
            pagination: {
                el: '.swiper-pagination',
                clickable: true,
            },
            navigation: {
                nextEl: '.swiper-button-next',
                prevEl: '.swiper-button-prev',
            },
            breakpoints: {
                991: {
                    slidesPerView: 5,
                },
                767: {
                    slidesPerView: 3,
                },
                575: {
                    slidesPerView: 2,
                },

                320: {
                    slidesPerView: 2,
                },
            }
        });
    }
});


/*** authentication ***/

$(document).ready(function () {
    $(document).on('click', 'h3.page-subheading.register', function () {

        $(this).addClass('active');
        $('h3.page-subheading.login').removeClass('active');
        $('#create-account_form').addClass('open');
    });
});

$(document).ready(function () {
    $(document).on('click', 'h3.page-subheading.login', function () {
        $(this).addClass('active');
        $('h3.page-subheading.register').removeClass('active');
        $('#create-account_form').removeClass('open');
    });
});

/*** faq ***/

$(document).ready(function () {
    $(document).on('click', '.faqItem', function () {
        $(this).toggleClass('active');
    });
});


/*** pie accordeon ***/

$(document).ready(function () {
    $(document).on('touchstart', '#lgpie_block .container h3', function () {
        $(this).parent().toggleClass('open');
    });
});


/*** mobile lang ***/
$(document).ready(function () {
    $(document).on('click', '.header-mobile-left-search', function () {
        $('.header-mobile-search').toggleClass('open');
        $('body').toggleClass('search-open');
    });
});


/*** mobile searh ***/

$(document).ready(function () {
    $(document).on('click', '.header-mobile-right #languages-block-top div.current', function () {
        $('ul.languages-block_ul.toogle_content').toggleClass('open');

    });
});


/*** mobile submenu ***/

$(document).ready(function () {
    $(document).on('click', '.header-mobile-left-menu', function () {
        $('.header-mobile-categorias').toggleClass('open');
        $('body').toggleClass('menu-open');
    });
});

$(document).ready(function () {
    $(document).on('touchstart', '.header-mobile-categorias .shop-phone', function () {
        $('.header-mobile-categorias .shop-timing').toggleClass('open');
        $(this).toggleClass('open');
    });
});


$(document).ready(function () {
    $(document).on('click', '.grower.OPEN', function () {
        $(this).parent().addClass('open');
    });
});

$(document).ready(function () {
    $(document).on('click', '.grower.CLOSE', function () {
        $(this).parent().removeClass('open');
    });
});



/*** ancla opiniones ***/

$(document).ready(function () {
    $(document).on('click', 'a#AV_button2', function () {
        $('#tab_avisverifies').click();
    });
});

/*** subcategorías ***/



    $(document).on('touchstart', '#opensubcategories', function (e) {
        $(this).parent().toggleClass('open');
    });




/*** filtros ***/

$(document).ready(function () {
    $(document).on('touchstart', 'p.filtros', function () {
        $('body').toggleClass('open-filters');
    });
});

$(document).ready(function () {
    $(document).on('click', '.PM_ASCriterionsGroupName', function () {
        $(this).parent().parent().toggleClass('close');
    });
    $("#formcontacto").submit(function() {
        var phone = $("#phone").val();
        var message = $("#message").val();
        var final_message = message+' - Tlf:'+phone;
        $("#message").val(final_message);
        return true;
    });
});
























