// const id=258;
// const Name="aman";
// const Salary=10000;
// export {id,Name, Salary};
const arr=[]
function populate(){
text=""
for(i=0; i<arr.length;i++)
{
      
        text+="<tr><td>" + arr[i].id +"</td><td>" + arr[i].Name +"</td><td>"+ arr[i].salary +"</td><td> <a onclick='del(this)'>Delete</a></td></tr>"
}
document.getElementById('result').innerHTML=text;
     
}
function myresult()
{
id=document.getElementById("id").value,
Name=document.getElementById("name").value,
salary=document.getElementById("salary").value,
 
obj1={id:id,Name:Name,salary:salary};
arr.push(obj1);
console.log(Name)
                
var flag=0;
            
//   for(i=0; i<arr.length; i++){
//         text=
//        "<tr><td>" + arr[i].id +"</td><td>"+ arr[i].Name +"</td><td>"+ arr[i].salary +"</td><td> <a  onclick='del(this)' style='text-decoration:underline;'>Delete</a></td></tr>"
//        }
// if(id=="" && Name=="" && salary==""){
    // return;
// }
try{
  
if(id=="" && Name=="" && salary=="")
{
    flag++;
    
    throw "**It should be filled ";
    
    
}

if(Name.match(/[0-9]/)){
    flag++;
     throw "**Name should not contained numbers ";
    
}
 }
catch(e){
 document.getElementById("error").innerHTML=e;

}
if(flag==0)
{
    for(i=0; i<arr.length; i++){
        text=
       "<tr><td>" + arr[i].id +"</td><td>"+ arr[i].Name +"</td><td>"+ arr[i].salary +"</td><td> <a  onclick='del(this)' style='text-decoration:underline;'>Delete</a></td></tr>"
       }    
}
document.getElementById("result").innerHTML=document.getElementById("result").innerHTML+text;
            
}
function del(args){
    var tr=args.parentNode.parentNode;
    index=tr.rowIndex;
    arr.splice(index,1);
    populate();
    
    
}