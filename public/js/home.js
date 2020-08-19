$(document).ready(() => {
  // Required for nav bar mobile functionality
  $(".sidenav").sidenav();

  $(".hover1").mouseover(() => {
    $(".hover1").addClass("active");
  });
  $(".hover1").mouseout(() => {
    $(".hover1").removeClass("active");
  });
  $(".hover2").mouseover(() => {
    $(".hover2").addClass("active");
  });
  $(".hover2").mouseout(() => {
    $(".hover2").removeClass("active");
  });
  $(".hover3").mouseover(() => {
    $(".hover3").addClass("active");
  });
  $(".hover3").mouseout(() => {
    $(".hover3").removeClass("active");
  });
  $(".hover4").mouseover(() => {
    $(".hover4").addClass("active");
  });
  $(".hover4").mouseout(() => {
    $(".hover4").removeClass("active");
  });
});
