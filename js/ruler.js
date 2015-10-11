$(document).ready(function(){

  // create ruler HTML for the DOM
  var ruler    = '<div class="col-md-3 ruler">'+
                    '<div class="line w-full"></div>'+
                    '<div class="line w-3x"></div>'+
                    '<div class="line w-xxs"></div>'+
                    '<div class="line w-3x"></div>'+
                    '<div class="line w-3x"></div>'+
                    '<div class="line w-xs"></div>'+
                    '<div class="line w-3x"></div>'+
                    '<div class="line w-3x"></div>'+
                    '<div class="line w-xxs"></div>'+
                    '<div class="line w-3x"></div>'+
                    '<div class="line w-3x"></div>'+
                 '</div>';

  var clearfix = '<div class="clearfix"></div>';

  $(".experience").each(function() {
    // set HTML to the DOM
    $(this).before($(ruler)); $(this).after($(clearfix));
  });

});
