function akanName() {
  // variables to be used

  var dayOfMonth = document.getElementById('dayOfMonth').value;
  var month = document.getElementById('month').value;
  var yearOfBirth = document.getElementById('year').value;
  var gender = document.getElementById('gender').value;
  var century = yearOfBirth.slice(0, 2);
  var year = yearOfBirth.slice(2, 4);


  // arrays to be used
  daysOfTheWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

  maleNames = ['Kwasi', 'Kwodwo', 'Kwabena', 'Kwaku', 'Yaw', 'Kofi', 'Kwame'];

  femaleNames = ['Akosua', 'Adwoa', 'Abenaa', 'Akua', 'Yaa', 'Afua', 'Ama']

  //formula to determine day of the week
  var day = Math.ceil((((century / 4) - 2 * century - 1) + ((5 * year / 4)) + ((26 * (month + 1) / 10)) + dayOfMonth) % 7)
  var dayBorn = daysOfTheWeek[day - 1];
  var femaleAkanName = femaleNames[day - 1];
  var maleAkanName = maleNames[day - 1];
  if (gender === "Male") {
    alert("Your name is " + maleAkanName + " and you were born on " + dayBorn)
  } else {
    alert("Your name is " + femaleAkanName + " and you were born on " + dayBorn)
  }
}
