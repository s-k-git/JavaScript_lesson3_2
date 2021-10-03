"use strict";

const todos = [];
const comment = document.getElementById("comment");
const table = document.getElementById("table-contents");

function addtable() {
    const todo = { task: comment.value, status: "作業中", deletion: "削除" }
    todos.push(todo);
    listdescription();
}

function listdescription() {
    table.innerHTML = "";
    todos.forEach(function (value, index) {
        const statusbtn = document.createElement("input");
        statusbtn.type = "button";
        statusbtn.value = value.status;
        const deletebtn = document.createElement("input");
        deletebtn.type = "button";
        deletebtn.value = value.deletion;
        deletebtn.id = "deleteNo" + index;
        //deletebtn.addEventListener('click', () => {
        //    todos.splice(index, 1);
        //    listdescription();
        //});

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

        //idを取得するのでdeletebtnをappend後でないとnullエラー ※getElementはhtmlから取得するのでdeletebtn.idを指定済でもnull
        document.getElementById(`deleteNo${index}`).onclick = function () {
            todos.splice(index, 1);
            listdescription();
        }
    });
    comment.value = "";
    //最初の宣言をconst comment = document.getElementById("comment").value;にすると再定義エラーがでるので全体を取得し.valueで都度出力
}