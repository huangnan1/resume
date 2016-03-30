/**
 * Created by Orange on 2016/1/29.
 */


var navUl = document.getElementById("navMenus");
var navLis = navUl.getElementsByTagName("li");
var ary = utils.getElementsByClass("isdrop", navUl);
var topTimer = null;
for (var i = 0; i < ary.length; i++) {
    ary[i].divHeight = utils.getCss(ary[i].getElementsByTagName("div")[1], "height");
    ary[i].onmouseenter = function () {
        window.clearTimeout(topTimer);
        var _this = this;
        topTimer = setTimeout(function () {
            utils.addClass(_this, "cur");
            var odiv = _this.getElementsByTagName("div")[1];
            var curHeight = utils.getCss(odiv, "height");
            odiv.style.height = 0;
            odiv.style.display = "block";
            animate(odiv, {height: curHeight}, 150);
        }, 300);
    };

    ary[i].onmouseleave = function () {
        window.clearTimeout(topTimer);
        utils.removeClass(this, "cur");
        var odiv = this.getElementsByTagName("div")[1];
        var curHeight = this.divHeight;
        animate(odiv, {height: 0}, 200, function () {
            odiv.style.display = 'none';
            odiv.style.height = curHeight + "px";
        });
    }
}


(function () {
    var publishMenus = document.getElementById("publishMenus");
    var _lis = publishMenus.getElementsByTagName("li");
    publishMenus.uls = utils.nextAll(publishMenus);
    for (var i = 0; i < _lis.length; i++) {
        _lis[i].onmouseenter = function () {
            reset();
            var index = utils.getIndex(this);
            utils.addClass(publishMenus.uls[index], "cur");
        }
    }

    publishMenus.onmouseleave = reset;

    function reset() {
        for (var i = 0; i < publishMenus.uls.length; i++) {
            utils.removeClass(publishMenus.uls[i], "cur");
        }
    }


})();

