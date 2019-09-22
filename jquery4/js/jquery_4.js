let num = 0;
$(function () {
  //モーダルを開く
  $('#click').on('click',function () {
    $('.overlay, .modal').fadeIn();
    sei = $('#sei').val();
    mei = $('#mei').val();
    $('#confirm_sei').text(sei);
    $('#confirm_mei').text(mei);
  })
  //モーダルの外側か閉じるをクリックでモーダルを閉じる
  $('.overlay, .close, #ok_btn, #can_btn').on('click',function () {
    $('.overlay, .modal').fadeOut();
  })


$('#ok_btn').on('click', function () {
  num++;
  tr = document.createElement('tr');
  td1 = document.createElement('td');
  td2 = document.createElement('td');
  td3 = document.createElement('td');
  td4 = document.createElement('td');

  $(tr).addClass('_'+num);
  $(td1).append(num);
  $(td2).append(`${sei}　${mei}`);
  var html = '<button id="edit">編集</button>';
  var html2 = '<button id="delete">削除</button>';
  $(td3).addClass('td3').append(html);
  $(td4).addClass('td4').append(html2);

  tr.append(td1, td2, td3, td4);
  data.append(tr);
});


// 編集ボタンを押し
$(document).on('click', "#edit", function(){
  $('.overlay2, .modal2').fadeIn();

  // 何番目のuserIDと名前なのか
  let p = $(this).parent().parent();
  let t = $(this).parent().parent().children();
  for(let i = 0; i<t.length; i++) {
    switch(i) {
      case 0: $('#userId').text(t[i].innerText).addClass('userId'+t[i].innerText); break;
      case 1: $('#userName').text(t[i].innerText); break;
      default: break;
    }
    function backId() {
      return p;
    }
  }

  // 編集のinputに変更があったら値を取得
  let $cn;
  $(document).on('change', ".changeName", function(){
    $cn = $(this).val();
    // console.log($cn);
  });

  // 取得した値を反映
  $(document).on('click', '#change_btn', function(){
    
    let p = backId();
    $(p).children().eq(1).text($cn);
  });
});



//モーダルの外側か閉じるをクリックでモーダルを閉じる
$(document).on('click',".overlay2, .close, #change_btn, #can_btn", function() {
  $('.overlay2, .modal2').fadeOut();
});

// 削除ボタンを押したら
$(document).on('click',"#delete", function () {

  $('.overlay3, .modal3').fadeIn();
  // 何番目のuserIDと名前なのか、一致して呼び出す方法は？
  $('#userId').text();
  $('#userName').text();
});

//モーダルの外側か閉じるをクリックでモーダルを閉じる
$(document).on('click','.overlay3, .close, #delete_btn, #can_btn', function () {
  $('.overlay3, .modal3').fadeOut();
});

// どのtr消すねん
$('#delete_btn').on('click', function () {
  $(tr).remove();
});

});