// Before the page loads, this will show a loader image. Upon load it fades out.
$(window).on("load", function() {
  $(".loader .inner").fadeOut(500, function() {
    $(".loader").fadeOut(750);
  });
});

// When document is ready, trigger the dropdowns (time-restraint: self-question: why doesn't the data-target work properly?)
$(document).ready(function() {
  $(".dropdown-trigger").dropdown();
});
