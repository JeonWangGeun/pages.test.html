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

  // 생년월일
  // 생년 옵션 생성
  var yearSelect = $("#year");
  var currentYear = new Date().getFullYear();
  var startYear = currentYear - 100; // 시작 연도 설정 (현재로부터 100년 전)
  for (var i = currentYear; i >= startYear; i--) {
    yearSelect.append(
      $("<option>", {
        value: i,
        text: i + "년",
      })
    );
  }

  // 월 옵션 생성
  var monthSelect = $("#month");
  for (var j = 1; j <= 12; j++) {
    monthSelect.append(
      $("<option>", {
        value: j < 10 ? "0" + j : j,
        text: j + "월",
      })
    );
  }

  // 일 옵션 생성
  var daySelect = $("#day");
  for (var k = 1; k <= 31; k++) {
    daySelect.append(
      $("<option>", {
        value: k < 10 ? "0" + k : k,
        text: k + "일",
      })
    );
  }

  $("#button").click(function () {
    // 아이디 검사
    if ($("#id").val() == "") {
      alert("아이디를 입력해 주세요");
      $("#id").focus();
      return;
    }

    const regex = /^[A-Za-z0-9]{8,16}$/;
    // 비밀번호 검사
    if ($("#pw").val() == "") {
      alert("비밀번호를 입력해 주세요.");
      $("#pw").focus();
      return;
    } else if (!regex.test($("#pw").val())) {
      alert("8~16자의 영문, 숫자 사용하여 비밀번호를 생성해 주세요.");
      $("#pw").focus();
      return;
    } else if ($("#confirm_pw").val() == "") {
      alert("비밀번호 재확인을 입력해 주세요.");
      $("#confirm_pw").focus();
      return;
    } else if ($("#pw").val() != $("#confirm_pw").val()) {
      alert("비밀번호가 일치하지 않습니다.");
      $("#pw").focus();
      return;
    }

    // 이름 검사
    if ($("#name").val() == "") {
      alert("이름을 입력해 주세요.");
      $("#name").focus();
      return;
    }

    // 생년월일 검사
    if ($("#year").val() == "") {
      alert("생년월일에 년도를 입력해 주세요.");
      $("#year").focus();
      return;
    } else if ($("#month").val() == "") {
      alert("생년월일에 월을 입력해 주세요.");
      $("#month").focus();
      return;
    } else if ($("#day").val() == "") {
      alert("생년월일에 일을 입력해 주세요.");
      $("#day").focus();
      return;
    }

    $("form").submit();
  });
});
