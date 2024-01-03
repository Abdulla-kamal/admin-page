//Check On Local Storage
if (localStorage.getItem("--main-color")) {
  document.documentElement.style.setProperty(
    "--main-color",
    localStorage.getItem("--main-color")
  );
  document.documentElement.style.setProperty(
    "--secondry-color",
    localStorage.getItem("--secondry-color")
  );
  document.documentElement.style.setProperty(
    "--background-color",
    localStorage.getItem("--background-color")
  );
  document.documentElement.style.setProperty(
    "--white-color",
    localStorage.getItem("--white-color")
  );
  document.documentElement.style.setProperty(
    "--text-color",
    localStorage.getItem("--text-color")
  );
  document.querySelectorAll(".settings .icon  i").forEach((i) => {
    i.classList.remove("active");
    if (i.dataset.maincolor === localStorage.getItem("--main-color")) {
      i.classList.add("active");
    }
  });
}

// Start Header

//Toggle Open Settings Class
document
  .querySelector(" .settings .gaer-icon")
  .addEventListener("click", (_) => {
    document.querySelector(".settings").classList.toggle("open");
    document.querySelector(".settings .fa-gear").classList.toggle("fa-spin");
  });

//Switch Between Dark Mood And Sun Mood
document.querySelectorAll(".settings .icon i").forEach((i) => {
  i.addEventListener("click", function (e) {
    e.target.parentElement.querySelector(".active").classList.remove("active");
    e.target.classList.add("active");
    document.documentElement.style.setProperty(
      "--main-color",
      e.target.dataset.maincolor
    );
    document.documentElement.style.setProperty(
      "--secondry-color",
      e.target.dataset.secondrycolor
    );
    document.documentElement.style.setProperty(
      "--background-color",
      e.target.dataset.backgroundcolor
    );
    document.documentElement.style.setProperty(
      "--white-color",
      e.target.dataset.whitecolor
    );
    document.documentElement.style.setProperty(
      "--text-color",
      e.target.dataset.textcolor
    );
    localStorage.setItem("--main-color", e.target.dataset.maincolor);
    localStorage.setItem("--secondry-color", e.target.dataset.secondrycolor);
    localStorage.setItem(
      "--background-color",
      e.target.dataset.backgroundcolor
    );
    localStorage.setItem("--white-color", e.target.dataset.whitecolor);
    localStorage.setItem("--text-color", e.target.dataset.textcolor);
  });
});
// End Header

// Start Main Page Height
let headerHeight = document.querySelector("header").scrollHeight;
let bodyHeight = document.body.scrollHeight;
console.log(bodyHeight);
document.querySelector(".main-page").style.height = `${(
  bodyHeight - headerHeight
).toString()}px`;
// End Main Page Height

// Start Add Employee Click
const addEmplBtn = document.querySelector(
  ".data[data-section=add-employees] .add-employees button"
);
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

// Start Close Button
editEmplForm.querySelector(".close").addEventListener("click", (_) => {
  document.querySelector(".overlayForm").style.display = "none";
  editEmplForm.style.display = "none";
});
// End Close Button

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
//Close The Promp
filePromp.querySelector(".close").addEventListener("click", (_) => {
  document.querySelector(".overlay").style.display = "none";
  filePromp.style.display = "none";
});

// Start Click Add File
filePromp.querySelector(".add-file").addEventListener("click", (_) => {
  document.querySelector(".overlayForm").style.display = "block";
  document.querySelector(".form-add-file").style.display = "flex";
});
// Close Th Add File
document
  .querySelector(".form-add-file")
  .querySelector(".close")
  .addEventListener("click", (_) => {
    document.querySelector(".overlayForm").style.display = "none";
    document.querySelector(".form-add-file").style.display = "none";
  });
// End Click Add File
//End File Click

// Start Edit Click
// End Edit Click
