import "./style.css";

import bg from "./assets/bg.jpg";

//get dom element
let button_send = document.querySelector("div.container form button");
let list_of_input = document.querySelectorAll("div.container form input");
/**
 * @type {HTMLSelectElement}
 */
let select_country = document.querySelector(
  "div.container form .left select#country "
);

//listener
button_send.addEventListener("click", (event) => {
  event.preventDefault();
  input_check_validity();
});

//functions
let input_check_validity = () => {
  let every_thing_good = true;

  //clear any invalid_input
  list_of_input.forEach((input) => {
    input.classList.remove("invalid_input");
  });

  select_country.classList.remove("invalid_input");

  //check the ones that don't have a value and display error
  list_of_input.forEach(
    /**
     *
     * @param {HTMLInputElement} input
     */
    (input) => {
      if (input.value.length <= 0) {
        input.classList.add("invalid_input");
        input.setCustomValidity("Need to input values");
        if (every_thing_good) every_thing_good = false;
      } else {
        input.setCustomValidity("");
      }
    }
  );

  if (select_country.value == "none") {
    select_country.classList.add("invalid_input");
    if (every_thing_good) every_thing_good = false;
  }

  if (every_thing_good) {
    alert("✋" + " Good job");
  }
};

//adding background image
document.body.style.backgroundImage = `url(${bg})`;
