
$("#num-1").on("mouseover", function () {
    $(this).hide();
  $("#num-3").show();

  
})


$("#num-3").on("click", function () {
    $("#num-1").hide();
    $("#num-2").hide();
    $(this).hide();
  $("#num-4").show();


})

$("#num-4").on("click", function () {
    $("#num-4").hide();
    $("#num-1").show();
    $("#num-2").show();
})

$("#num-2").on("click", function () {
    $("#num-1").hide();
    $("#num-2").hide();
    $("#num-3").hide();
    $("#num-5").show();

})

$("#num-5").on("click", function () {

    $("#num-5").hide();
  $("#num-4").show();
})

$("#num-3").hide();

$("#num-4").hide();

$("#num-5").hide();

$("#num-3").on("mouseout", function () {
    
    if ($("#num-4").is(":visible")) {
        $(this).hide();
        $("#num-1").hide();
    }else{
    $(this).hide();
  $("#num-1").show();
    }

  
})