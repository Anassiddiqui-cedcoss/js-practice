
import{id,Name,Salary} from "./advancetask2.js";
const imp= [
 {id:123,Name:"Anas",Salary:8000},
 {id:456,Name:"Akash",Salary:9000},
 {id:321,Name:"Abhinav",Salary:5000}
];

var info={id:id,Name:Name,Salary:Salary};
imp.push(info);
console.log(imp);
pop();

function pop(){
var tac="<table><tr><th>ID</th><th>Name</th><th>Salary</th></tr>";
for( var i=0; i<imp.length;i++)
{
        
 tac+="<tr><td>" + imp[i].id +"</td><td>"+ imp[i].Name +"</td><td>"+ imp[i].Salary +"</td></tr>";

 }
 tac+="</table>";      

 document.getElementById('table5').innerHTML=tac;
}
