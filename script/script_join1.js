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

  // 체크박스 event : 버튼 클릭시 다음 버튼으로 이동
  $("input")
    .eq(0)
    .click(function () {
      if ($("input").eq(0).is(":checked")) {
        $(window).scrollTop(669);
      }
    });

  $("input")
    .eq(1)
    .click(function () {
      if ($("input").eq(1).is(":checked")) {
        $(window).scrollTop(933);
      }
    });

  // 다음 event : form 검사 및 페이지이동
  $("#button").click(function () {
    var check1 = $("input").eq(0);
    var check2 = $("input").eq(1);
    if (!check1.is(":checked")) {
      alert("홈페이지 이용약관에 동의해주세요.");
      $(window).scrollTop(397);
      return;
    } else if (!check2.is(":checked")) {
      alert("개인정보 수집 및 이용동의에 동의해주세요.");
      $(window).scrollTop(669);
      return;
    }

    $("form").submit();

    window.location.href = "./join2.html";
  });
});
