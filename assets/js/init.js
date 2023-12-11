// window.onload = function() //генерация данных путём перезагрузки страницы
// {
//     const initPerson = personGenerator.getPerson();
//     document.getElementById('surnameOutput').innerText = initPerson.surname;
//     document.getElementById('firstNameOutput').innerText = initPerson.firstName;
//     document.getElementById('patronymicOutput').innerText = initPerson.patronymic;
//     document.getElementById('genderOutput').innerText = initPerson.gender;
//     document.getElementById('birthDayOutput').innerText = initPerson.day;
//     document.getElementById('birthMonthOutput').innerText = initPerson.month;
//     document.getElementById('birthYearOutput').innerText = initPerson.year;
//     document.getElementById('professionOutput').innerText = initPerson.profession;
// };

document.getElementById('btn_generate').addEventListener('click', function() {
  const initPerson = personGenerator.getPerson();
  document.getElementById('surnameOutput').innerText = initPerson.surname;
  document.getElementById('firstNameOutput').innerText = initPerson.firstName;
  document.getElementById('patronymicOutput').innerText = initPerson.patronymic;
  document.getElementById('genderOutput').innerText = initPerson.gender;
  document.getElementById('birthDateOutput').innerText = initPerson.birthdate + ", ";
  document.getElementById('professionOutput').innerText = initPerson.profession;
});

document.getElementById('btn_clear').addEventListener('click', function() {
  document.getElementById('surnameOutput').innerText = 'Фамилия';
  document.getElementById('firstNameOutput').innerText = 'Имя';
  document.getElementById('patronymicOutput').innerText = 'Отчество';
  document.getElementById('genderOutput').innerText = 'Пол, ';
  document.getElementById('birthDateOutput').innerText = 'Дата рождения, ';
  document.getElementById('professionOutput').innerText = 'Профессия';
}
);