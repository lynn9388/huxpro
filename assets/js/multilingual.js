var $select = document.querySelector("select");
var $zh = document.querySelector(".zh");
var $en = document.querySelector(".en");

function getLang() {
    return new URLSearchParams(document.location.search).get("lang");
}

function setLang(newLang) {
    var params = new URLSearchParams(document.location.search);
    params.set("lang", newLang);
    document.location.search = params.toString();
}

function render() {
    var lang = getLang();
    if (lang == "en") {
        $select.selectedIndex = 1;
        $en.style.display = "block";
        $en.classList.add("active");
        $zh.style.display = "none";
        $zh.classList.remove("active");
    } else {
        $select.selectedIndex = 0;
        $zh.style.display = "block";
        $zh.classList.add("active");
        $en.style.display = "none";
        $en.classList.remove("active");
    }
    generateCatalog(".catalog-body");
}

function onLanChange(index) {
    if (index == 0) {
        lang = "zh";
    } else {
        lang = "en";
    }
    setLang(lang);
}

render();
