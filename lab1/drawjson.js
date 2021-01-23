 let width = 5000;
 let data = treedata;
 let u_data = userdata;
 let list_t = [];
 var sum = 0;
 var count = 0;

 let tree = data => {
  const root = d3.hierarchy(data);
  root.dx = 110;
  root.dy = 600;
  return d3.tree().nodeSize([root.dx, root.dy])(root);
  }

  const root = tree(data);

  let x0 = Infinity;
  let x1 = -x0;

  root.each(d => {
    if (d.x > x1) x1 = d.x;
    if (d.x < x0) x0 = d.x;
  });

 function get_atr(d, str) {
  let title;

  if (d !== undefined) {
   if (typeof (d) == 'boolean') {
    if (d)
     title = str + 'Да';
    else
     title = str + 'Нет';
   } else
    title = str + d;
  } else
   title = '';

  return title;
 }

 //Получает список всех объектов
  function get_all(tree, list){
  let t=tree;

  if(Array.isArray(t.children))
   for(let i=0; i<t.children.length; i++)
    get_all(t.children[i], list);
  else{
   list.push(t.data.name);
  }
 }

 function byField(field) {
  return (a, b) => a[field] < b[field] ? -1 : 1;
 }

 // Поиск по листьям по имени - возвращает лист дерева(структурой), если он найден
 function find_by_name(name, tree_root) {
   let t = tree_root;
   let res;

   if (Array.isArray(t.children)){
     for (let i = 0; i < t.children.length; i++)
       if(res === undefined)
         res = find_by_name(name, t.children[i]);
   }
   else {
     if (name === t.data.name){
       res = t;
     }
   }
   return(res);
 }


 //Поиск евклидова расстояния между двумя листьями
 function evklid(x, y){
  let f_x = get_features(x);
  let res=0;
  let x_i;
  let y_i;

  //Для каждого признака
  for(let i=0; i<f_x.length; i++) {
   x_i = x.data[f_x[i]];
   y_i = y.data[f_x[i]];

   if (y_i != null && typeof (y_i) == "number") {
      res+=Math.pow(x_i - y_i, 2);
   }
  }
  return Math.sqrt(res);
 }


 //Находит список объектов, сортированных по евклидову расстоянию от одного объекта x
 function evklid_list(x, tree, list){
  var leave = {name:"", val:0};
  let t=tree;

  if(Array.isArray(t.children))
   for(let i=0; i<t.children.length; i++)
    evklid_list(x, t.children[i], list);
  else{
   leave.name = t.data.name;
   leave.val = evklid(x, t);
   list.push(leave);
  }
 }


  //Получает список объектов, сортированных по евклидову расстоянию для каждого листа
 function call_evklid_list(tree){
  let t=tree;
  let list = [];

  if(Array.isArray(t.children))
   for(let i=0; i<t.children.length; i++)
    call_evklid_list(t.children[i]);
  else{
   evklid_list(t, root, list);
   console.log(t.data.name, list);
  }
 }


 //Находит степень удаленности х от у по дереву
 function count_proximity(x, y){
  var list = [];
  proximity_list(x, list, 0);
  if (list[list.findIndex(el => el.name === y.data.name)] != undefined)
   return list[list.findIndex(el => el.name === y.data.name)].val;
  return 0;
 }


 //Находит список объектов, сортированных по удаленности от одного объекта d
 function proximity_list(d, list, proximity_it) {
  let p = d.parent;
  proximity_it++;

   if(p && Array.isArray(p.children)){

    for(let i=0; i<p.children.length; i++) {
     let child = p.children[i];
     if(d.data.name != child.data.name){
      near(p.children[i], list, proximity_it);
     }
    }
   }

   if (p)
    proximity_list(p, list, proximity_it);
   else
    list.sort(byField('val'));
 }


 //Идет в глубину дерева, записывает удаленность листов к объекту в список
 function near(child, list, proximity_it){

  if(Array.isArray(child.children)){
   proximity_it++;
   for(let j=0; j<child.children.length; j++)
    near(child.children[j], list, proximity_it);
  }
  else
     list.push({name:child.data.name, val:proximity_it});
 }


 //Находит близость расположения объектов к объекту x и записывает в лист
 function differences_list(x, tree, list){

   let t = tree;
   if(Array.isArray(t.children))
    for (let i = 0; i < t.children.length; i++)
     differences_list(x, t.children[i], list);
   else{
    list.push({name: t.data.name, val: count_differences(x, t)});
   }
   //console.log(list.sort(byField('differences_count')));
 }


 //Находит количество отличий между объектами x и y
  function count_differences(x, y){
  let features_x = get_features(x);
  let features_y = get_features(y);

  let diff_sum =
      count_one_side_differences(x, y, features_x) + count_one_side_differences(y, x, features_y);

  for(let i=0; i<features_x.length; i++)
   if(y.data[features_x[i]] && !_.isEqual(y.data[features_x[i]], x.data[features_x[i]]))
    diff_sum++;

   return diff_sum;
 }


 //Считает признаки, которых нет в y, но есть в x
 function count_one_side_differences(x, y, features_x){
  let diff_sum = 0;

  for(let i=0; i<features_x.length; i++)
   if(y.data[features_x[i]] == null)
    diff_sum++;

   return diff_sum;
 }


 //Получает характеристики товаров (исключая имя - идентификатор)
 function get_features(x){
    return Object.keys(x.data).filter((n) => {return n != "name"});
 }


 //Получает список объектов, сортированных по количеству отличий для каждого листа
 function call_differences_list(tree){
  let t=tree;
  let list = [];

  if(Array.isArray(t.children))
   for(let i=0; i<t.children.length; i++)
    call_differences_list(t.children[i]);
  else{
   differences_list(t, root, list);
   console.log(t.data.name, list);
  }
 }


 //Получает список объектов, сортированных по близости для каждого листа
  function call_proximity_list(tree){
  let t=tree;
  let list = [];

  if(Array.isArray(t.children))
   for(let i=0; i<t.children.length; i++)
    call_proximity_list(t.children[i]);
  else{
   proximity_list(t, list, 0);
   console.log(t.data.name, list);
  }
 }

  //Получает список объектов с коэффициентами корелляций для каждого листа
  function call_correlation_list(tree){
  let t=tree;
  let list = [];

  if(Array.isArray(t.children))
   for(let i=0; i<t.children.length; i++)
    call_correlation_list(t.children[i]);
  else{
   correlation_list(t, root, list);
   console.log(t.data.name, list);
  }
 }


 function correlation_list(x, tree, list){
  let t = tree;

   if(Array.isArray(t.children))
    for (let i = 0; i < t.children.length; i++)
     correlation_list(x, t.children[i], list);
   else{
    list.push({name: t.data.name, val: correlation(x, t, root)});
   }
 }


 function correlation(x, y, tree){
  let f_x = get_features(x);
  let avg, x_i, y_i;
  let sum_num = 0;
  let sum_den_1 = 0;
  let sum_den_2 = 0;
  let coef = 0;

  //Для каждого признака
  for(let i=0; i<f_x.length; i++){

   x_i = x.data[f_x[i]];
   y_i = y.data[f_x[i]];

   //Если у двоих объектов есть признак - считаем значения для рассчета коэфф корреляции
   if(y_i != null && typeof(y_i) == "number"){

    avg = find_avg(f_x[i], tree);

    sum_num += (x_i - avg)*(y_i - avg);
    sum_den_1 += (x_i - avg)**2;
    sum_den_2 += (y_i - avg)**2;
   }
  }

  //Рассчитываем коэфф корреляции
  coef = sum_num/(Math.sqrt(sum_den_1) * Math.sqrt(sum_den_2));

  return coef;
 }


 //Находит значения поля в дереве и записывает в лист
 function count_feature_val(feature, tree, list){
  let t = tree;

  if(Array.isArray(t.children))
   for(let i=0; i<t.children.length; i++){
    count_feature_val(feature, t.children[i], list);
   }

  if(t.data[feature] != null) {
     list.push(t.data[feature]);
  }
 }


 //Находит среднее значение поля во всем дереве
  function find_avg(feature, tree){
   let list = [];
   count_feature_val(feature, tree, list);
   return list.reduce((a, b) => (a + b)) / list.length;
 }


  //Получает список объектов, сортированных по близости для каждого листа
  function call_recommendation_list(tree){
  let t=tree;
  let list = [];

  if(Array.isArray(t.children))
   for(let i=0; i<t.children.length; i++)
    call_recommendation_list(t.children[i]);
  else{
   recommendation_list(t, root, list);
   //console.log(t.data.name, list.sort(byField('val')));
  }
 }


 //Находит близость расположения объектов к объекту x и записывает в лист
 function recommendation_list(x, tree, list){

   let t = tree;
   if(Array.isArray(t.children))
    for (let i = 0; i < t.children.length; i++)
     recommendation_list(x, t.children[i], list);
   else
    list.push({name: t.data.name, val:recommend_coeff(x,t)});
 }


 function recommend_coeff(x,y){
  return ((-10)*correlation(x,y,root) + 8*count_differences(x,y) + 0.0001*evklid(x,y) + 5*count_proximity(x,y));
 }


 function find_common(list1, list2, res){

  //Для каждого элемента листа 1
  for(let i = 0; i < list1.length; i++){

   //Если найдено совпадение - добавить в лист результата или увеличить его значение
   let i_2=list2.findIndex(el => el.name === list1[i].name);
   if (list2[i_2]!=undefined){
    let i_r = res.findIndex(el => el.name === list1[i].name)
    if (res[i_r]!=undefined)
     res[i_r].val = res[i_r].val + 1;
    else
     res.push({name: list1[i].name, val: 1});
   }
  }
 }

 function del_el(list, name){
  return list.filter(item => item.name !== name);
 }

 function get_common_recomendations(list_of_list){
  let top_list=[];
  let bottom_list=[];

  //Для каждого листа из списка
  for(let i=0; i<list_of_list.length; i++){

   //Перебираем все остальные листы, начиная с текущего
   for(let j=i+1; j<list_of_list.length; j++){

    //Ищем одинаковые, составляем верхушку рекомендации
    find_common(list_of_list[i], list_of_list[j], top_list);
   }
   bottom_list = bottom_list.concat(list_of_list[i]);
  }

  //Сортируем пересекающиеся рекомендации в порядке убывания (чем больше значение, тем чаще встр => выше в списке)
  top_list.sort((a, b) => a.val < b.val ? 1 : -1);
  console.log("TOP", top_list);

  //Добавляем к ним остальные списки, в порядке их оценки
  let common=[];

  find_common(bottom_list, top_list, common);
  bottom_list = bottom_list.filter(x => !common.some(y => x.name === y.name));

  bottom_list.sort((a, b) => a.val > b.val ? 1 : -1);
  top_list = top_list.concat(bottom_list);

  return top_list;
 }

 function get_by_history_2(recoms, hist_recoms){
  var res_list = recoms.slice(1,5);
  
  res_list = res_list.concat(hist_recoms.slice(1,5));

  return res_list;
 }
 
 function get_by_history(recoms, hist_recoms){
  var res_list=[];
  
  //Get list of lists of tops
  res_list = recoms.slice(1,10);
  res_list.push(hist_recoms.slice(1,10));
  
  //Found commons in tops
  var common_list = get_common_recomendations(res_list);
  
  res_list = recoms.slice(1,7);
  res_list = res_list.concat(common_list.slice(1,5));

  return res_list;
 }
 
 
 //Создает список рекомендаций с учетом параметров и отметок "не нравится"
 function get_range_list(tree, disliked, maker_name, item_name, max_price) {
  var list=[];

  set_range_list(tree, list, maker_name, item_name, max_price);

  list.sort((a, b) => a.range>b.range ? -1 : 1);
  
  console.log(list);
  
  var res = list.filter(el => disliked.findIndex(function (element, index, array) {
                                return (element == el.name) }));
  return res;
}
 
 //Получаем список - имя товара и его ранг. Чем больше ранг, тем более подходящ товар к запросу
 function set_range_list(tree, list, maker_name, item_name, max_price){
 
 var t=tree;
 let range_diff, cost;

 //Проходим по всему дереву
 if(Array.isArray(t.children))
    for(let i=0; i<t.children.length; i++)
      set_range_list(t.children[i], list, maker_name, item_name, max_price);
 else{
  range_diff=0;

  if ((maker_name !== t.parent.data.name) && (maker_name !== t.parent.parent.data.name)) {
    range_diff -= 400;
  }
  if ((item_name !== t.parent.parent.data.name) && (item_name !== t.parent.parent.parent.data.name)) {
    range_diff -= 900;
  }
  
  console.log(max_price, t.data.price);
  
  //Если цена больше заданной - штрафуем на разницу, иначе - тоже штрафуем, но совсем немного
  if(max_price<t.data.price){
    range_diff -= (t.data.price - max_price)/80;
  }
  else{
  	range_diff += (t.data.price - max_price)/3000;
  	console.log(range_diff, t.data.name);
  }
  	
  	
  
  //Учитываем рейтинг
  //range_diff -= (10-t.data.rating)*10;
  
  list.push({name:t.data.name, range:range_diff, price:t.data.price});
  }  
}


  var bodySelection = d3.select("body");
  var svg = bodySelection.append("svg")
                                 .attr("width", width)
                                 .attr("height", x1 - x0 + root.dx * 2);
  const g = svg.append("g")
      .attr("font-family", "sans-serif")
      .attr("font-size", 10)
      .attr("transform", `translate(${root.dy / 2},${root.dx - x0})`);
    
  const link = g.append("g")
    .attr("fill", "none")
    .attr("stroke", "#555")
    .attr("stroke-opacity", 0.4)
    .attr("stroke-width", 1.5)
  .selectAll("path")
    .data(root.links())
    .join("path")
      .attr("d", d3.linkHorizontal()
          .x(d => d.y)
          .y(d => d.x));
  
  const node = g.append("g")
      .attr("stroke-linejoin", "round")
      .attr("stroke-width", 4)
    .selectAll("g")
    .data(root.descendants())
    .join("g")
      .attr("transform", d => `translate(${d.y},${d.x})`);

  node.append("circle")
      .attr("fill", d => d.children ? "#555" : "#999")
      .attr("r", 2.5);

  node.append("text")
      .attr("font-size", "13")
      .attr("font-weight", "bold")
      .attr("dy", "0.35em")
      .attr("x", d => d.children ? -6 : 6)
      .attr("text-anchor", d => d.children ? "end" : "start")
      .text(d => d.data.name)
    .clone(true).lower()
      .attr("stroke", "white");

  node.append("text")
    .attr("font-size", "12")
    .attr("dy", "1.35em")
    .attr("x", d => d.children ? -6 : 6)
    .attr("text-anchor", d => d.children ? "end" : "start")
    .text(d => get_atr(d.data.rating, "Рейтинг:"))
  .clone(true).lower()
    .attr("stroke", "white");

  node.append("text")
    .attr("font-size", "12")
    .attr("dy", "2.35em")
    .attr("x", d => d.children ? -6 : 6)
    .attr("text-anchor", d => d.children ? "end" : "start")
    .text(d => get_atr(d.data.price, "Цена:"))
  .clone(true).lower()
    .attr("stroke", "white");

  node.append("text")
    .attr("font-size", "12")
    .attr("dy", "3.35em")
    .attr("x", d => d.children ? -6 : 6)
    .attr("text-anchor", d => d.children ? "end" : "start")
    .text(d => get_atr(d.data.diagonal_mm, "Диагональ:"))
  .clone(true).lower()
    .attr("stroke", "white");

  node.append("text")
    .attr("font-size", "12")
    .attr("dy", "4.35em")
    .attr("x", d => d.children ? -6 : 6)
    .attr("text-anchor", d => d.children ? "end" : "start")
    .text(d => get_atr(d.data.working_time, "Время автономной работы, ч:"))
  .clone(true).lower()
    .attr("stroke", "white");

  node.append("text")
    .attr("font-size", "12")
    .attr("dy", "5.35em")
    .attr("x", d => d.children ? -6 : 6)
    .attr("text-anchor", d => d.children ? "end" : "start")
    .text(d => get_atr(d.data.case_material, "Материал корпуса:"))
  .clone(true).lower()
    .attr("stroke", "white");

  node.append("text")
    .attr("font-size", "12")
    .attr("dy", "6.35em")
    .attr("x", d => d.children ? -6 : 6)
    .attr("text-anchor", d => d.children ? "end" : "start")
    .text(d => get_atr(d.data.weight_gr, "Вес:"))
  .clone(true).lower()
    .attr("stroke", "white");

  node.append("text")
    .attr("font-size", "12")
    .attr("dy", "7.35em")
    .attr("x", d => d.children ? -6 : 6)
    .attr("text-anchor", d => d.children ? "end" : "start")
    .text(d => get_atr(d.data.display_alw_on, "Всегда активный дисплей:"))
  .clone(true).lower()
    .attr("stroke", "white");

  node.append("text")
    .attr("font-size", "12")
    .attr("dy", "6.35em")
    .attr("x", d => d.children ? -6 : 6)
    .attr("text-anchor", d => d.children ? "end" : "start")
    .text(d => get_atr(d.data.use_with, "Совместимость:"))
  .clone(true).lower()
    .attr("stroke", "white");

  node.append("text")
    .attr("font-size", "12")
    .attr("dy", "7.35em")
    .attr("x", d => d.children ? -6 : 6)
    .attr("text-anchor", d => d.children ? "end" : "start")
    .text(d => get_atr(d.data.sim_2, "Поддержка 2 сим:"))
  .clone(true).lower()
    .attr("stroke", "white");

  node.append("text")
    .attr("font-size", "12")
    .attr("dy", "3.35em")
    .attr("x", d => d.children ? -6 : 6)
    .attr("text-anchor", d => d.children ? "end" : "start")
    .text(d => get_atr(d.data.height_mm, "Высота, мм:"))
  .clone(true).lower()
    .attr("stroke", "white");

  node.append("text")
    .attr("font-size", "12")
    .attr("dy", "5.35em")
    .attr("x", d => d.children ? -6 : 6)
    .attr("text-anchor", d => d.children ? "end" : "start")
    .text(d => get_atr(d.data.is_vacuum, "Ваккуумные:"))
  .clone(true).lower()
    .attr("stroke", "white");

call_recommendation_list(root);
