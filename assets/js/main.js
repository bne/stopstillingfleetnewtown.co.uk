(function(document) {
    var list = document.querySelector('#suggestions');
    for (var i = list.children.length; i >= 0; i--) {
        list.appendChild(list.children[Math.random() * i | 0]);
    }
})(document);
