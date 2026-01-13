document.querySelectorAll("a").forEach(link => {
  link.addEventListener("click", function(e) {
    if (this.getAttribute("href").includes(".html")) {
      e.preventDefault();
      document.body.style.animation = "pageOut 0.5s forwards";
      setTimeout(() => {
        window.location = this.href;
      }, 500);
    }
  });
});
