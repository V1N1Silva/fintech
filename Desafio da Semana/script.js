function simular(){ 
    var nome = document.getElementById("nome").value;
    var mensalidade = parseInt(document.getElementById("mensalidade").value);
    var tempo = document.getElementById("tempo").value;
    var resultado = mensalidade * tempo;
    var texto = "Olá "+ nome + " se você guardar "+ mensalidade + " reais por "+ tempo+ " meses você vai obter "+ resultado + " reais."
    document.getElementById("conteudo").innerHTML = texto;
    document.getElementById("pag2").style.display = "block";
    document.getElementById("container").style.display = "none";
}
function voltar(){
    document.getElementById("pag2").style.display = "none";
    document.getElementById("container").style.display = "block";
}