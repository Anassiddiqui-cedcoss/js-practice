
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
    console.log(arr);
    tablebody.innerHTML+=data;



  }
 