
$(document).ready(function(){

    $('span[data-role=remove]').on('click', function(){
        $(this).parent().remove();
    } )

    $('input, textarea').focus(function() {
        $(this).parents('.form-group').addClass('onfocus');
    });

    $('input[type="radio"]').on('click', function() {
        $(this).parents('.form-group').addClass('onfocus');
    });

    $('input, textarea').focusout(function() {
        if($(this).val().length > 0){
            $(this).parents('.form-group').addClass('filled');
        }
        $(this).parents('.form-group').removeClass('onfocus');
    });

})
