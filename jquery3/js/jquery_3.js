
//地域セレクトボックスイベント設定
selectEvent('#area1', '#area2');
selectEvent('#area2', '#area3');
//セレクトボックスの初期値
$('#area1').val('').change();
$('#area2').val('1').change();
$('#area3').val('2').change();

/**
 * 階層のあるプルダウンのイベントを設定します.
 * 親のselectタグには属性data-subgroupが設定されている必要があります。
 * 子のselectタグには属性data-groupが設定されている必要があります。
 * @param parentSelect 親となるselectタグのセレクタ
 * @param childSelect 子となるselectタグのセレクタ
 */

function selectEvent(parentSelect, childSelect) {
  // 子セレクトボックスで選択したテキストを変数に格納
  var childchange = $(childSelect).html();

  // 親がセレクトされたら
  $(parentSelect).change(function () {

    // 
    if (1 < $(this).find('option:selected').length) {
      // テキストを複数取得する
      $(childSelect).find("option").each(function (index, element) {
        $(element).remove();
        $(element).next().next().remove();
      });
    } else {
      var subgroup01 = $(this).find('option:selected').attr('data-subgroup');
      var subgroup02 = $(this).find('option:selected').attr('data-group');

      $(childSelect).html(childchange);

      $(childSelect).find("option").each(function (index, element) {

        var group01 = $(element).attr('data-subgroup');
        var group02 = $(element).attr('data-group');

        if (subgroup02 == group02) {
          //$(element).css('display', 'block');//IEではoptionタグに対してdisplayは効かないため
        } else if (subgroup01 == group01) {
          //$(element).css('display', 'block');//IEではoptionタグに対してdisplayは効かないため
        } else {
          //$(element).css('display', 'none');//IEではoptionタグに対してdisplayは効かないため
          $(element).remove();
        }
      });
    }
    $(childSelect).val('').change();//未選択時の値は''じゃない場合は書き換えてね
  });
}