// 메인 메뉴 hide
$(document).ready(function () {
  var hideMenu = $(".hide_menu");
  var menuList = $(".menulist");
  function showHideMenu(i) {
    return function () {
      hideMenu.eq(i).toggleClass("visible");
      menuList.eq(i).toggleClass("hover");
    };
  }
  for (var i = 0; i < hideMenu.length; i++) {
    hideMenu.each(function (i) {
      menuList.eq(i).mouseenter(showHideMenu(i)).mouseleave(showHideMenu(i));
      hideMenu.eq(i).mouseenter(showHideMenu(i)).mouseleave(showHideMenu(i));
    });
  }
});
