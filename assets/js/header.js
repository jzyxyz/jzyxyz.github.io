

$(window).scroll(function () {
    if ($(window).scrollTop() >= 300) {
        $('nav').addClass('site-fixed-header')
        $('nav div').addClass('visible-title')
    }
    else {
        $('nav').removeClass('site-fixed-header')
        $('nav div').removeClass('visible-title')
    }
})

document.addEventListener("DOMContentLoaded", function (event) {
    let loc = window.location.href;
    if (loc[loc.length - 1] == '/') {
        loc = loc.slice(0, -1)
    }
    let curlink = loc.substr(loc.lastIndexOf('/') + 1)
    console.log(curlink);
    
    if(curlink!="jinzhongyuan.xyz"){
        pageLinks = document.querySelectorAll('.page-link > a')
        pageLinks.forEach((link) => {
            if (link.href.includes(curlink)) {
                link.style.backgroundColor = "#EE836F"
                link.style.padding = "0.25rem"
            }
        })
    }
});

