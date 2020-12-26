$(document).ready(function() {
  $("#go_button").click(function(){
    var method = $('input[name="method"]:checked').val();
    var name = $('input[name="leave"]').val();

    //name = name.charAt(0).toUpperCase() + name.slice(1);

    let list = [];
    let wrk_leave = {};
    wrk_leave = find_by_name(name, root);
    console.log(wrk_leave);

    if(wrk_leave !== undefined){
      switch(method) {
        case 'evklid':
          evklid_list(wrk_leave, root, list);
        break;
        case 'tree':
          proximity_list(wrk_leave, list, 0);
        break;
        case 'difference':
          differences_list(wrk_leave, root, list);
        break;
        case 'correl':
          correlation_list(wrk_leave, root, list);
        break;
      }

      list.sort((a, b) => a.val > b.val ? 1 : -1);

      let txt="Результат:<br/>";
      list.forEach(function(item, i, arr){
        txt = txt+'<br/>'+item.name+': '+item.val;
        console.log(item);
      });
      $('#res').html(txt);
    }
    else {
        unsuccesfull = "<div><div class=\"alert alert-warning\" role=\"alert\">\n" +
          "          Товар с таким именем не найден!\n" +
          "        </div></div>"
        $('#res').html(unsuccesfull);
    }
  });
  $("#get_tree_button").click(function(){
    window.location.href='tree.html';
  });
  $("#back").click(function(){
    window.location.href='user_main.html';
  });
});
