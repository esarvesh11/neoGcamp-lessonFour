var btnTranslate = document.querySelector("#btn-translate");
var ipTxt = document.querySelector("#ip-txt");
var outputTxt = document.querySelector("#output");

var serverURL = "https://lessonfourspi.tanaypratap.repl.co/translate/yoda.json";

function getTranslationURL(text) {
    return serverURL + "?" + text;
}

function clickHandler() {
    var inputText = ipTxt.value; //taking input

    //calling server for processing
    fetch(getTranslationURL(inputText))
    .then(response => response.json())
    .then(json => console.log(json))
}

btnTranslate.addEventListener("click", clickHandler);