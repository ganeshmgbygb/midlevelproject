// Validating Empty Field
let serialNumber = 1;
function check_empty(event) {
  
  var name = document.getElementById("name").value;
  let email = document.getElementById("email").value;

  if (name === "" || email === "") {
    alert("Fill All Fields!");
  } else {
    alert("Form Submitted Successfully...");
    document.getElementById("abc").style.display = "none"; // Optionally close the modal on successful submission
    empty();

    const tableElement = document
    .getElementById("table")
    .getElementsByTagName("tbody")[0];
  const trElement = document.createElement("tr");
  const number = document.createElement("td");
  const nameEle = document.createElement("td");
  const emailEle = document.createElement("td");

  number.innerHTML = serialNumber++;
  nameEle.innerHTML = name;
  emailEle.innerHTML = email;

  trElement.appendChild(number);
  trElement.appendChild(nameEle);
  trElement.appendChild(emailEle);
  tableElement.appendChild(trElement);
  }
  
 
  

  // Prevent form from submitting if there are empty fields
  event.preventDefault();
}
function empty() {
  if (check_empty) document.getElementById("name").value = "";
  document.getElementById("email").value = "";
}

// Function To Display Popup
function div_show() {
  document.getElementById("abc").style.display = "block";
}

// Function to Hide Popup
function div_hide() {
  document.getElementById("abc").style.display = "none";
}

const togglePassword = document.querySelector("#eye");
const password = document.querySelector("#email");

togglePassword.addEventListener("click", function () {
  // Toggle the type attribute
  const type =
    password.getAttribute("type") === "password" ? "text" : "password";
  password.setAttribute("type", type);

  // Toggle the eye slash icon
  this.classList.toggle("fa-eye");
  this.classList.toggle("fa-eye-slash");
});

password.addEventListener("click", function (e) {
  e.preventDefault();
});

document.querySelector(".searchButton").addEventListener("click", function() {
  const searchTerm = document.querySelector(".searchTerm").value.toLowerCase();
  const tableRows = document.querySelectorAll("#table tbody tr");

  tableRows.forEach(row => {
      const cells = row.querySelectorAll("td");
      let found = false;

      cells.forEach(cell => {
          if (cell.innerText.toLowerCase().includes(searchTerm)) {
              found = true;
          }
      });

      if (found) {
          row.style.display = "";
      } else {
          row.style.display = "none";
      }
  });
});
