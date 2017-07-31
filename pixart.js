var $colorInput = $("#color-field");
var $brush = $(".brush");


document.getElementById("set-color").addEventListener("click", function(event){
    event.preventDefault()
    colorInput = $colorInput.val();
    $brush.css('background-color', colorInput);
});

document.getElementById("set-color")..addEventListener('keypress', function(e){
  console.log(inputBox.value);

  var key = e.which || e.keyCode;
  if (key === 13) { // 13 is enter
    colorInput = $colorInput.val();
    $brush.css('background-color', colorInput);
  }
});
