let myJSON = '{"name":" Nader ","age":" 22 "}';
 let myObj = JSON.parse(myJSON);

 students = {student:[
    {"elevID":1, "Firstname":"Nader", "lastname":"Alahmwi", "age":22},
    {"elevID":1, "Firstname":"tim", "lastname":"tuvestam", "age":28},
    {"elevID":1, "Firstname":"David", "lastname":"wernow", "age":28}
 ]}

let text = document.getElementById("text");


   document.getElementById("fname1").innerHTML = students.student[0].Firstname;
   document.getElementById("lname1").innerHTML = students.student[0].lastname;
   document.getElementById("age1").innerHTML = students.student[0].age;
   
   document.getElementById("fname2").innerHTML = students.student[1].Firstname;
   document.getElementById("lname2").innerHTML = students.student[1].lastname;
   document.getElementById("age2").innerHTML = students.student[1].age;
   
   document.getElementById("fname3").innerHTML = students.student[2].Firstname;
   document.getElementById("lname3").innerHTML = students.student[2].lastname;
   document.getElementById("age3").innerHTML = students.student[2].age;


function intext (){

   var table = document.getElementById("myTable");

   var Fname = document.getElementById("Fname").value;
   var Lname = document.getElementById("Lname").value;
   var Age = document.getElementById("Age").value;

   var de = parseFloat(Age);


   if(Number(de)){
      var row = table.insertRow(0);

      var cell1 = row.insertCell(0);
      var cell2 = row.insertCell(1);
      var cell3 = row.insertCell(2);

      cell1.innerHTML = Fname;
      cell2.innerHTML = Lname;
      cell3.innerHTML = Age;

      var Fname = document.getElementById("Fname").value = "";
      var Lname = document.getElementById("Lname").value = "";
      var Age = document.getElementById("Age").value = "";
   }else{
      window.alert("Age is not a Number");
      var Fname = document.getElementById("Fname").value = "";
      var Lname = document.getElementById("Lname").value = "";
      var Age = document.getElementById("Age").value = "";
   }
}

function Uttext(){
  document.getElementById("myTable").deleteRow(0);
}