
(function ($) {
    "use strict";
    
    // Delete or Add has-val
    $('.input100').each(function(){
        $(this).on('blur', function(){
            if($(this).val().trim() != "") {
                $(this).addClass('has-val');
            }
            else {
                $(this).removeClass('has-val');
            }
        });
    });

    // Zapisivaem v input ob'ekti iz DOM
    var input = $('.validate-input .input100');

    $('.validate-form').on('submit', function() {
        var check = true;

        // Prohodimsya po kazdomu iz object, esli null => call showValidate() function
        for(var i=0; i<input.length; i++) {
            if(validate(input[i]) == false) {
                showValidate(input[i]);
                check=false;
            }
        }
        return check;
    });

    function validate (input) {
        if($(input).attr('name') == 'firstname' || $(input).attr('id') == 'fname')
        {
            if($(input).val().trim().match(/^([a-z]+[,.]?[ ]?|[a-z]+['-]?)+$/) == null)
            {
                return false;
            }
        } 
        else if ($(input).attr('name') == 'lastname' || $(input).attr('id') == 'lname')
        {
            if($(input).val().trim().match(/^([a-z]+[,.]?[ ]?|[a-z]+['-]?)+$/) == null)
            {
                return false;
            }
        }
        else if($(input).attr('name') == 'adult')
        {
            if($(input).val() == null)
            {
                return false;
            }
        }
        else if($(input).attr('name') == 'child')
        {
            //Parsim na null <select> (don't use trim(str) method cuz there is no any sting values)
            if($(input).val() == null)
            {
                return false;
            }
        }
        else if($(input).attr('type') == 'text' || $(input).attr('id') == 'checkdate')
        {
            if($(input).val().trim().match(/^\d{1,2}\/\d{1,2}\/\d{4}$/) == null)
            {
                return false;
            }
        }
    }

    $('.validate-form .input100').each(function() {
        $(this).focus(function(){
           hideValidate(this);
        });
    });

    // Validaciya vvedennih znachenij
    // function validate (input) {
    //     if(($(input).attr('type') == 'text') && ($(input).val().trim().match(/^\s*([A-Za-z]{1,}([\.,] |[-']|))+[A-Za-z]+\.?\s*$/) == null)) {
    //         return false;
    //     }
    //     else if(($(input).attr('name') == 'adult' || $(input).attr('name') == 'child') && $(input).val() == null)  {
    //         return false;
    //     }
    //     else if(($(input).attr('id') == 'checkdate') && ($(input).val().trim().match(/^\d{1,2}\/\d{1,2}\/\d{4}$/) == ''))  {
    //         return false;
    //     }
    // }

    // Nakidivaem na div alert-validate
    function showValidate(input) {
        var thisAlert = $(input).parent();

        $(thisAlert).addClass('alert-validate');
    }
    // Ubiraem na divi alert-validate
    function hideValidate(input) {
        var thisAlert = $(input).parent();

        $(thisAlert).removeClass('alert-validate');
    }

})(jQuery);