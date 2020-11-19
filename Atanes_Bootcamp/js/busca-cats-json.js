var xmlhttp = new XMLHttpRequest();
xmlhttp.onreadystatechange = function () {
    if (this.readyState == 4 && this.status == 200) {
        montaPagina(this.responseText);
    }
};
xmlhttp.open("GET", "https://cdn.statically.io/gh/Atanes/CursoFrontEnd_DIGICAD/0ba3930/Atanes_Bootcamp/AJAX_JSON/cats.json", true);
xmlhttp.send();

function montaPagina(json) {
    var myObj = JSON.parse(json);
    var nomeGato;
    var imagem = new Image;
    var texto;
    for (var i = 0; i < myObj.length; i++) {
        nomeGato = myObj[i]['codeNames'][0];
        imagem.src = myObj[i]['imageLink'];
        texto = myObj[i]['altText'];
        document.getElementById("cards").innerHTML += montaCard(nomeGato, imagem, texto);
    }
}
function montaCard(nomeGato, imagem, texto) {
    var card = "<div class='card m-2' style='width: 18rem;'>" +
        "<img src='" + imagem.src + "' class='card-img-top' alt='...'>" +
        " <div class='card-body'>" +
        "<h5 class='card-title'>" + nomeGato + "</h5>" +
        "<p class='card-text'>" + texto + "</p>" +
        "</div></div>"
    return card;
}