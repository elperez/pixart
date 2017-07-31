var $colorInput = $("#color-field");
var $brush = $(".brush");

document.getElementById("set-color").addEventListener("click", function(event){
    event.preventDefault()
    changeColor();
});

document.getElementById("set-color").addEventListener('keypress', function(e){
  console.log(inputBox.value);

  var key = e.which || e.keyCode;
  if (key === 13) { // 13 is enter
    changeColor();
  }
});

function changeColor(){
  colorInput = $colorInput.val();
  $brush.css('background-color', colorInput);
}
function addDivs(){
  for (var i = 0; i < 20; i++) {
    var $div = $("<div>");
     $("body").append( $div );
  }
}

addDivs();
