const reservations = {
  Bob: { claimed: false },
  Ted: { claimed: true },
};

function checkReservation() {
  let name = document.getElementById("nameId").value;
  let flag = false;
  for (let index in reservations) {
    if (index === name) flag = true;
  }
  if (flag && reservations[name].claimed === false) {
    alert("welcome " + name);
  } else if (flag && reservations[name].claimed === true) {
    alert("Hmm, someone already claimed this reservation");
  } else {
    alert("You have no reservation");
  }
}
