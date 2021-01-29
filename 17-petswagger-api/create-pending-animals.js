const axios = require("axios");
const prompt = require("prompt-sync")();

async function main() {
  while (true) {
    let animalName = prompt("Enter animal name: ");

    let payload = {
      id: 0,
      category: {
        id: 0,
        name: "string"
      },
      name: animalName,
      photoUrls: ["string"],
      tags: [
        {
          id: 0,
          name: "string"
        }
      ],
      status: "pending"
    };
    if (animalName == "!q") {
      break;
    }
    let r = await axios.post("https://petstore.swagger.io/v2/pet", payload);
    console.log(r.status);
  }
}
main();