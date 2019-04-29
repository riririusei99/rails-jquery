window.addEventListener("load", function() {
  $("li").on("click", function() {
    console.log(this.id);
  });
});