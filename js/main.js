$(document).ready(function(){
    $('.owl-carousel').owlCarousel({
        loop:true,
        margin:10,
        nav:true,
        autoplay:true,
        autoplayTimeout:3000,
        autoplayHoverPause:true,
        responsive:{
            0:{
                items:1
            },
            600:{
                items:1
            },
            1000:{
                items:1
            }
        }
    })
    $('.games-slide').owlCarousel({
        loop:true,
        margin:10,
        nav:true,
        autoplay:true,
        autoplayTimeout:3000,
        autoplayHoverPause:true,
        responsive:{
            0:{
                items:1
            },
            600:{
                items:3
            },
            1000:{
                items:5
            }
        }
    })
    $('input').on('input', function() {
        let el = $(this).siblings('.show-pass')
        if( $(this).val().length > 0 ) {
            el.css('display','flex')
        }else{
            el.hide()
        }
    });
    $('.show-pass').click(function(){
        let el = $(this).find('i').data().pass
        let elInput = $(this).siblings('input')
        if(el == 'show'){
            $(this).siblings(elInput).attr('type','password');
            $(this).html('<i class="fa-solid fa-eye-slash" data-pass="hide"></i>')
        }else{
            $(this).siblings(elInput).attr('type','text');
            $(this).html('<i class="fa-solid fa-eye" data-pass="show"></i>')
        }
    })
})