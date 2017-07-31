var $colorInput = $("#color-field");
var $brush = $(".brush");


document.getElementById("set-color").addEventListener("click", function(event){
    event.preventDefault()
    colorInput = $colorInput.val();
    $brush.css('background-color', colorInput);
    console.log($colorInput);
});
