var btn_translate = document.querySelector("#btn-translate");
var ip_txt = document.querySelector("#ip-txt");
var outputTxt = document.querySelector("#output");

function onClick() {
    outputTxt.innerHTML = "sshdvkjdfhjk" + ip_txt.value;
}

btn_translate.addEventListener("click", onClick);