$(function () {
  $('#data1').on('click',function () {
    console.log($(this).parent());
    if($(this).parent().has("#main2")) {
      $('#main1').append(this);
    }
    if($(this).parent().has("#main1")) {
      $('#main').append(this);
    }
  });
  $('#data2').on('click',function () {
    $('#main2').append(this);
  });
  $('#data3').on('click',function () {
    $('#main2').append(this);
  });
  $('#data4').on('click',function () {
    $('#main2').append(this);
  });
  $('#data5').on('click',function () {
    $('#main2').append(this);
  });
  $('#data6').on('click',function () {
    $('#main2').append(this);
  });

});

