 let width = 1500;
 let data = treedata;
 let list_t = [];
 var sum = 0;
 var count = 0;

 let tree = data => {
  const root = d3.hierarchy(data);
  root.dx = 30;
  root.dy = width / (root.height + 1);
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

 function byField(field) {
  return (a, b) => a[field] < b[field] ? -1 : 1;
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

   //Если у двоих объектов есть признак - считаем значения для рассчета коэфф корреляции
   if (y_i != null && typeof (y_i) == "number") {
      res+=Math.pow(x_i - y_i, 2);
   }
  }

  return Math.sqrt(res);
 }


 //Находит список объектов, сортированных по евклидову расстоянию от одного объекта x
 function evklid_list(x, tree, list){
  var leave = {name:"", evklid:0};
  let t=tree;

  if(Array.isArray(t.children))
   for(let i=0; i<t.children.length; i++)
    evklid_list(x, t.children[i], list);
  else{
   leave.name = t.data.name;
   leave.evklid = evklid(x, t);
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
    list.sort(byField('proximity_it'));
 }


 //Идет в глубину дерева, записывает удаленность листов к объекту в список
 function near(child, list, proximity_it){

  if(Array.isArray(child.children)){
   proximity_it++;
   for(let j=0; j<child.children.length; j++)
    near(child.children[j], list, proximity_it);
  }
  else
     list.push({name:child.data.name, proximity:proximity_it});
 }


 //Находит близость расположения объектов к объекту x и записывает в лист
 function differences_list(x, tree, list){

   let t = tree;
   if(Array.isArray(t.children))
    for (let i = 0; i < t.children.length; i++)
     differences_list(x, t.children[i], list);
   else{
    list.push({name: t.data.name, differences_count: count_differences(x, t)});
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
    list.push({name: t.data.name, correlation_coef: correlation(x, t, root)});
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
      .attr("dy", "0.35em")
      .attr("x", d => d.children ? -6 : 6)
      .attr("text-anchor", d => d.children ? "end" : "start")
      .text(d => d.data.name)
    .clone(true).lower()
      .attr("stroke", "white");

  node.append("text")
    .attr("dy", "2.35em")
    .attr("x", d => d.children ? -6 : 6)
    .attr("text-anchor", d => d.children ? "end" : "start")
    .text(d => get_atr(d.data.price, "Цена:"))
  .clone(true).lower()
    .attr("stroke", "white");

  node.append("text")
    .attr("dy", "3.35em")
    .attr("x", d => d.children ? -6 : 6)
    .attr("text-anchor", d => d.children ? "end" : "start")
    .text(d => get_atr(d.data.diagonal, "Диагональ:"))
  .clone(true).lower()
    .attr("stroke", "white");

  console.log("------- avg --------");
  console.log(find_avg("price", root));


  console.log("-------DIFFERENCES LISTS--------");
  call_differences_list(root);

  console.log("-------PROXIMITY LISTS--------");
  call_proximity_list(root);

  console.log("-------CORRELATION LISTS--------");
  call_correlation_list(root);

  console.log("-------EVKLID LISTS--------");
  call_evklid_list(root);


