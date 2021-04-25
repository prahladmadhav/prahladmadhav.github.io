$(document).ready(function(){
    $('.action-sub-master').click(function(){
        $('.sub-master').toggleClass('trig');
        if($('.sub-master').hasClass('trig')){
            $('.sub-master').text('Good Night!');
        }
        else{
            $('.sub-master').text('Good Morning!');
        }
    });
});