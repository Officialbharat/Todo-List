var input = document.getElementById("addId");
var buttonAdd = document.getElementById("addBtn");
var tData = document.getElementById("text")
function addData() {
    if (input.value == "") {
        alert("Please Enter Data");
    } else {
      var newtr = document.createElement("tr");
      newtr.style.textAlign = "center";
      tData.appendChild(newtr);
      var td = document.createElement("td");
      td.setAttribute("class", "tdText");
      newtr.appendChild(td);

     td.innerText = input.value;
     input.value = "";
    }

        var editTd = document.createElement("td");
        var editBtn = document.createElement("button");
        editBtn.setAttribute("class", "editButton");
        editBtn.innerText = "Edit";
        editBtn.addEventListener("click", function() {
            var newText = prompt("Edit your Data:", td.innerText);
            if (newText !== null) {
                td.innerText = newText;
            }
        });
        editTd.appendChild(editBtn);
        newtr.appendChild(editTd);
        

        var deleteTd = document.createElement("td");
        var deleteBtn = document.createElement("button");
        deleteBtn.setAttribute("class", "deleteButton");
        deleteBtn.innerText = "Delete";
        deleteBtn.addEventListener("click", function() {
            tData.removeChild(newtr);
        });
        deleteTd.appendChild(deleteBtn);
        newtr.appendChild(deleteTd);
    }





