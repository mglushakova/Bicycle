var controls = document.querySelectorAll(".twits .controls span");
var slider = document.querySelector(".twits-list");

for ( var i = 0; i < controls.length; i++ ) {
  controls[i].addEventListener("click", function (event) {
    for ( var k = 0; k < controls.length; k++ ) {
      if ( controls[k].classList.contains("active") ) {
        controls[k].classList.remove("active");
        slider.children[k].classList.remove("twits-list-item-active");
      }

      if ( controls[k] === event.target ) {
        controls[k].classList.add("active");
        slider.children[k].classList.add("twits-list-item-active");
      }
    }
  });
}
