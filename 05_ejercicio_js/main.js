$("document").ready(function(){
    $("#carrete").hide()

});

$(document).on("click",function(){
    $("h1").hide();
    $("#carrete").show();
});

// $("img").on("mouseover",function(){
//     $(this).css("widht", 300);
// });

$("img").on("mouseover",function(){
    $(this).attr("width" , 300 ) 
 });
 $("img").on("mouseout",function(){
    $(this).attr("width" ,250 ) 
 });