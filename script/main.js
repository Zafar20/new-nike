$('#up').click(function(e) {
    e.preventDefault();
    setTimeout(() => {
        $('html,body').animate({
            scrollTop: 0
        },{
            duration: 1000
        })
    }, 250)
})