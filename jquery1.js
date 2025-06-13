$(document).ready(function() {
$("#country").change(function() {
    var country = $(this).val();
    if (country !== 'India' && !country.includes('rgukt')) {
        $("#beer").show();
    } else {
        $("#beer").hide();
    }
});


$("input[name='paymenttype']").change(function () {
    $("#paymentinput").val("");
    $("#paymentinput").css("background-color", "");
    $("#paymentinput").show();
});
$("#days").on("input",function(){
    $(".nodays").show();
   var d= $("#days").val();
   var hotel = $('input[name="hotel"]:checked').val();
   var rate = (hotel === 'INuzvid' || hotel === 'IKadapa') ? 2000 : 3000;
   var cost = d* rate;
   $(".nodays").val("₹"+cost+"/-");
});
$("#clear").on("click",function(){
    $("#beer").hide();
    $("#paymentinput").hide();
    $(".nodays").hide();
    
});
var images = [
    "img1.jpg",
    "img2.jpg",
    "img3.jpg"
  ];
var index = 0;
function slider(){
$("#body").css("backgroundImage",`url(${images[index]})`);
$("#body").css("backgroundSize","cover");
$("#body").css("backgroundRepeat","no-repeat");
$("#body").css("transition","background-image 1s ease-in-out")
$("#body").css("height","90%");
index = (index + 1) % images.length;
};
slider();
    setInterval(slider, 3000);
});
$("#fform").on("submit", function(e) {
    e.preventDefault();
    let valid=true
    var username = $("#username").val().toUpperCase();
    $("#username").val(username);
    var regexpr = /^F[a-zA-Z]{3,8}$/;
    var usernamecheck = regexpr.test(username);

    if (!usernamecheck) {
        $("#username").css('background-color', 'red');
        valid=false;
    } else {
        $("#username").css('background-color', '');
    }


    var email=$("#email").val();
    var regeexpr=/^[^@]+@[^@]+\.(com|in|net|edu)$/;
    var emailcheck=regeexpr.test(email);
    if(!emailcheck){
        $("#email").css('background-color', 'red');
        valid=false;
    }
    else{
         $("#email").css('background-color', '');
    }


    var mobile=$("#mobile").val();
    var regmexpr=/^977\d{7}$/;
    var mobilecheck=regmexpr.test(mobile);
    if(!mobilecheck){
        $("#mobile").css('background-color', 'red');
        valid=false;
    }
    else{
         $("#mobile").css('background-color', '');
    }


    var Payment = $("input[name='paymenttype']:checked").val();
    var paymentvalue = $("#paymentinput").val().trim();

    if (Payment === "dd") {
        var regexprDD = /^SBIN.{4}$/;
        if (!regexprDD.test(paymentvalue)) {
            $("#paymentinput").css("background-color", "red");
            valid=false;
        } else {
            $("#paymentinput").css("background-color", "");
        }
    } else if (Payment === "account") {
        var regexprAccount = /^\d{11}$/;
        if (!regexprAccount.test(paymentvalue)) {
            $("#paymentinput").css("background-color", "red");
            valid=false;
        } else {
            $("#paymentinput").css("background-color", "");
        }
    }
    var serviceSelected = $("input[name='service']:checked").length > 0;
    if (!serviceSelected) {
        alert("Please select at least one accommodation service.");
        valid = false;
    }
    if(!Payment){
        alert("Please select a payment type.");
        valid = false;
    }
    if(valid){
        
        window.location.href="success.html";
    }
});