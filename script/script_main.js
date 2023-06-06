$(document).ready(function () {
  // 메인 메뉴 hide
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

  // SUMMER ON
  $("#summer_on_logo").css({ opacity: 0 });
  $("#summer_drink1").css({ opacity: 0 });
  $("#summer_drink2").css({ opacity: 0 });
  $("#summer_drink3").css({ opacity: 0 });
  $("#summer_drink4").css({ opacity: 0 });

  $.when($("#summer_on_logo").animate({ opacity: 1 }, 500))
    .then(function () {
      return new Promise(function (resolve) {
        setTimeout(resolve, 100);
      });
    })
    .then(function () {
      return $("#summer_drink2").animate({ opacity: 1 }, 500);
    })
    .then(function () {
      return new Promise(function (resolve) {
        setTimeout(resolve, 200);
      });
    })
    .then(function () {
      return $("#summer_drink3").animate({ opacity: 1 }, 500);
    })
    .then(function () {
      return new Promise(function (resolve) {
        setTimeout(resolve, 200);
      });
    })
    .then(function () {
      return $("#summer_drink1").animate({ opacity: 1 }, 500);
    })
    .then(function () {
      return new Promise(function (resolve) {
        setTimeout(resolve, 200);
      });
    })
    .then(function () {
      return $("#summer_drink4").animate({ opacity: 1 }, 500);
    });

  // 스타벅스 프로모션 버튼
  var promotionBtn = true;
  $("#promotion-btn").click(function () {
    if (promotionBtn) {
      $("#section_2_1").animate({ height: "400px" });
      $("#promotion-btn").css({ transform: "rotate(180deg)" });
    } else {
      $("#section_2_1").animate({ height: "0px" });
      $("#promotion-btn").css({ transform: "rotate(360deg)" });
    }
    promotionBtn = !promotionBtn;
  });

  // 스타벅스 프로모션 버튼 눌렀을 떄 페이지
  $(".event").css({ left: "915px" });
  $("#promotionpage-btn1").click(function () {
    if ($(".event").eq(3).css("left") == "-915px") {
      $(".event").animate({ left: "-305px" }, 1000);
    } else if ($(".event").eq(3).css("left") == "-305px") {
      $(".event").animate({ left: "305px" }, 1000);
    } else if ($(".event").eq(3).css("left") == "305px") {
      $(".event").animate({ left: "915px" }, 1000);
    } else {
      $(".event").css({ left: "-915px" });
    }
  });
  $("#promotionpage-btn2").click(function () {
    if ($(".event").eq(3).css("left") == "915px") {
      $(".event").animate({ left: "305px" }, 1000);
    } else if ($(".event").eq(3).css("left") == "305px") {
      $(".event").animate({ left: "-305px" }, 1000);
    } else if ($(".event").eq(3).css("left") == "-305px") {
      $(".event").animate({ left: "-915px" }, 1000);
    } else {
      $(".event").css({ left: "915px" });
    }
  });

  // 웨스트 자바 프리앙안 section_4
  $("#coffee_img").css({ opacity: "0" });
  $("#coffee_info").css({ opacity: "0" });

  var windowHeight = $(window).height();
  var imagePositionTop = $("#coffee_img").offset().top;

  var imgAnimation = false;

  function handleScroll() {
    var scrollPosition = $(window).scrollTop();

    if (scrollPosition + windowHeight >= imagePositionTop && !imgAnimation) {
      imgAnimation = true;
      $("#coffee_img").animate({ opacity: "1", left: "0" }, 2000);
      $("#coffee_info").animate({ opacity: "1", right: "0" }, 2000);
    } else if (scrollPosition + windowHeight <= imagePositionTop && imgAnimation) {
      imgAnimation = false;
      $("#coffee_img").animate({ opacity: "0", left: "-300px" }, 2000);
      $("#coffee_info").animate({ opacity: "0", right: "-300px" }, 2000);
    }
  }

  // papua new Guinea img
  $("#papua_img").css({ opacity: "0" });

  var papua_imagePositionTop = $("#papua_img").offset().top;
  var papua_imgAnimation = false;

  function handleScroll_2() {
    var scrollPosition = $(window).scrollTop();

    if (scrollPosition + windowHeight >= papua_imagePositionTop && !papua_imgAnimation) {
      papua_imgAnimation = true;
      $("#papua_img").animate({ opacity: "1" }, 1000);
    } else if (scrollPosition + windowHeight <= papua_imagePositionTop && papua_imgAnimation) {
      papua_imgAnimation = false;
      $("#papua_img").animate({ opacity: "0" }, 1000);
    }
  }

  // pick your favorite
  $("#favorite_logo1").css({ opacity: "0" });
  $("#favorite_logo2").css({ opacity: "0" });

  var favorite_imagePositionTop = $("#favorite_logo1").offset().top;
  var favorite_imgAnimation = false;

  function handleScroll_3() {
    var scrollPosition = $(window).scrollTop();

    if (scrollPosition + windowHeight >= favorite_imagePositionTop && !favorite_imgAnimation) {
      favorite_imgAnimation = true;
      $("#favorite_logo1").animate({ opacity: "1", left: "0" }, 1500);
      $("#favorite_logo2").animate({ opacity: "1", left: "0" }, 2000);
    } else if (scrollPosition + windowHeight <= favorite_imagePositionTop && favorite_imgAnimation) {
      favorite_imgAnimation = false;
      $("#favorite_logo1").animate({ opacity: "0", left: "-300px" }, 1500);
      $("#favorite_logo2").animate({ opacity: "0", left: "-300px" }, 2000);
    }
  }

  // reserve magazine
  $("#reserve_img").css({ opacity: "0" });

  var reserve_imagePositionTop = $("#reserve_img").offset().top;
  var reserve_imgAnimation = false;

  function handleScroll_4() {
    var scrollPosition = $(window).scrollTop();

    if (scrollPosition + windowHeight >= reserve_imagePositionTop && !reserve_imgAnimation) {
      reserve_imgAnimation = true;
      $("#reserve_img").animate({ opacity: "1" }, 2000);
    }
  }

  // main_last
  $("#main_last_img1").css({ opacity: "0" });
  $("#main_last_img2").css({ opacity: "0" });
  $("#main_last_img3").css({ opacity: "0" });
  $("#main_last_img4").css({ opacity: "0" });
  $("#main_last_txt1").css({ opacity: "0" });
  $("#main_last_txt2").css({ opacity: "0" });

  var main_last_imagePositionTop = $("#main_last_img1").offset().top;
  var main_last_imgAnimation = false;

  function handleScroll_5() {
    var scrollPosition = $(window).scrollTop();

    if (scrollPosition + windowHeight >= main_last_imagePositionTop && !main_last_imgAnimation) {
      main_last_imgAnimation = true;
      $("#main_last_img1").animate({ opacity: "1" }, 2000);
      $("#main_last_img2").animate({ opacity: "1" }, 2000);
      $("#main_last_img3").animate({ opacity: "1" }, 2000);
      $("#main_last_img4").animate({ opacity: "1" }, 2000);
      $("#main_last_txt1").animate({ opacity: "1", left: "-150px" }, 2000);
      $("#main_last_txt2").animate({ opacity: "1", left: "-530px" }, 2500);
    }
  }

  $(window).scroll(handleScroll);
  $(window).scroll(handleScroll_2);
  $(window).scroll(handleScroll_3);
  $(window).scroll(handleScroll_4);
  $(window).scroll(handleScroll_5);

  // 모달창

  $(".event-image").click(function () {
    $("#modal").css("display", "block");

    // 박스오피스
    const key = "4353b5438229646851854a6fc3165c51";
    let currentDate = new Date();
    let lastWeek = new Date(currentDate.getTime() - 7 * 24 * 60 * 60 * 1000);
    let year = lastWeek.getFullYear();
    let month = String(lastWeek.getMonth() + 1).padStart(2, "0"); // 월은 0부터 시작하므로 1을 더해줍니다.
    let day = String(lastWeek.getDate()).padStart(2, "0");

    let url_date = `${year}${month}${day}`;
    let url =
      "http://kobis.or.kr/kobisopenapi/webservice/rest/boxoffice/searchWeeklyBoxOfficeList.json?key=" +
      key +
      "&targetDt=" +
      url_date;

    let options = { year: "numeric", month: "numeric", day: "numeric" };
    let formattedDate = currentDate.toLocaleDateString(undefined, options);
    $("#date").text(formattedDate);

    $.ajax({
      url: url,
      type: "GET",
      success: function (data, status) {
        status == "success" && parseJSON(data);
      },
    });

    function parseJSON(jsonObj) {
      let table = [];
      let movie = jsonObj.boxOfficeResult.weeklyBoxOfficeList;
      for (let i = 0; i < movie.length; i++) {
        table.push("<tr>");
        table.push(`<td>${movie[i].rankOldAndNew === "OLD" ? "-" : "<b>NEW</b>"}</td>`);
        table.push(`<td>${movie[i].rank}</td>`);
        table.push(`<td>${movie[i].movieNm}</td>`);
        table.push(
          `<td>${
            movie[i].rankInten == 0
              ? "-"
              : movie[i].rankInten > 0
              ? '<i class="fas fa-caret-up" style="color: #ff0000"></i>\n' + movie[i].rankInten
              : '<i class="fas fa-caret-up fa-rotate-180" style="color: #0000ff;"></i>\n' + movie[i].rankInten.slice(1)
          }</td>`
        );
        table.push("</tr>");
      }

      $("#movie_list").html(table.join("\n"));
    }
  });

  $(".close").click(function () {
    $("#modal").css("display", "none");
  });

  $(".event_button").click(function () {
    // 확인 버튼 클릭 시 동작
    // 여기에 원하는 동작을 추가합니다.
    $("#modal").css("display", "none");
  });
});
