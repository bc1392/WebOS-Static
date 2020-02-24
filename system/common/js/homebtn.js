$('.home-btn:not(.disabled)').click(function(e) {
    window.location.href = $(this).attr('href');
});