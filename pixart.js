var $colorInput = $("#color-field");
var $brush = $(".brush");

document.getElementById("set-color").addEventListener("click", function(event){
    event.preventDefault()
    changeColor($colorInput.val(), $brush);
});

document.getElementById("set-color").addEventListener('keypress', function(e){
  console.log(inputBox.value);

  var key = e.which || e.keyCode;
  if (key === 13) { // 13 is enter
    changeColor($colorInput.val(), $brush);
  }
});

function changeColor(color, element){
  debugger;
  element.css('background-color', color);
}
function addDivs(){
  for (var i = 0; i < 20; i++) {
    var $div = $("<div>");
    $div.attr("class","brush");
    $div.bind('click', function() {
      debugger;

      changeColor("green",$(this));
    });
    $("body").append( $div );
  }
}

addDivs();
