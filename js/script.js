var inputText = document.querySelector("#input-text");
var outputText = document.querySelector("#output");

var criptografar = document.querySelector(".btn-criptografar");
var descriptografar = document.querySelector(".btn-descriptografar");

function criptografarFunction() {
    var text = inputText.value;

    var result1 = text.replace(/e/g, "erTylDn8DT");
    var result2 = result1.replace(/i/g, "i32FHk42jmn");
    var result3 = result2.replace(/a/g, "asDCfg3sdFg");
    var result4 = result3.replace(/o/g, "opRD8kn2io5");
    var result5 = result4.replace(/u/g, "ujkE80R3dfeFgf");
    document.getElementById('output').innerHTML = '<textarea readonly id="text">' + result5 + '</textarea>'
    copiar();
}

function descriptografarFunction() {
    var text = inputText.value;

    var result1 = text.replace(/erTylDn8DT/g, "e");
    var result2 = result1.replace(/i32FHk42jmn/g, "i");
    var result3 = result2.replace(/asDCfg3sdFg/g, "a");
    var result4 = result3.replace(/opRD8kn2io5/g, "o");
    var result5 = result4.replace(/ujkE80R3dfeFgf/g, "u");
    document.getElementById('output').innerHTML = '<textarea readonly id="text">' + result5 + '</textarea>'
    copiar();
}

function copiar() {
    var texto = document.getElementById('text');

    texto.select();
    document.execCommand('copy');
    alert("Texto copiado para área de transferência.");
}