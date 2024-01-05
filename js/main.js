// Start General Coding
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

// Start Close Button With All Promp
document.querySelectorAll(".close").forEach((closeBtn) => {
  closeBtn.addEventListener("click", function (e) {
    document.querySelector(".overlayForm").style.display = "none";
    e.target.parentElement.style.display = "none";
  });
});
// End Close Button With All Promp

// Start Main Page Height
let headerHeight = document.querySelector("header").scrollHeight;
let bodyHeight = document.body.scrollHeight;
document.querySelector(".main-page").style.height = `${(
  bodyHeight - headerHeight
).toString()}px`;
// End Main Page Height

// End General Coding




// Start Click Edit On User
const editBtn = document.querySelectorAll(".data table.user button.edit");
const editForm = document.querySelector(".data .edit");

editBtn.forEach((btn) => {
  btn.addEventListener("click", function (e) {
    document.querySelector(".overlayForm").style.display = "block";
    editForm.style.display = "flex";
  });
});
// End Click Edit On User



