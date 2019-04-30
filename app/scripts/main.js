
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

    $('.switch input').on('change', function(){
        $(this).parents('td').next().find('.checkbox input').prop('checked', false);
        $(this).parents('td').next().find('.checkbox').toggleClass('hidden');
    })

    $('.switch').each(function(){
        if($(this).find('input').attr('checked') == 'checked'){
            $(this).parents('td').next().find('.checkbox').toggleClass('hidden');
        }
    })

    $('.datepicker').datepicker({
        language: 'it'
    });

})
