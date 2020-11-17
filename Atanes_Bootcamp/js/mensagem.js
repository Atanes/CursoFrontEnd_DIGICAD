function Enviar() {
	var nome = document.getElementById("nomeid");
	var formulario = document.getElementsByName("meu_form")
	if (nome.value != "") {
		alert('Obrigado sr(a) ' + nome.value + ' os seus dados foram encaminhados com sucesso');
		formulario.reset;
	}
	document.getElementById("nomeid").focus();
} 
