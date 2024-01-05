// Start Add Employee Click
const addEmplBtn = document.querySelector(".data[data-section=add-employees] .add-employees button");
const formAddEmp = document.querySelector(".form-add-employee");
addEmplBtn.addEventListener("click", (_) => {
  document.querySelector(".overlayForm").style.display = "block";
  formAddEmp.style.display = "flex";
});

// Start Close Button
formAddEmp.querySelector(".close").addEventListener("click", (_) => {
  document.querySelector(".overlayForm").style.display = "none";
  formAddEmp.style.display = "none";
});
// End Close Button

// End Add Employee Click

// Start Add Employee Click
const editEmplForm = document.querySelector(
  ".data[data-section=add-employees] .form-edit-employee"
  );
document.querySelectorAll(".data table button.edit").forEach((em, i) => {
  em.addEventListener("click", function (e) {
    document.querySelector(".overlayForm").style.display = "block";
    editEmplForm.style.display = "flex";
  });
});


// End Add Employee Click

//Start File Click
const employees = {
  name: [
    "Abdulla Kamal",
    "Abdulrahman Almansoury",
    "Moftah Ali",
    "Ibrahim Jamal",
  ],
  number: [211, 546, 443, 708],
};
let filePromp = document.querySelector(".file-promp");
document.querySelectorAll(".data table button.file").forEach((em, i) => {
  em.addEventListener("click", function (e) {
    document.querySelector(".overlay").style.display = "block";
    filePromp.querySelector(".name").innerHTML = employees.name[i];
    filePromp.querySelector(".number").innerHTML = employees.number[i];
    filePromp.style.display = "block";
  });
});
//Hide The Overlay
filePromp.querySelector(".close").addEventListener("click", (_) => {
  document.querySelector(".overlay").style.display = "none";
});

// Start Click Add File
filePromp.querySelector(".add-file").addEventListener("click", (_) => {
  document.querySelector(".overlayForm").style.display = "block";
  document.querySelector(".form-add-file").style.display = "flex";
});
// End Click Add File
//End File Click


