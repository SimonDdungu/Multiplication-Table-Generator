let User;
const Form = document.querySelector("form");
const Table = document.querySelector(".Table");
const table_element = document.querySelector("table");
const Table_Heading = document.querySelector(".Heading");
const Submit = document.querySelector(".Submit");
const Table_body = document.querySelector(".Table_body");

let Table_Row;
let Table_Data_Number;
let Table_Data_Answer;

let Answer;


function generateMultiplicationTable(User){

    if(User == ""){

        Table_Heading.textContent = "Please Enter a number!";
        table_element.style.display = "none";

    } else{

        table_element.style.display = "block";
        Table_body.innerHTML = "";
        Table_Heading.textContent = `Multiplication Table of ${User}`;

        for(let i = 1; i <= 10; i++){
            Answer = i * User;

            Table_Row = document.createElement("tr");
            
            Table_Data_Number = document.createElement("td");
            Table_Data_Number.textContent = `${i} x ${User}`;

            Table_Data_Answer = document.createElement("td");
            Table_Data_Answer.textContent = `${Answer}`;

            Table_Row.append(Table_Data_Number);
            Table_Row.append(Table_Data_Answer);

            Table_body.append(Table_Row);
        }

    }

}

Submit.addEventListener("click", (e) => {
    e.preventDefault();

    User = document.querySelector(".User").value;

    generateMultiplicationTable(User);

    console.log(User);
})