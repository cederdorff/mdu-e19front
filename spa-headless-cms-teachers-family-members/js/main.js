"use strict";

// Global Variables
let _familyMembers = [];
let _teachers = [];

// ---------- Fetch data from data sources ---------- //

/*
Fetches post data from my headless cms
*/
function getPersons() {
  fetch('https://headlesscms.cederdorff.com/wp-json/wp/v2/posts?_embed&categories=3')
    .then(function (response) {
      return response.json();
    })
    .then(function (persons) {
      _familyMembers = persons;
      appendPersons(_familyMembers);
    });
}
/*
Appends json data to the DOM
*/
function appendPersons(persons) {
  let htmlTemplate = "";
  for (let index = 0; index < persons.length; index++) {
    var person = persons[index];
    htmlTemplate +=
      '<article>' +
      '<img src="' + getFeaturedImageUrl(person) + '">' +
      '<h3>' + person.title.rendered + '</h3>' +
      '<p>' + person.acf.age + ' years old</p>' +
      '<p>Hair color:' + person.acf.hairColor + '</p>' +
      '<p>Relation:' + person.acf.relation + '</p>' +
      '</article>';
  }
  document.querySelector("#persons").innerHTML = htmlTemplate;
}

/*
Fetches post data from my headless cms
*/
function getTeachers() {
  fetch("https://headlesscms.cederdorff.com/wp-json/wp/v2/posts?_embed&categories=2")
    .then(function (response) {
      return response.json();
    })
    .then(function (teachers) {
      _teachers = teachers;
      appendTeachers(_teachers);
    });
}

// appends teachers
function appendTeachers(teachers) {
  let htmlTemplate = "";
  for (let index = 0; index < teachers.length; index++) {
    var teacher = teachers[index];
    htmlTemplate +=
      '<article>' +
      '<img src="' + getFeaturedImageUrl(teacher) + '">' +
      '<h3>' + teacher.title.rendered + '</h3>' +
      teacher.content.rendered +
      '<p><a href="mailto:' + teacher.acf.email + '">' + teacher.acf.email + '</a></p>' +
      '<p><a href="tel:' + teacher.acf.phone + '">' + teacher.acf.phone + '</a></p>' +
      '</article>'
      ;
  }
  document.querySelector("#teachers-container").innerHTML = htmlTemplate;
}

function search(value) {
  console.log(value);
  let filteredTeachers = [];
  for (let teacher of _teachers) {
    let name = teacher.title.rendered.toLowerCase();
    if (name.includes(value.toLowerCase())) {
      filteredTeachers.push(teacher);
    }
  }

  console.log(filteredTeachers);
  appendTeachers(filteredTeachers);
}

// returns the source url of the featured image of given post or page
function getFeaturedImageUrl(post) {
  let imageUrl = "";
  if (post._embedded['wp:featuredmedia']) {
    imageUrl = post._embedded['wp:featuredmedia'][0].source_url;
  }
  return imageUrl;
}

// =========== Loader functionality =========== //

function showLoader(show) {
  let loader = document.querySelector('#loader');
  if (show) {
    loader.classList.remove("hide");
  } else {
    loader.classList.add("hide");
  }
}

// =========== Init your app =========== //

getPersons();
getTeachers();