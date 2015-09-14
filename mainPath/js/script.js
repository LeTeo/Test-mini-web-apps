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
$(document).ready(function (){
    $(document).on("click", ".tabs .tab-nav a", function () {
        var contentId = this.hash;

        $('.tab-nav a').removeClass("active");
        $(this).addClass("active");

        $('.tab-content .section').hide();

        $(contentId).fadeIn();
        $(".menu").fadeIn();
    });
});

$(document).ready(function (){
    $(document).on("click", ".loginbutton", function (){
      $('   <tr>                    <td>'+$('#textname').val()+'</td>                    <td>'+$('#textlogin').val()+'</td>                    <td>'+$('#textemail').val()+'</td>                </tr>').insertAfter(".insert");
    });
});