const addbtn=document.getElementById('btn');
const adduser=document.getElementById('user');
const recordsDisplay=document.getElementById('records');

let edit_id=null;

let userArray=[];
let objstr=localStorage.getItem('user')
if(objstr!=null){
userArray=JSON.parse(objstr);
}
Displayinfo();
//console.log(userArray);  
addbtn.onclick=()=>{
  const name=adduser.value;
  if(edit_id!=null)
  {
userArray.splice(edit_id,1,{'name':name})
edit_id=null;
  }
  else{
    //insert
  
    userArray.push({'name':name});
  }
    //const name=adduser.value;
//    alert(name);
// {name:'king',name:'ram'};
  // userArray.push({'name':name});//object bnya h
  // console.log(userArray);
  Saveinfo(userArray);
  adduser.value="";//empty
  //Displayinfo();
  addbtn.innerHTML='Add task';


}
function Saveinfo(userArray){
  let str  =JSON.stringify(userArray)
localStorage.setItem('user',str);
Displayinfo();
}

function Displayinfo(){

    let statement="";
    userArray.forEach((user,i) => {
      //console.log(i);
        statement+=`<table>
        <th scope="row">${i+1}</th>
          <td>${user.name}</td>
          <td><button onclick='Editinfo(${i})' style="text-align:center">Edit</button></td>
          <td><button onclick='Deleteinfo(${i})'style="text-align:center">Delete</button></td>
      </table>`
          
    });
    recordsDisplay.innerHTML=statement;
}

function Editinfo(id){
    //alert(id);
    edit_id=id;
    adduser.value=userArray[id].name;
     addbtn.innerHTML='save change';
}

function Deleteinfo(id){
   // alert(id);
   userArray.splice(id,1);
   Saveinfo(userArray);
  // Displayinfo();


}
