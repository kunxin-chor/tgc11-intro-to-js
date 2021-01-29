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
    return "n/a";
  }
}

function addOptions(selectElement, options) {
  for (let o of options) {
    let html = `<option value='${o.id}'>${o.name}</option>`;
    selectElement.innerHTML += html;
  }
}

function setupForm() {
  let categorySelect = document.querySelector("#category");
  addOptions(categorySelect, categories);

  let tagSelect = document.querySelector("#tags");
  addOptions(tagSelect, tags);
  document
    .querySelector("#create-btn")
    .addEventListener("click", async function() {
      let name = document.querySelector("#name").value;
      let categoryId = document.querySelector("#category").value;
      let selectedCategory = categories[categoryId - 1];

      let selectedTags = [];
      let allTags = document.querySelectorAll("#tags option");
      for (let t of allTags) {
        if (t.selected) {
          selectedTags.push(tags[parseInt(t.value) - 1]);
        }
      }

      let payload = {
        id: Math.random(1000000),
        name: name,
        category: selectedCategory,
        tags: selectedTags,
        photoUrls: ["string"],
        status: "available"
      };

      try {
        let response = await axios.post(baseURL + "pet", payload);
        console.log(response);
      } catch (e) {
        alert("Failed to create pet");
        console.log(e);
      }
    });
}

async function displayPets() {
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
}
