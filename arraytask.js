
var arr= [
    {
      company: 'Samsung',
      model: 'Galaxy',
      Memory:64,
      price: 15000,
    },
    {
        company: 'Nokia',
        model: 'S730',
        Memory: 128,
        price: 22000,
    },
    {
        company: 'Xiomi',
        model: 'note',
        Memory: 32,
        price: 12000,
    },
    {
        company: 'Motorola',
        model: 'G10',
        Memory: 32,
        price: 15000,
    },
    {
    company: 'Apple',
      model: 'S12',
      Memory: 64,
      price: 25000,
    }
  ];
  // window.onload =()=>{
    loadtable();
  //};
  function loadtable(){
    const tablebody=document.getElementById('tablebody');
    let data='';
    for(i=0; i<arr.length; i++){

  

        data+="<tr><td>" + arr[i].company +"</td><td>"+ arr[i].model +"</td><td>"+ arr[i].Memory +"</td><td>"+arr[i].price+"</td></tr>"
    }
    tablebody.innerHTML=data;



  }
  // task 02//

   select=document.getElementById("sel");
   option=document.getElementById("selectoption");
  function result()
  {
    select=document.getElementById("sel");
    option=document.getElementById("selectoption");
  ind=select.selectedIndex;
  console.log(ind);
  document.getElementById("resulttable").innerHTML="<tr><th>Company</th><th>Model</th><th>Memory</th><th>Price</th></tr>";
  for(i=0; i<arr.length; i++)
     {
    
      if(ind==0)
      {
       if(document.getElementById("selectoption").value == arr[i].company)
       {
        document.getElementById("resulttable").innerHTML+="<tr><td>" + arr[i].company +"</td><td>"+ arr[i].model +"</td><td>"+ arr[i].Memory +"</td><td>"+arr[i].price+"</td></tr>"

       }
    }
  
     
    if(ind==1)
    {
       if(document.getElementById("selectoption").value == arr[i].model)
       {
        {
          document.getElementById("resulttable").innerHTML+="<tr><td>" + arr[i].company +"</td><td>"+ arr[i].model +"</td><td>"+ arr[i].Memory +"</td><td>"+arr[i].price+"</td></tr>"
  
         }
       }
    }

    if(ind==2)
    {
       if(document.getElementById("selectoption").value == arr[i].Memory){
        {
          document.getElementById("resulttable").innerHTML+="<tr><td>" + arr[i].company +"</td><td>"+ arr[i].model +"</td><td>"+ arr[i].Memory +"</td><td>"+arr[i].price+"</td></tr>"
  
         }
       }
    }
    if(ind==3)
    {
       if(document.getElementById("selectoption").value == arr[i].price){
        {
          document.getElementById("resulttable").innerHTML+="<tr><td>" + arr[i].company +"</td><td>"+ arr[i].model +"</td><td>"+ arr[i].Memory +"</td><td>"+arr[i].price+"</td></tr>"
  
         }
       }
       
    }
    
  }
}
//task03//
function sorting(){
var sort=document.getElementById("sel2");
var sortby=document.getElementById("sel3");
var sort1=sort.selectedIndex;
var sortby1=sortby.selectedIndex;

if(sort1===1){
  if(sortby1 ===1){
     arr.sort((a,b) =>{
    
      var x = a.company.toLowerCase(); 
      var y = b.company.toLowerCase();
      if (x > y) {return 1;}
      if (x < y) {return -1;}
      return 0;});
      console.log(arr);
  }
if(sortby1 === 2){
  arr.sort((a,b) =>{
 
   var x = a.model.toLowerCase(); 
   var y = b.model.toLowerCase();
   if (x > y) {return 1;}
   if (x < y) {return -1;}
   return 0;});
   console.log(arr);
}
if(sortby1 === 3){
  arr.sort((a,b) => {return a.Memory - b.Memory});
  console.log(arr);
}
if(sortby1 === 4){
  arr.sort((a,b) => {return a.price - b.price});
  console.log(arr);
}
}


if(sort1===2){
  if(sortby1 === 1){
     arr.sort((a,b) =>{
    
      var x = a.company.toLowerCase(); 
      var y = b.company.toLowerCase();
      if (x < y) {return 1;}
      if (x > y) {return -1;}
      return 0;});
  }
if(sortby1 === 2){
  arr.sort((a,b) =>{
 
   var x = a.model.toLowerCase(); 
   var y = b.model.toLowerCase();
   if (x < y) {return 1;}
   if (x > y) {return -1;}
   return 0;});
}
if(sortby1 === 3){
  arr.sort((a,b) => {return b.Memory - a.Memory});
}
if(sortby1 === 4){
  arr.sort((a,b) => {return b.price - a.price});
}
}


document.getElementById("tablebody").innerHTML="";
loadtable();


}

// task04//
function add(){
  console.log(arr);
  var company1=document.getElementById("com").value;
  var model1=document.getElementById("mod").value;
  var memory1=document.getElementById("memo").value;
  var price1=document.getElementById("pri").value;
  arr01={company:company1,model:model1,Memory:memory1,price:price1};
  arr.splice(2,0,arr01);
  loadtable();
}