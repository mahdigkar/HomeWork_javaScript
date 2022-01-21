var students = [];
var studentIndex = -1;



function btnAddClick() {
    if (validate()) {
        var firstname = document.getElementById('firstname').value;
        var lastname = document.getElementById('lastname').value;
        var age = document.getElementById('age').value;

        var student = [];
        student["name"] = firstname;
        student["lastname"] = lastname;
        student["age"] = age;
        student["selected"] = false;

        document.getElementById('firstname').value = "";
        document.getElementById('lastname').value = "";
        document.getElementById('age').value = "";

        students.push(student);

        drowStudents();
    }
}

function validate() {
    var firstname = document.getElementById('firstname').value;
    var lastname = document.getElementById('lastname').value;
    var age = document.getElementById('age').value;

    if (firstname == "" || lastname == "" || age == "") {
        alert("لطفا فیلدهای اجباری را وارد کنید");
        return false;
    }
    else {
        return true;

    }
}

function drowStudents() {
    var tbl = document.getElementById("pnlStudents");

    tbl.innerHTML = '';
    for (var i = 0; i < students.length; i++) {
        var tr = document.createElement('tr');
        tbl.appendChild(tr);

        var td1 = document.createElement('td');
        tr.appendChild(td1);
        td1.innerText = students[i].name;

        var td2 = document.createElement('td');
        tr.appendChild(td2);
        td2.innerText = students[i].lastname;

        var td3 = document.createElement('td');
        tr.appendChild(td3);
        td3.innerText = students[i].age;

        var td4 = document.createElement('td');
        tr.appendChild(td4);

        var btnedit = document.createElement("input");
        btnedit.type = "button";
        btnedit.value = "edit";
        btnedit.attributes["stdIndex"] = i;
        btnedit.onclick = EditStudent;
        td4.appendChild(btnedit);

        var td5 = document.createElement('td');
        tr.appendChild(td5);

        var chkSelected = document.createElement("input");
        chkSelected.type = "checkbox";
        chkSelected.attributes["stdIndex"] = i;
        chkSelected.onchange = chkSelectedChange;
        chkSelected.checked = students[i].selected;
        td5.appendChild(chkSelected);

    }
}

function chkSelectedChange() {
    var student = students[this.attributes["stdIndex"]];
    student["selected"] = this.checked;

    console.log(students);
}

function deleteSelectedStudent() {
    var newStudents = [];
    for (var i = 0; i < students.length; i++) {
        if (!students[i].selected)
            newStudents.push(students[i]);
    }

    console.log(newStudents);

    students = newStudents;
    drowStudents();
}

function deleteStudent() {
    students.splice(this.attributes["stdIndex"], 1);
    drowStudents();
}

function EditStudent() {
    var student = students[this.attributes["stdIndex"]];
    document.getElementById('firstname').value = student["name"];
    document.getElementById('lastname').value = student["lastname"];
    document.getElementById('age').value = student["age"];
    studentIndex = this.attributes["stdIndex"];
    document.getElementById('btnOk').disabled = false;
    document.getElementById('btnCancel').disabled = true;
    document.getElementById('btnAdd').disabled = true;
}

function btnOkClick() {
    if (validate()) {
        var student = students[studentIndex];
        student["name"] = document.getElementById('firstname').value;
        student["lastname"] = document.getElementById('lastname').value;
        student["age"] = document.getElementById('age').value;

        document.getElementById('btnOk').disabled = true;
        document.getElementById('btnCancel').disabled = true;
        document.getElementById('btnAdd').disabled = false;
        document.getElementById('btnAdd').disabled = false;
        drowStudents();
    }
}

function btnCancelClick() {
    document.getElementById('btnOk').disabled = true;
    document.getElementById('btnCancel').disabled = true;
    document.getElementById('btnAdd').disabled = false;

    document.getElementById('firstname').value = "";
    document.getElementById('lastname').value = "";
    document.getElementById('age').value = "";

    drowStudents();
}
function invertselection(checked) {
    console.log(checked);
    for (var i = 0; i < students.length; i++)
        students[i].selected=checked;

    console.log(students);
    drowStudents();
}