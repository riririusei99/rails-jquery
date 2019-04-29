function printHelloWithButton() {
  var btn = document.querySelector("input");

  function printHello() {
    console.log("Hello World dayo.");
  }
  btn.addEventListener("click", printHello);
}

window.addEventListener("load", printHelloWithButton);




