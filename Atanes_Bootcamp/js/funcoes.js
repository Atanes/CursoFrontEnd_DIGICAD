function PreencheCampo() {
    document.getElementById("campo1").value = "Hello Dolly!";
    document.getElementById("campo2").value = "How are you?";
}

function IncluirTexto() {
    document.getElementById("texto1").innerHTML = "Hello Dolly!";
    document.getElementById("texto2").innerText = "How are you?";
}

function ExcluirTexto() {
    document.getElementById("texto1").innerHTML = "";
    document.getElementById("texto2").innerText = "";
}

function ChamaBanner() {
    textoBanner = new String("Faz um efeito de banner para o paragrafo!");
    a = new String();
    c = new Number();
    anime();
}

function anime(){
    if(c < textoBanner.length){
        a = textoBanner[c];
        document.getElementById("banner").value += a;
        c++;
        setTimeout("anime()",500);
    }
}