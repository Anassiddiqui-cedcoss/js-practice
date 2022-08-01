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
