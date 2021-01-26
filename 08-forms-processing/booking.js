// 1. first we select
let btn = document.querySelector("#booking-btn");
// 2. then we modify
btn.addEventListener("click", function() {
  // 3. retrieve the values
  let fullName = document.querySelector("#fullname").value;

  // alternatively...
  // let fullnameElement = document.querySelector('#fullname');
  // let fullname = fullnameElement.value;

  // 1. we get all the radio buttons by their class
  let seatingRadios = document.querySelectorAll(".seating");
  let selectedSeating;  
  // 2. we go through each radio button with a for loop
  for (let rb of seatingRadios) {
    // 3. for the current radio button we are looking at,
    // see if it is checked attribute is true
    if (rb.checked) {
        // 4. if it is true, remember its values as the selected one
        selectedSeating = rb.value;
        // 5. stop the search
        break;
    } // end if
  } // end for

  let selectedServices = [];
  let servicesCheckbox = document.querySelectorAll('.services');
  for (let s of servicesCheckbox) {
      if (s.checked) {
          // remember the value of this checkbox
          selectedServices.push(s.value);
      }
  }

  let timingSelect = document.querySelector('#timing');
  let timing = timingSelect.value;

  console.log("Selected seating =", selectedSeating);
  console.log("Selected servies =", selectedServices);
  console.log("selected timing =", timing)



  
});
