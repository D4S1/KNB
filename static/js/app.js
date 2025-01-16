var prevScrollpos = window.pageYOffset;

window.onscroll = function() {
  var currentScrollPos = window.pageYOffset;
  if (prevScrollpos > currentScrollPos) {
    document.getElementById("logo").style.top = "0px";
    document.getElementById("menu").style.top = "30px";
  } else {
    document.getElementById("logo").style.top = "-200px";
    document.getElementById("menu").style.top = "-200px";
  }
  prevScrollpos = currentScrollPos;
}