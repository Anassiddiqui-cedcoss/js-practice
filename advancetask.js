
const arr=[]
function populate(){
    text=""
    for(i=0; i<arr.length;i++)
    {
      
        text+=
    "<tr><td>" + arr[i].id +"</td><td>"
    + arr[i].Name +"</td><td>"
    + arr[i].salary +"</td><td> <a onclick='del(this)'>Delete</a></td></tr>"
      
    
}
     document.getElementById('result').innerHTML=text;
     
    }
    function myresult()
    {
        arr.push(
            
            
            {
                id:document.getElementById("id").value,
                Name:document.getElementById("name").value,
                salary:document.getElementById("salary").value,
                action:""
                
            }
            )
            
            for(i=0; i<arr.length; i++){
                
                
                
                text=
                "<tr><td>" + arr[i].id +"</td><td>"
                + arr[i].Name +"</td><td>"
                + arr[i].salary +"</td><td> <a  onclick='del(this)' style='text-decoration:underline;'>Delete</a></td></tr>"
            }
            if(salary.value<=0){
                debugger;
                // alert();
            }
            
            // try{
            //     if(id=="" && Name=="" && salary==""){
            //         throw "It should be filled "
            //     }
            //     if(id)
            // }
            document.getElementById("result").innerHTML=document.getElementById("result").innerHTML+text;
            
        }
function del(args){
    var tr=args.parentNode.parentNode;
    index=tr.rowIndex;
    arr.splice(index,1);
    populate();
    
    
}
//##############################################Task-02#######################################################
class details{constructor(id,Name,salary)
    {
        
        this.id = id;
    this.Name=Name;
    this.salary=salary;
} 
}
let alldetails = new details(122,"anas",20000);
var text="<table><tr><th>ID</th><th>Name</th><th>Total-Salary</th></tr>";
text+="<tr><td>"+alldetails.id+"</td><td>"+alldetails.Name+"</td><td>"+alldetails.salary+"</td></tr>";
text+="</table>";
document.getElementById("table1").innerHTML=text;

//###############################################task=03########################################################################
let txt = '{"employees":[' +
'{"Id":"123","Name":"Anas","Totalsalary":"10000" },' +
'{"Id":"456","Name":"Akash","Totalsalary":"20000"},' +
'{"Id":"789","Name":"Anant","Totalsalary":"30000" }]}';



const obj = JSON.parse(txt);
document.getElementById("table2").innerHTML =
obj.employees[0].Id + " " + obj.employees[0].Name+" "+obj.employees[0].Totalsalary;

//###############################################Task-04##########################################################################
const data=[];
class data1{constructor(id,Name,salary)
    {
        
        this.id = id;
        this.Name=Name;
        this.salary=salary;
    } 
    JsonAccept(jsonobj){
    var obj1 = JSON.parse(jsonobj);
    
    this.id = obj1.id;
    this.Name=obj1.Name;
    this.salary=obj1.salary;
}
}
let objdetails = new data1(1,"john",8000);
t1='{"id":"1","Name":"John","salary":"8000" }';
objdetails.JsonAccept(t1);
var text="<table><tr><th>ID</th><th>Name</th><th>TotalSalary</th></tr>";
text+="<tr><td>"+objdetails.id+"</td><td>"+objdetails.Name+"</td><td>"+objdetails.salary+"</td></tr>";
text+="</table>";
document.getElementById("tabledetails").innerHTML=text;

//###############################################################task-05#########################################################

const array=[
    {id:123,name:"Anas",salary:8000,updatedsalary:""},
    {id:456,name:"Akash",salary:9000,updatedsalary:""},
    {id:789,name:"Aman",salary:7000,updatedsalary:""},
    {id:321,name:"Abhinav",salary:5000,updatedsalary:""}
];
function populatearr(){
    
    
    try {
     for(i=0;i<array.length;i++)
     {
         
         updatedsalary=array[i].salary*1.10;
         array[i].updatedsalary=updatedsalary;
         
        }
        
        
    }
    catch(err) {
        alert();
        
    }
    
    table="<table><tr><th>ID</th><th>Name</th><th>TotalSalary</th><th>updatedsalary</th></tr>";
    for(i=0; i<array.length;i++)
    {
        
    table+=
    "<tr><td>" + array[i].id +"</td><td>"
    + array[i].name +"</td><td>"
    + array[i].salary +"</td><td>"+array[i].updatedsalary+"</td></tr><br>";
    table+="</table>";
      
      
}
document.getElementById('table3').innerHTML=table;

}

populatearr();

//##############################################Task-06######################################################

const array1=[
    {id:123,name:"Anas",salary:8000,output:""},
    {id:456,name:"Akash",salary:9000,output:""},
    {id:789,name:"Aman",salary:7000,output:""},
    {id:321,name:"Abhinav",salary:5000,output:""}
];
function populatearr1(){
    table1="<table><tr><th>ID</th><th>Name</th><th>TotalSalary</th><th>salary(15%)</th></tr>";
    for(i=0; i<array1.length;i++)
    {
        
        table1+=
    "<tr><td>" + array1[i].id +"</td><td>"
    + array1[i].name +"</td><td>"
    + array1[i].salary +"</td><td>"+array1[i].output+"</td></tr><br>";
    table1+="</table>";
}

      
document.getElementById('table4').innerHTML=table1;
}
     updatesalary();
     function updatesalary(){
         
         array1.map((x)=>x.output=x.salary*0.15);
         populatearr1();
        }
//#######################################Task-07#############################################################
//##########################################Task-08############################################################

