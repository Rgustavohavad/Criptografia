   alert("ola vida");
      
var texto = document.getElementById("entrada");
               
function criptografar(){
    var entrada = texto.value;
    var cripto = entrada.replace(/e/g, "@@@");
    document.getElementById("descriptografar").innerHTML= '<textarea id="copiar" cols="50" rows="05">'+ cripto + '</textarea><br><button onclick="" id="copia">copiar</button>';
 }
   
    
