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

  $("#button").click(function () {
    if ($("#id").val() === "") {
      alert("아이디를 입력해주세요.");
      $("#id").focus();
      return;
    }

    if ($("#pw").val() === "") {
      alert("비밀번호를 입력해주세요.");
      $("#pw").focus();
      return;
    }

    $("form").submit();
  });
});
