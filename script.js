document.getElementById("ageForm").addEventListener("submit", function (event) {
  event.preventDefault();
  const dob = new Date(document.getElementById("dob").value);
  const today = new Date();

  let years = today.getFullYear() - dob.getFullYear();
  let months = today.getMonth() - dob.getMonth();
  let days = today.getDate() - dob.getDate();

  if (days < 0) {
    months--;
    days += new Date(today.getFullYear(), today.getMonth(), 0).getDate();
  }

  if (months < 0) {
    years--;
    months += 12;
  }

  const result = `${years} years ${months} months ${days} days`;
  document.getElementById("result").textContent = result;
});
