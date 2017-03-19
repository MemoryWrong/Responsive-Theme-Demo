    /*
    * initiate the unslider plugin and set the parameters for the slider.
    * */
    $('.infinite-slider').unslider({
        infinite: true
    });

    /* use jquery to switch on or off the search bar */
    $('#search').click(function () {
        if($('input').css('display')=='none'){
            $('input').css('display','block');
        }else{
            $('input').css('display','none');
        }
    })