$(function () {
  $('#main1').on('click','p', function () {
    if ($(this).parent().has("#main1")) {
      $('#main2').append(this);
    }
  });
  $('#main2').on('click','p', function () {
    if ($(this).parent().has("#main1")) {
      $('#main1').append(this);
    }
  });
});

