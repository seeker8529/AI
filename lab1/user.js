
$(document).ready(function() {
  $('#accept_choice').hide();
  $('#save_history').hide();
  $('#save').hide();
  $('#second').hide();
  
  var name = '';
  var recom_list = [];
  var disliked = [];

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

      let txt="Нравятся/купили:<br/>";
      console.log(list);

      list.forEach(function(item, i, arr){
        console.log(item.name);
        txt = txt + '<br/>' +
            '<div class="form-check form-check-inline" >\n' +
            '  <input class="form-check-input" type="checkbox" name="group1" value="' + item + '">' +
            '<div>' +
            '  <label class="form-check-label">' + item + '</label>'+
            '</div>' +
            '</div>';
      });

	  let txt1="Не нравятся:<br/>";
      console.log(list);

      list.forEach(function(item, i, arr){
        console.log(item.name);
        txt1 = txt1 + '<br/>' +
            '<div class="form-check form-check-inline" >\n' +
            '<input class="form-check-input" type="checkbox" name="group2" value="' + item + '">' +
            '<div>' +
            '  <label class="form-check-label">' + item + '</label>'+
            '</div>' + '</div>' ;
      });


      $('#liked').html(txt);
	  $('#disliked').html(txt1);
      $('.recomendation').hide();
      $('#accept_choice').show();
      $('#save_history').show();
      $('#save').show();

   });

  $('#accept_choice').click(function () {


   $('#accept_choice').hide();
   $("#save_history").hide();
   $("#save").hide();
   
   var txt="Вам могут понравиться:";

     recom_list.forEach(function(item, i, arr){
     txt = txt+'<br/>'+item.name;
   });
   

   $('#liked').html(txt);
   //$('#first').hide();
   //$('.liked').hide();
   $('#disliked').hide();
  
  

   });
   
  $('#save').click(function () { 
    var a=$('input[name="group1"]:checked'); //Выбираем все отмеченные checkbox
    var checked=[];
    for (var x=0; x<a.length;x++){
            checked.push(a[x].value);
    }
    console.log(checked);
    
    //Выбираем отмеченные как "не нравится"
    var b=$('input[name="group2"]:checked'); //Выбираем все отмеченные checkbox
    var checked_b=[];
    for (var x=0; x<b.length;x++){
            checked_b.push(b[x].value);
    }
    console.log(checked_b);

    //Собираем массив массивов рекомендаций для каждого выделенного объекта
    var list_of_lists=[];

    for (let i=0; i<checked.length; i++){
       let list=[];
       let wrk_leave = find_by_name(checked[i], root);
       recommendation_list(wrk_leave, root, list);
       list.sort((a, b) => a.val > b.val ? 1 : -1);

       list_of_lists.push(list.slice(1, 15));
    }

    recom_list=get_common_recomendations(list_of_lists);

    for (let i=0; i<checked.length; i++){
        recom_list = del_el(recom_list, checked[i]);
    }

    for (let i=0; i<checked_b.length; i++){
        recom_list = del_el(recom_list, checked_b[i]);
    }
    
    recom_list = recom_list.slice(1,20);
    console.log(recom_list);
    disliked = checked_b;
  });
   
  $("#save_history").click(function(){ 
  
   	$('#first').hide();
   	$('#second').show();
   });
   
  $("#go_button").click(function(){
    var method = $('input[name="method"]:checked').val();
    var name = $('input[name="leave"]').val();

    //name = name.charAt(0).toUpperCase() + name.slice(1);

    let list = [];
    let wrk_leave = {};
    wrk_leave = find_by_name(name, root);
    console.log(wrk_leave);

    if(wrk_leave !== undefined){
      recommendation_list(wrk_leave, root, list);
      list.sort((a, b) => a.val > b.val ? 1 : -1);
      
      list = get_by_history(list, recom_list);
      
      console.log(list);
      
      list = del_el(list, wrk_leave.name);
      
      for (let i=0; i<disliked.length; i++){
        list = del_el(list, disliked[i]);
      }

      let txt="Вам могут понравиться:<br/>";
      list.slice(1, 10).forEach(function(item, i, arr){
        txt = txt+'<br/>'+item.name;
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
   
   
});
