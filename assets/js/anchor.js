// Async load function
function async(u, c) {
    var d = document,
        t = 'script',
        o = d.createElement(t),
        s = d.getElementsByTagName(t)[0];
    o.src = u;
    if (c) { o.addEventListener('load', function (e) { c(null, e); }, false); }
    s.parentNode.insertBefore(o, s);
}

// AnchorJS
async("https://cdnjs.cloudflare.com/ajax/libs/anchor-js/4.2.2/anchor.min.js", function() {
    anchors.options = {
        visible:   'hover'
    };
    anchors.add().remove('.intro-header h1').remove('.subheading').remove('.sidebar-container h5');
})
