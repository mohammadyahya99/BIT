let name = document.getElementById("nameId");

const validate = function () {
  if (
    document.getElementById("nameId").value.length == 0 ||
    document.getElementById("phoneId").value.length == 0 ||
    document.getElementById("salaryId").value.length == 0
  )
    document.getElementById("error").innerHTML = "Missind field to fill";
  else if (document.getElementById("nameId").value.length < 3)
    document.getElementById("error").innerHTML =
      "Name must be longer than 2 characters";
  else if (document.getElementById("phoneId").value.length != 10)
    document.getElementById("error").innerHTML = "Phone must be 10 digits long";
  else if (
    document.getElementById("salaryId").value <= 10000 ||
    document.getElementById("salaryId").value >= 16000
  )
    document.getElementById("error").innerHTML =
      "Salary must be between 10,000 and 16,000";
  else {
    document.getElementById("form").style.display = "none";
    alert("Sign up successfully");
  }
};
