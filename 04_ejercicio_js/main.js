$("document").ready(function(){
    $("#anuncio") .height(500)
    .width(500)
    .text("CLICK! para cambiar el color")
    .hide()
    .fadeIn(3000);
});

let colores = ["blue", "yellow","red", "grey", "green", "orange", "purple"];


$("#anuncio").on("click",function(){
    let color = colores [Math.floor(Math.random() * colores.length)];

    $("#anuncio").css("background-color", color );
});