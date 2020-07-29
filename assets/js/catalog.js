function generateCatalog() {
    let catalog = $(".catalog-body")
    catalog.html("");

    // Interop with multilangual
    let P = $("div.post-container.active");
    if (P.length == 0) {
        P = $("div.post-container");
    }

    P.find("h1,h2,h3,h4,h5,h6").each(function () {
        n = $(this).prop("tagName").toLowerCase();
        i = "#" + $(this).prop("id");
        t = $(this).text();
        c = $('<a href="' + i + '" rel="nofollow">' + t + '</a>');
        l = $('<li class="' + n + '_nav"></li>').append(c);
        catalog.append(l);
    });
}

generateCatalog();

// Toggle side catalog
$(".catalog-toggle").click((function (e) {
    e.preventDefault();
    $(".side-catalog").toggleClass("fold");
}));

// jQuery One Page Nav
async("https://cdnjs.cloudflare.com/ajax/libs/jquery-one-page-nav/3.0.0/jquery.nav.min.js", function () {
    $('.catalog-body').onePageNav({
        currentClass: "active",
        changeHash: !1,
        easing: "swing",
        filter: "",
        scrollSpeed: 700,
        scrollOffset: 0,
        scrollThreshold: .2,
        begin: null,
        end: null,
        scrollChange: null,
        padding: 80
    });
});
