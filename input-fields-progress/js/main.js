"use strict"; // to enable strict mode and modern JavaScript functionality

function inputChange() {
  let inputFields = document.querySelectorAll("input");
  let numberOfInputFields = inputFields.length;

  let numberOfInputFieldsWithValue = 0;
  for (const inputField of inputFields) {
    if (inputField.value) {
      numberOfInputFieldsWithValue++;
    }
  }

  document.querySelector("#progress").max = numberOfInputFields;
  document.querySelector("#progress").value = numberOfInputFieldsWithValue;
}