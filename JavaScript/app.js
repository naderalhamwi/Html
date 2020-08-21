let myJSON = '{"name":" Nader ","age":" 22 "}';
 let myObj = JSON.parse(myJSON);

 students = {student:[
    {"elevID":1, "Firstname":"Nader", "lastname":"Alahmwi", "age":22},
    {"elevID":1, "Firstname":"tim", "lastname":"tuvvestam", "age":28},
    {"elevID":1, "Firstname":"David", "lastname":"werrnow", "age":28}
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