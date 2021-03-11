var vraag = document.getElementsByClassName("vraag");
var i;

for (i = 0; i < vraag.length; i++) {
    vraag[i].addEventListener("click", function () {
        this.classList.toggle("open");
        var antwoord = this.nextElementSibling;
        if (antwoord.style.maxHeight) {
            antwoord.style.maxHeight = null;
        } else {
            antwoord.style.maxHeight = antwoord.scrollHeight + "px";
        }
    });
}
