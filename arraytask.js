
var arr= [
    {
      company: 'Samsung',
      model: 'Galaxy',
      Memory:64,
      price: '15000',
    },
    {
        company: 'Nokia',
        model: 'S730',
        Memory: 128,
        price: '22000',
    },
    {
        company: 'Xiomi',
        model: 'note',
        Memory: 32,
        price: '12000',
    },
    {
        company: 'Motorola',
        model: 'G10',
        Memory: 32,
        price: '15000',
    },
    {
    company: 'Apple',
      model: 'S12',
      Memory: 64,
      price: '25000',
    }
  ];
  window.onload =()=>{
    loadtable();
  };
  function loadtable(){
    const tablebody=document.getElementById('tablebody');
    let data='';
    for(i=0; i<arr.length; i++){

  

        data+="<tr><td>" + arr[i].company +"</td><td>"+ arr[i].model +"</td><td>"+ arr[i].Memory +"</td><td>"+arr[i].price+"</td></tr>"
    }
    tablebody.innerHTML+=data;



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
