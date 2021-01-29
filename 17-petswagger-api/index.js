// const means a constant variable
const baseURL = "https://petstore.swagger.io/v2/";

function renderTags(pet) {
  let tags = [];
  for (let eachTag of pet.tags) {
    tags.push(eachTag.name);
  }
  return tags.join(", ");
}

function renderCategory(pet) {
    // try/catch
    try {
        return pet.category.name;
    } catch (e) {
        console.log("No category found for pet " + pet.id);
        return "n/a";
    }
}

function renderCategoryV2(pet) {
    if (pet.category) {
        return pet.category.name;
    } else {
        console.log("No category found for pet " + pet.id);
        return "n/a"
    }
}

window.addEventListener("DOMContentLoaded", async function() {
  // same as calling the endpoint with ?status=available added at the back
  let response = await axios.get(baseURL + "pet/findByStatus", {
    params: {
      status: "available"
    }
  });
  for (let pet of response.data) {
    let html = `
         <div class="card" style="width: 18rem;">
        <div class="card-body">
          <h5 class="card-title">${pet.name}</h5>
          <ul>
              <li>Categories: ${renderCategoryV2(pet)}</li>
              <li>Tag: ${renderTags(pet)} </li>
          </ul>
          <a href="#" class="btn btn-primary">Go somewhere</a>
        </div>
      </div>
        `;
       document.querySelector("#results").innerHTML += html;
  }
});
