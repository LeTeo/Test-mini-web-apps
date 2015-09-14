$(document).ready(function () {
    $(".triggerleft").click(function () {
        $(".panelleft").toggle("fast");
        $(this).toggleClass("active");
        return false;
    });
});
$(document).ready(function () {
    $(".triggerright").click(function () {
        $(".panelright").toggle("fast");
        $(this).toggleClass("active");
        return false;
    });
});
$(document).ready(function () {
    $(document).on("click", ".tabs .tab-nav a", function () {
        var contentId = this.hash;
        $('.tab-nav a').removeClass("active");
        $(this).addClass("active");

        $('.tab-content .section').hide();

        $(contentId).fadeIn();
        $(".menu").fadeIn();
    });
});



$(document).ready(function () {
    $(document).on("click", "#loginright", function () {
        $(".panelright").toggle("normal");
        $(this).toggleClass("active");
        return false;
    });
});

$(document).ready(function () {
    $('.loginbutton').click(function (event) {
        event.preventDefault();
        var inputs = $('input');
        var isError = false;

        $('.inputframe').removeClass('error');
        $('.error-data').remove();
        for (var i = 0; i < inputs.length; i++) {
            var input = inputs[i];
            if ($(input).hasClass('logininput') && !validateRequired($(input).val())) {
                addErrorData($(input), "Заполните поле");
                isError = true;
            }
        }
        if (isError === false) {

            $('   <tr>                    <td>' + $('#textname').val() + '</td>                    <td>' + $('#textlogin').val() + '</td>                    <td>' + $('#textemail').val() + '</td>                </tr>').insertAfter(".insert");
            $('#textname').val('');
            $('#textemail').val('');
            $('#textlogin').val('');
            $('#textpassword').val('');
            var contentId = '#section1';
            $('.tab-nav a').removeClass("active");
            $('.tabs .tab-nav a[href=#section1]').addClass("active");

            $('.tab-content .section').hide();

            $(contentId).fadeIn();
            $(".menu").fadeIn();
        }
    });
});

function validateRequired(value) {
    var bool = true;
    if (value === "") bool = false;

    return bool;
}

function addErrorData(element, error) {
    element.parent().addClass("error");
    element.after("<div class='error-data'>" + error + "</div>");
}

