const todos = [];

function addtable() {
    const comment = document.getElementById("comment");
    const todo = { task: comment.value, status: "作業中", deletion: "削除" }
    todos.push(todo);

    let table = document.getElementById("table-contents");
    table.innerHTML = "";
 
    todos.forEach(function (value, index) {
        const statusbtn = document.createElement("input");
        statusbtn.type = "button";
        statusbtn.value = value.status;
        const deletebtn = document.createElement("input");
        deletebtn.type = "button";
        deletebtn.value = value.deletion;
        deletebtn.id = "deleteNo" + index;

        let newRow = table.insertRow();
        let newCell = newRow.insertCell();
        let newText = document.createTextNode(index);
        newCell.appendChild(newText);

        newCell = newRow.insertCell();
        newText = document.createTextNode(value.task);
        newCell.appendChild(newText);

        newCell = newRow.insertCell();
        newCell.appendChild(statusbtn);

        newCell = newRow.insertCell();
        newCell.appendChild(deletebtn);

        document.getElementById(`deleteNo${index}`).onclick = function deletetable() {
            let a = this.id.substring(8);
            todos.splice(a, 1);
        
            let table = document.getElementById("table-contents");
            table.innerHTML = "";        
        
            todos.forEach(function (value, index) {
                const statusbtn = document.createElement("input");
                statusbtn.type = "button";
                statusbtn.value = value.status;
                const deletebtn = document.createElement("input");
                deletebtn.type = "button";
                deletebtn.value = value.deletion;
                deletebtn.id = "deleteNo" + index;
        
                let newRow = table.insertRow();
                let newCell = newRow.insertCell();
                let newText = document.createTextNode(index);
                newCell.appendChild(newText);
        
                newCell = newRow.insertCell();
                newText = document.createTextNode(value.task);
                newCell.appendChild(newText);
        
                newCell = newRow.insertCell();
                newCell.appendChild(statusbtn);
        
                newCell = newRow.insertCell();
                newCell.appendChild(deletebtn);
            });
        }
    });
    comment.value = "";
}
