let $select = document.querySelector("select");
let $en = document.querySelector(".en");
let $zh = document.querySelector(".zh");

function getLang() {
    let lang = new URLSearchParams(document.location.search).get("lang");
    if (lang == null) {
        lang = $select.options[$select.options.selectedIndex].value;
    }
    return lang;
}

function setLang(newLang) {
    let params = new URLSearchParams(document.location.search);
    params.set("lang", newLang);
    document.location.search = params.toString();
}

function render() {
    let lang = getLang();
    if (lang == "en") {
        $select.selectedIndex = 0;
        $en.style.display = "block";
        $en.classList.add("active");
        $zh.style.display = "none";
        $zh.classList.remove("active");
    } else if (lang == "zh") {
        $select.selectedIndex = 1;
        $zh.style.display = "block";
        $zh.classList.add("active");
        $en.style.display = "none";
        $en.classList.remove("active");
    }
}

render();
