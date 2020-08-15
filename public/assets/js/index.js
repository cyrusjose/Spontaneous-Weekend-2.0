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

  $(".web1").mouseover(() => {
    $(".web1").addClass("web");
  });
  $(".web1").mouseout(() => {
    $(".web1").removeClass("web");
  });
  $(".web2").mouseover(() => {
    $(".web2").addClass("web");
  });
  $(".web2").mouseout(() => {
    $(".web2").removeClass("web");
  });
  $(".web3").mouseover(() => {
    $(".web3").addClass("web");
  });
  $(".web3").mouseout(() => {
    $(".web3").removeClass("web");
  });
  $(".web4").mouseover(() => {
    $(".web4").addClass("web");
  });
  $(".web4").mouseout(() => {
    $(".web4").removeClass("web");
  });
});
