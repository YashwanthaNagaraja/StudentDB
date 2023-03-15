
       var selectedRow = null

// Form Submit Function
function onFormSubmit() {
    // check validity
    if (validate()) {
        // store user data
        var formData = readFormData();
        // check empty row
        if (selectedRow == null)
        {
            // Insert New User Record
            insertNewRecord(formData);
        }
        else
        {
            // Update New User Record
            updateRecord(formData);
        }
        // Reset Input Values
        resetForm();
    }
}
// Get Values From Form
function readFormData() {
    var formData = {};
    // Get Values From  Input
    formData["userName"] = document.getElementById("userName").value;
    formData["Branch/Area"] = document.getElementById("area").value;
    formData["Course"] = document.getElementById("course").value;
    formData["yop"] = document.getElementById("yop").value;
    formData["age"] = document.getElementById("age").value;
    // return Form Data
    return formData;
}
// Insert New User Record
function insertNewRecord(data) {
    var table = document.getElementById("stdlist").getElementsByTagName('tbody')[0];
    var newRow = table.insertRow(table.length);
    cell1 = newRow.insertCell(0);
    cell1.innerHTML = data.userName;
    cell2 = newRow.insertCell(1);
    cell2.innerHTML = data.area;
    cell3 = newRow.insertCell(2);
    cell3.innerHTML = data.course;
    cell4 = newRow.insertCell(3);
    cell4.innerHTML = data.yop;
    cell5 = newRow.insertCell(4);
    cell5.innerHTML = data.age;
    cell5 = newRow.insertCell(5);
    cell5.innerHTML = `<a onClick="onEdit(this)">Edit</a>
    <a onClick="onDelete(this)">Delete</a>`;
}
// Reset Function
function resetForm() {
    document.getElementById("userName").value = "";
    document.getElementById("area").value = "";
    document.getElementById("course").value = "";
    document.getElementById("yop").value = "";
    document.getElementById("age").value = "";
    selectedRow = null;
}
// Edit Function
function onEdit(td) {
    selectedRow = td.parentElement.parentElement;
    document.getElementById("userName").value = selectedRow.cells[0].innerHTML;
    document.getElementById("area").value = selectedRow.cells[1].innerHTML;
    document.getElementById("course").value = selectedRow.cells[2].innerHTML;
    document.getElementById("yop").value = selectedRow.cells[3].innerHTML;
    document.getElementById("age").value = selectedRow.cells[4].innerHTML;
}
// Update Record
function updateRecord(formData) {
    selectedRow.cells[0].innerHTML = formData.userName;
    selectedRow.cells[1].innerHTML = formData.area;
    selectedRow.cells[2].innerHTML = formData.course;
    selectedRow.cells[3].innerHTML = formData.yop;
    selectedRow.cells[4].innerHTML = formData.age;
}
// Delete Function
function onDelete(td) {
    if (confirm('Are you sure to delete this record ?')) {
        row = td.parentElement.parentElement;
        document.getElementById("stdlist").deleteRow(row.rowIndex);
        resetForm();
    }
}
// Check User validation
function validate() {
    isValid = true;
    // userName validation
    if (document.getElementById("userName").value == "") {
        isValid = false;
        document.getElementById("userNamevalidationError").classList.remove("hide");
    } else {
        isValid = true;
        if (!document.getElementById("userNamevalidationError").classList.contains("hide"))
        {
            document.getElementById("userNamevalidationError").classList.add("hide");
        }
    }
    // Roll No validation
    if (document.getElementById("area").value == "") {
        isValid = false;
        document.getElementById("rollNovalidationError").classList.remove("hide");
    } else {
        isValid = true;
        if (!document.getElementById("rollNovalidationError").classList.contains("hide"))
        {
            document.getElementById("rollNovalidationError").classList.add("hide");
        }
    }
    // Std class validation
    if (document.getElementById("course").value == "") {
        isValid = false;
        document.getElementById("stdClassvalidationError").classList.remove("hide");
    } else {
        isValid = true;
        if (!document.getElementById("stdClassvalidationError").classList.contains("hide"))
        {
            document.getElementById("stdClassvalidationError").classList.add("hide");
        }
    }
    // Tsub validation
    if (document.getElementById("yop").value == "") {
        isValid = false;
        document.getElementById("tsubvalidationError").classList.remove("hide");
    } else {
        isValid = true;
        if (!document.getElementById("tsubvalidationError").classList.contains("hide"))
        {
            document.getElementById("tsubvalidationError").classList.add("hide");
        }
    }
    // Age validation
    if (document.getElementById("age").value == "") {
        isValid = false;
        document.getElementById("agevalidationError").classList.remove("hide");
    } else {
        isValid = true;
        if (!document.getElementById("agevalidationError").classList.contains("hide"))
        {
            document.getElementById("agevalidationError").classList.add("hide");
        }
    }
    return isValid;
}
   
