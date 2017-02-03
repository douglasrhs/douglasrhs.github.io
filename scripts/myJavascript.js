$(document).ready(function () {
    $("#pabout").fadeOut('fast');
    $('.div-briefs').fadeOut('fast');
    $("#pskills").fadeOut('fast');
    $(".skills").fadeOut('fast');
    $("#pcontact").fadeOut('fast');
    $(".contact-div").fadeOut('fast');

    
});


$(window).scroll(function () {
    nScrollPosition = $(window).scrollTop();
    if (nScrollPosition >= 100) {
        $("#pabout").fadeIn('slow');
        //$('#pabout').css('visibility', 'visible');
    };// else {
        //$("#pabout").fadeOut('slow');
        //$('$pabout').css('visibility', 'hidden');
    //};
    if (nScrollPosition >= 200) {
        $('.div-briefs').fadeIn('slow');
    };// else {
        //$('.div-briefs').fadeOut('slow');
    //};

    if (nScrollPosition >= 700) {
        $("#pskills").fadeIn('slow');        
    };// else {
        //$("#pskills").fadeOut('slow');       
    //};

    if (nScrollPosition >= 800) {
        $(".skills").fadeIn('slow');
    };// else {
        //$(".skills").fadeOut('slow');
    //};

    if (nScrollPosition >= 930) {
        $("#pcontact").fadeIn('slow');
    }; //else {
        //$("#pcontact").fadeOut('slow');
    //};

    if (nScrollPosition >= 1000) {
        $(".contact-div").fadeIn('slow');
    };// else {
      //  $(".contact-div").fadeOut('slow');
    //};
});