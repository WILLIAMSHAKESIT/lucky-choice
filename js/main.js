const layout = {
    modal(){
        $('body').append(`
            <div class="modal-wrapper">
                <div class="modal-container md box-container">
                    <div class="modal-header">
                        <span>Announcements</span>
                        <button class="close-modal btn btn-icon btn-danger">
                            <i class="fa-solid fa-xmark"></i>
                        </button>
                    </div>
                    <div class="modal-body">
                        <div class="accordion">
                            <div class="accord-item">
                                <div class="header">Title Here</div>
                                <div class="body">
                                    <span>Game Enhancements: Brace yourself for an immersive gaming experience with our upgraded selection of popular casino games. We've worked tirelessly to bring you enhanced graphics, smoother gameplay, and exciting new themes. Prepare to be captivated by the next level of entertainment!Game Enhancements: Brace yourself for an immersive gaming experience with our upgraded selection of popular casino games. We've worked tirelessly to bring you enhanced graphics, smoother gameplay, and exciting new themes. Prepare to be captivated by the next level of entertainment!Game Enhancements: Brace yourself for an immersive gaming experience with our upgraded selection of popular casino games. We've worked tirelessly to bring you enhanced graphics, smoother gameplay, and exciting new themes. Prepare to be captivated by the next level of entertainment!Game Enhancements: Brace yourself for an immersive gaming experience with our upgraded selection of popular casino games. We've worked tirelessly to bring you enhanced graphics, smoother gameplay, and exciting new themes. Prepare to be captivated by the next level of entertainment!Game Enhancements: Brace yourself for an immersive gaming experience with our upgraded selection of popular casino games. We've worked tirelessly to bring you enhanced graphics, smoother gameplay, and exciting new themes. Prepare to be captivated by the next level of entertainment!Game Enhancements: Brace yourself for an immersive gaming experience with our upgraded selection of popular casino games. We've worked tirelessly to bring you enhanced graphics, smoother gameplay, and exciting new themes. Prepare to be captivated by the next level of entertainment!</span>
                                </div>
                            </div>
                            <div class="accord-item">
                                <div class="header">Title Here</div>
                                <div class="body">
                                    <span>Game Enhancements: Brace yourself for an immersive gaming experience with our upgraded selection of popular casino games. We've worked tirelessly to bring you enhanced graphics, smoother gameplay, and exciting new themes. Prepare to be captivated by the next level of entertainment!Game Enhancements: Brace yourself for an immersive gaming experience with our upgraded selection of popular casino games. We've worked tirelessly to bring you enhanced graphics, smoother gameplay, and exciting new themes. Prepare to be captivated by the next level of entertainment!Game Enhancements: Brace yourself for an immersive gaming experience with our upgraded selection of popular casino games. We've worked tirelessly to bring you enhanced graphics, smoother gameplay, and exciting new themes. Prepare to be captivated by the next level of entertainment!Game Enhancements: Brace yourself for an immersive gaming experience with our upgraded selection of popular casino games. We've worked tirelessly to bring you enhanced graphics, smoother gameplay, and exciting new themes. Prepare to be captivated by the next level of entertainment!Game Enhancements: Brace yourself for an immersive gaming experience with our upgraded selection of popular casino games. We've worked tirelessly to bring you enhanced graphics, smoother gameplay, and exciting new themes. Prepare to be captivated by the next level of entertainment!Game Enhancements: Brace yourself for an immersive gaming experience with our upgraded selection of popular casino games. We've worked tirelessly to bring you enhanced graphics, smoother gameplay, and exciting new themes. Prepare to be captivated by the next level of entertainment!</span>
                                </div>
                            </div>
                            <div class="accord-item">
                                <div class="header">Title Here</div>
                                <div class="body">
                                    <span>Game Enhancements: Brace yourself for an immersive gaming experience with our upgraded selection of popular casino games. We've worked tirelessly to bring you enhanced graphics, smoother gameplay, and exciting new themes. Prepare to be captivated by the next level of entertainment!Game Enhancements: Brace yourself for an immersive gaming experience with our upgraded selection of popular casino games. We've worked tirelessly to bring you enhanced graphics, smoother gameplay, and exciting new themes. Prepare to be captivated by the next level of entertainment!Game Enhancements: Brace yourself for an immersive gaming experience with our upgraded selection of popular casino games. We've worked tirelessly to bring you enhanced graphics, smoother gameplay, and exciting new themes. Prepare to be captivated by the next level of entertainment!Game Enhancements: Brace yourself for an immersive gaming experience with our upgraded selection of popular casino games. We've worked tirelessly to bring you enhanced graphics, smoother gameplay, and exciting new themes. Prepare to be captivated by the next level of entertainment!Game Enhancements: Brace yourself for an immersive gaming experience with our upgraded selection of popular casino games. We've worked tirelessly to bring you enhanced graphics, smoother gameplay, and exciting new themes. Prepare to be captivated by the next level of entertainment!Game Enhancements: Brace yourself for an immersive gaming experience with our upgraded selection of popular casino games. We've worked tirelessly to bring you enhanced graphics, smoother gameplay, and exciting new themes. Prepare to be captivated by the next level of entertainment!</span>
                                </div>
                            </div>
                            <div class="accord-item">
                                <div class="header">Title Here</div>
                                <div class="body">
                                    <span>Game Enhancements: Brace yourself for an immersive gaming experience with our upgraded selection of popular casino games. We've worked tirelessly to bring you enhanced graphics, smoother gameplay, and exciting new themes. Prepare to be captivated by the next level of entertainment!Game Enhancements: Brace yourself for an immersive gaming experience with our upgraded selection of popular casino games. We've worked tirelessly to bring you enhanced graphics, smoother gameplay, and exciting new themes. Prepare to be captivated by the next level of entertainment!Game Enhancements: Brace yourself for an immersive gaming experience with our upgraded selection of popular casino games. We've worked tirelessly to bring you enhanced graphics, smoother gameplay, and exciting new themes. Prepare to be captivated by the next level of entertainment!Game Enhancements: Brace yourself for an immersive gaming experience with our upgraded selection of popular casino games. We've worked tirelessly to bring you enhanced graphics, smoother gameplay, and exciting new themes. Prepare to be captivated by the next level of entertainment!Game Enhancements: Brace yourself for an immersive gaming experience with our upgraded selection of popular casino games. We've worked tirelessly to bring you enhanced graphics, smoother gameplay, and exciting new themes. Prepare to be captivated by the next level of entertainment!Game Enhancements: Brace yourself for an immersive gaming experience with our upgraded selection of popular casino games. We've worked tirelessly to bring you enhanced graphics, smoother gameplay, and exciting new themes. Prepare to be captivated by the next level of entertainment!</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="modal-footer">
                    </div>
                </div>
            </div>
        `)
    }
}
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
    $(document).on('click','.accordion .accord-item',function(e){
        $(this).toggleClass('active')
        $(this).find('.body').toggle()
        $(this).siblings().find('.body').hide()
    })
    $('.notif').click(function(){
        layout.modal()
    })
    $(document).on('click','.close-modal',function(e){
        e.stopPropagation()
        $('.modal-wrapper').remove()
    })
    
    $('.dark-mode').click(function(){
        let el = $(this).find('i').data().theme
        if(el == 'dark'){
            $(this).html('<i class="fa-solid fa-sun" data-theme="light"></i>')
            $('body').addClass('light-mode')
            localStorage.setItem("theme", `${el}`);
        }else{
            $(this).html('<i class="fa-solid fa-moon" data-theme="dark"></i>')
            $('body').removeClass('light-mode')
            localStorage.setItem("theme", `${el}`);
        }
    })

    let theme = localStorage.getItem("theme");

    if(theme == 'dark'){
        $('body').addClass('light-mode')
        $(this).html('<i class="fa-solid fa-sun" data-theme="light"></i>')
        localStorage.setItem("theme", `${el}`);
    }else{
        $('body').removeClass('light-mode')
        $(this).html('<i class="fa-solid fa-moon" data-theme="dark"></i>')
        localStorage.setItem("theme", `${el}`);
    }
})