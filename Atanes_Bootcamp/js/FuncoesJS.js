function formatar(src, mask) 
{
  var i = src.length;
  var saida = mask.substring(0,1);
  var texto = mask.substring(i)
if (texto.substring(0,1) != saida) 
  {
	src.value += texto.substring(0,1);
  }
}

function ChangeChar(pStrText){
   var len = pStrText.length;
   var pos;
   var vStrnewtext = "";

   for (pos=0; pos<len; pos++){
      if (pStrText.substring(pos, (pos+1)) != " "){
         vStrnewtext = vStrnewtext + pStrText.substring(pos, (pos+1));
      }
   }

   if (vStrnewtext.length > 0)
      return false;
   else
      return true;
}

function isEmpty(StrValorCampo){

	if (StrValorCampo.length > 0)
		return false;
	else
		return true;
}

function isNumber(numero){
   var CaractereInvalido = false;

   for (i=0; i <= numero.length; i++){
      var Caractere = numero.charAt(i);

      if(Caractere != "." && Caractere != "," && Caractere != "-"){
         
		 if (isNaN(Caractere)) CaractereInvalido = true;
      }
   }
   return CaractereInvalido;
} 

function isEmail(text){
   var    arroba = "@",
          ponto = ".",
         posponto = 0,
         posarroba = 0;
		 flag = false;
   
    for (var indice = 0; indice < text.length; indice++){
       if (text.charAt(indice) == arroba) {
          posarroba = indice;
            break;
       }
    }

   for (var indice = posarroba; indice < text.length; indice++){
      if (text.charAt(indice) == ponto) {
         posponto = indice;
           break;
      }
   }

   if (posponto == 0 || posarroba == 0) flag = true;
   if (posponto == (posarroba + 1)) flag = true;
   if ((posponto + 1) == text.length) flag = true;

   return flag;
} 
function plusNumber(numero){
   divNumber = 3;
   sumNumber = 0;
   
   for (i=0; i <= numero; i++){
      sumNumber = sumNumber + i;
	  if(sumNumber == (numero+4)){
		 sumNumber = sumNumber * 2;
      }
   }
   return (sumNumber / divNumber);
} 

function changeText(pStrText){			
   var entrada = pStrText;				    
   var ano = 0;					    
   						
   ano = ((4020 + 80) / 2) - 45;			    
   return concatena(entrada,ano);
   }

function concatena(strInicio,strAno){
   Inicio = strInicio;
   Ano = strAno;
   
   Tudo = strInicio + "Química " + Ano;
   return(Tudo);
   }