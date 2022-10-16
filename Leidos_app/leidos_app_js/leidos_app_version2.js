
  $(".ted-edit-launch").click(function() {
    $(this).parent().find(".address-frame").hide();
    $(this).parent().find(".address-form").show();
    $(this).parent().find(".ted-save").show();
    $(this).hide();
  
   });
 

   
   $(".ted-save").click(function() {
    $(this).parent().find(".address-frame").show();
    $(this).parent().find(".address-form").hide();
    $(this).parent().find(".ted-edit-launch").show();
    $(this).hide();
  
   });
 
 
 
 $(".btn-delete").click(function() {
  $(this).parent().find(".delete-controls-frame").show();
  $(this).parent().find(".ted-email").hide();
  $(this).hide();

 });



 $(".delete-no").click(function() {
  $(this).parent(".delete-controls-frame").hide();
  $(this).parents().find(".ted-email").show();
  $(this).parents().find(".btn-delete").show();
});

$(".delete-yes").click(function() {
 
});


$('.delete-yes').click(function(e) {
    $("#rad-btn").attr('data-num', function(_, curr) {
      return curr - 1 > 0 ? curr - 1 : 0;
    });
    alert("The selected record has been deleted.");
    $(this).parents(".card").hide();
  }); 
    
     

  $("#ted-edit-users").click(function () {
    $(".ted-edit-launch, #ted-edit-users-close").show();
    $(this).hide();
   });

   $("#ted-edit-users-close").click(function () {
    $("#ted-edit-users").show();
    $(".ted-edit-launch").hide();
    $(".address-frame").show();
    $(".address-form").hide();
    $(".ted-save").hide();
    $(this).hide();
   });

  


  $("#ted-launch-Add").click(function () {
    $('#tedModal').show();
 $("body").css("overflow", "hidden");
    
   });



$("#closeModal").click(function () {
$('#tedModal').hide();
$("body").css("overflow", "scroll");
});

  