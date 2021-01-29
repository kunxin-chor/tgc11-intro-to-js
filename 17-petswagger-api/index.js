// const means a constant variable
const baseURL = "https://petstore.swagger.io/v2/";
const categories = [
  {
    id: 1,
    name: "Dog"
  },
  {
    id: 2,
    name: "Cat"
  },
  {
    id: 3,
    name: "Fish"
  },
  {
    id: 4,
    name: "Others"
  }
];

const tags = [
  {
    id: 1,
    name: "Cute"
  },
  {
    id: 2,
    name: "Shedding"
  },
  {
    id: 3,
    name: "Old"
  },
  {
    id: 4,
    name: "Young"
  }
];


window.addEventListener("DOMContentLoaded", async function() {
 
   setupForm();
   displayPets();

 
});
