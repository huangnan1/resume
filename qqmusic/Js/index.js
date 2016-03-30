/**
 * Created by Orange on 2015/12/22.
 */


var oUl = document.getElementById('nav');
var oLi = oUl.children;
//菜单li切换事件
for (var i = 0; i < oLi.length; i++) {
    oLi[i].index = i;
    oLi[i].onmousemove = function () {
        menuswitch(this.index);
    }
}

/*搜索框事件处理*/
var searchText=document.getElementById('search-text');
searchText.onfocus=function(){
    console.dir(this);
    if(this.value=='找到好音乐')
    {
        this.value=''
    }
    this.parentNode.classList.add('focued');
};
searchText.onblur=function(){
    if(this.value=='')
    {
        this.value='找到好音乐'
    }
    this.parentNode.classList.remove('focued');
}
//onfocus="if(this.value=='找到好音乐'){this.value=''};console.dir(this);this.parentNode.classList.add('focued');"
//onblur="if(this.value==''){this.value='找到好音乐'};this.parentNode.classList.remove('focued');"

//浮动窗口关闭事件
var closeBtn = document.getElementById('close');
closeBtn.onclick = function () {
    document.getElementsByClassName('floating')[0].style.display = 'none';
}

//大banner轮播
var bannerUl = document.getElementById('bigBanner');
var oLis = bannerUl.getElementsByTagName('li');
var bannerDiv=document.getElementById('banner-wrap');

bannerDiv.onmouseover = function () {
    clearInterval(Carousel);
};
bannerDiv.onmouseout = function () {
    Carousel = setInterval("nextBanner('next')", 2000);
}


var oBtns = document.getElementById('bannerBtn').getElementsByTagName('a');
for (var i = 0; i < oBtns.length; i++) {
    oBtns[i].index = i;
    oBtns[i].onmouseover = function () {
        for (var i = 0; i < oBtns.length; i++) {
            oBtns[i].className = null;
            oLis[i].className = null;
            if (this.index == i) {
                oBtns[i].className = 'active';
                oLis[this.index].className = 'active';
            }
        }
    }
}
var leftBtn = document.getElementById('previousImg');
var rightBtn = document.getElementById('nextImg');
leftBtn.onclick = function () {
    nextBanner('previous');
};

rightBtn.onclick = function () {
    nextBanner('next');
};

function nextBanner(type) {
    for (var i = 0; i < oBtns.length; i++) {
        if (oBtns[i].classList.contains('active')) {
            oBtns[i].classList.remove('active');
            if (type == 'next') {
                var index = (i + 1) == oBtns.length ? 0 : i + 1;
            }
            else {
                var index = i == 0 ? oBtns.length - 1 : i - 1;
            }
            oBtns[index].className = 'active';
            oLis[i].className = null;
            oLis[index].className = 'active';

            break;
        }
    }
}


var Carousel = setInterval("nextBanner('next')", 2000);


//菜单切换
function menuswitch(index) {
    for (var i = 0; i < oLi.length; i++) {
        var sonUl = oLi[i].getElementsByTagName('ul');
        if (index == i) {
            sonUl[0].style.display = 'block';
        }
        else {
            sonUl[0].style.display = 'none';
        }
    }
}
function nextBanner(type) {
    for (var i = 0; i < oBtns.length; i++) {
        if (oBtns[i].classList.contains('active')) {
            oBtns[i].classList.remove('active');
            if (type == 'next') {
                var index = (i + 1) == oBtns.length ? 0 : i + 1;
            }
            else {
                var index = i == 0 ? oBtns.length - 1 : i - 1;
            }
            oBtns[index].className = 'active';
            oLis[i].className = null;
            oLis[index].className = 'active';

            break;
        }
    }
}