let inp = document.querySelector("#fname");

inp.addEventListener("blur", function() {
    this.value = this.value.toUpperCase();
});
