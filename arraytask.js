////////////////////////////////////////////task01//////////////////////////////////////////////////////////////
var totalindex=[]
var arr01=[];
var checkbox=[];
var arr= [
    {
      company: 'Samsung',
      model: 'Galaxy',
      Memory:64,
      price: 15000,
      Quantity:20,
      Rating:"",
    },
    {
        company: 'Nokia',
        model: 'S730',
        Memory: 128,
        price: 22000,
        Quantity:15,
        Rating:"",
    },
    {
        company: 'Xiomi',
        model: 'note',
        Memory: 32,
        price: 12000,
        Quantity:21,
        Rating:"",
    },
    {
        company: 'Motorola',
        model: 'G10',
        Memory: 32,
        price: 15000,
        Quantity:13,
        Rating:"",
    },
    {
    company: 'Apple',
      model: 'S12',
      Memory: 64,
      price: 25000,
      Quantity:18,
      Rating:"",
    }
  ];
 
    loadtable();
    function loadtable(){
    const tablebody=document.getElementById('tablebody');
    let data='';
    for(i=0; i<arr.length; i++){

  

        data+="<tr><td>" + arr[i].company +"</td><td>"+ arr[i].model +"</td><td>"+ arr[i].Memory +"</td><td>"+arr[i].price+"</td><td>"+arr[i].Quantity+"</td><td><input onclick='clicked(this)' type=checkbox></td><td>"+arr[i].Rating+"</td></tr>"
    }
    tablebody.innerHTML=data;



  }
  // ////////////////////////////////////////////task 02///////////////////////////////////////////////////////

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
////////////////////////////////////////////////////////////////////task03/////////////////////////////////////

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

////////////////////////////////////////////////////task04/////////////////////////////////////////////////////

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

////////////////////////////////// generate bills//task-05/////////////////////////////////////////////////////

var buyerlist=[];
var total=0;
function loadTempTable(tmpArr)
{
  const tablebody=document.getElementById('billtab');
    let data='';
    for(i=0; i<tmpArr.length; i++){

  

        data+="<tr><td>" + tmpArr[i].company +"</td><td>"+ tmpArr[i].model +"</td><td>"+ tmpArr[i].quantity +"</td><td>"+tmpArr[i].amount+"</td></tr>";
    }
    tablebody.innerHTML=data;
}
function addbill()
{
let product=document.getElementById("sel4");
let quantity=parseInt(document.getElementById("Pquantity").value);
let index=product.selectedIndex-1;
var chk=checkprexist(product.value);
var r=updateQ(product.value,quantity);
if(r==-1)
{
  alert("Not enough stock");
  return;
}
if(chk==-1){
  
  let buyerlistobj={company:product.value, model:arr[index].model, quantity:quantity, amount:arr[index].price*quantity};

  buyerlist.push(buyerlistobj);
  loadtable();
  loadTempTable(buyerlist);
}
else{
 
  buyerlist[chk].quantity=parseInt(buyerlist[chk].quantity)+parseInt(quantity);
  loadtable();
  loadTempTable(buyerlist);
}
}
function updateQ(selp,vQ){
  for(i=0;i<arr.length;i++)
  {
    if(arr[i].company==selp){
      if(vQ>arr[i].Quantity){
        return -1;
        
      }
      arr[i].Quantity-=vQ;
      return 0;
    }
   }
   loadtable();
  }
   function checkprexist(sel){
   
    for(i=0;i<buyerlist.length;i++){
      if(buyerlist[i].company==sel){
        return i;
      }
      }
      return -1;
    }
    function generatebill(){
    let total=0;
    document.getElementById("btn").style.display="none";
    for(i=0;i<buyerlist.length;i++){
      total+=buyerlist[i].amount;
    }
    document.getElementById("billtab1").innerHTML="<tr><th>Total</th><td> </td><td>"+total+"</td></tr>";
   }


  // //////////////////////////////////////////////task 06//[delete items from table]//////////////////////////#############################################################################################################
 
  function deleteitem(){
        var validValues=arr.filter(function(val,index){
        return (totalindex.indexOf(index)==-1); 

        });
        console.log(validValues);
        arr=validValues;
        loadtable();
 }


function clicked(arg)
{
  var tr=arg.parentNode.parentNode;
  console.log(tr);
  var nodes= Array.from(tr.parentNode.children);
  console.log(nodes);
  var index=nodes.indexOf(tr);
  console.log(index);
  totalindex.push(index);
 
 

}

//############################################################################################################/
  
// ////////////////////////////////task 08//---UPDATE-INVENTORY---/////////////////////////////////////////////

function updateinventory(){
  var selectedmodel=document.getElementById("sel5");
  var updatequantity=document.getElementById("inventoryquantity").value;
  var selectmodelindex=selectedmodel.selectedIndex;
  // alert(selectmodelindex)
  arr[selectmodelindex-1].Quantity=updatequantity;
  // document.getElementById('tablebody').innerHTML="inventoryquantity";
  loadtable();


}

//###########################################################################################################

////////////////////////////////////////////////task09//[rating]//////////////////////////////////////////////

function rating(){
var model=document.getElementById("sel6");
var rate=document.getElementById("sel7");
modelindex=model.selectedIndex;
   var rateindex=rate.value;
   arr[modelindex-1].Rating=rateindex;
   loadtable();
  //  alert(rateindex);
}

//###############################################################################################################
 
///////////////////////////////////////////////task10/////////////////////////////////////////////////////////
var t1='';
function showmobile(){

  minimumprice=document.getElementById("minprice").value;
  maximumprice=document.getElementById("maxprice").value;
  t1="<tr><th>Company</th><th>Model</th><th>Memory(GB)</th><th>Price</th></tr>";
  for(i=0;i<arr.length;i++)
  {
    if(arr[i].price>=minimumprice && arr[i].price<=maximumprice)

    {
       t1+="<tr><td>"+arr[i].company+"</td><td>"+arr[i].model+"</td><td>"+arr[i].Memory+"</td><td>"+arr[i].price+"</td></tr>";

      }
//       // console.log(t1)
  }
  console.log(document.getElementById("showmobiletable1").id);
  document.getElementById("showmobiletable1").innerHTML=t1;

}

//##########################################################################################################//
