function akanName() {
  // // variables to be used

  var dayOfMonth = document.getElementById('dayOfMonth').value;
  alert(dayOfMonth);

  var month = document.getElementById('month').value;
  alert(month);

  var yearOfBirth = document.getElementById('year').value;
  alert(yearOfBirth);

  var female = document.getElementById('gender').value;
  alert(female);

  var male = document.getElementById('gender').value;
  alert(male);

  var century = yearOfBirth.slice(0, 2);
  alert(century);

  var year = yearOfBirth.slice(2, 4);
  alert(year);

  // // arrays to be used
  daysOfTheWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

  maleNames = ['Kwasi', 'Kwodwo', 'Kwabena', 'Kwaku', 'Yaw', 'Kofi', 'Kwame'];

  femaleNames = ['Akosua', 'Adwoa', 'Abenaa', 'Akua', 'Yaa', 'Afua', 'Ama']


  // (((century / 4) - 2 * century - 1) + ((5 * year / 4)) + ((26 * (month + 1) / 10)) + day) mod 7

}
