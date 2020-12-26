
$(document).ready(function() {
  $('#accept_choice').hide();
  var name = '';

  $("#submit_user").click(function(){
    name = $('input[id="userName"]').val();

    //Try to find in user list
    //Create new one, if name is not in the list
    let user_info = {name: "", history: [], disliked: [], not_interesting: []}
    user_info.name = name;
    u_data.push(user_info);

    $('.user_header').hide();
    $('.recomendation').show();

  });

  $("#get_tree_button").click(function(){
    window.location.href='tree.html';
  });
  $("#back").click(function(){
    window.location.href='user_main.html';
  });

   $("#go_buttn").click(function(){
      let list = [];
      get_all(root, list);

      let txt="Список товаров:<br/>";
      console.log(list);

      list.forEach(function(item, i, arr){
        console.log(item.name);
        txt = txt + '<br/>' +
            '<div class="form-check form-check-inline" >\n' +
            '  <input class="form-check-input" type="checkbox" value="' + item + '">' +
            '<div>' +
            '  <label class="form-check-label">' + item + '</label>'+
            '</div>' +
            '</div>';
      });

      $('#res').html(txt);
      $('.recomendation').hide();
      $('#accept_choice').show();

   });

   $('#accept_choice').click(function () {

    var a=$('input:checked'); //Выбираем все отмеченные checkbox
    var checked=[];
    for (var x=0; x<a.length;x++){
            checked.push(a[x].value);
    }
    console.log(checked);

    //Собираем массив массивов рекомендаций для каждого выделенного объекта
    var list_of_lists=[];

    for (let i=0; i<checked.length; i++){
       let list=[];
       let wrk_leave = find_by_name(checked[i], root);
       recommendation_list(wrk_leave, root, list);
       list.sort((a, b) => a.val > b.val ? 1 : -1);

       list_of_lists.push(list.slice(1, 10));
    }

    var recom_list=get_common_recomendations(list_of_lists);

    for (let i=0; i<checked.length; i++){
        recom_list = del_el(recom_list, checked[i]);
    }

    console.log(recom_list);

   $('#accept_choice').hide();

   var txt="Похожие товары для";
   checked.forEach(function(item, i, arr){
    txt = txt + ' ' + item + ',';
   });

   txt = txt.substr(0, txt.length-1) + ':' + '<br/>';

  recom_list.forEach(function(item, i, arr){
    txt = txt+'<br/>'+item.name;
  });

  $('#res').html(txt);

   });
});
