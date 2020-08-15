$(document).ready(() => {
  // Required for nav bar mobile functionality
  $(".sidenav").sidenav();

  $(".hover").mouseover(() => {
    $(".hover").addClass("active");
  });
  $(".hover").mouseout(() => {
    $(".hover").removeClass("active");
  });
});
