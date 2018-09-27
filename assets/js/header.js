console.log("jaja")

$(window).scroll(function(){
    if($(window).scrollTop() >= 300){
        $('nav').addClass('site-fixed-header')
        $('nav div').addClass('visible-title')
    }
    else{
        $('nav').removeClass('site-fixed-header')
        $('nav div').removeClass('visible-title')
    }
})

