let showpassword = document.getElementById("showpassword");
let password = document.getElementById("password");

showpassword.onclick = function () {
  if (password.type == "password") {
    password.type = "text";
  } else {
    password.type = "password";
  }
};

function validateLogin() {
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;

  // Check if credentials are correct
  if (email === "sai@gmail.com" && password === "1234567") {
    window.location.href = "data.html"; // Redirect to data.html
  } else {
    alert("Invalid credentials. Please try again.");
  }
}
