const prompt = require("prompt-sync")();
const axios = require("axios");

async function main() {
  try {
    let r = await axios.get(
      "https://petstore.swagger.io/v3/pet/findByStatus?status=available"
    );
    console.log(r.data);
  } catch (e) {
    console.log(
      "Sorry the API isn't working now. Please try again later or contact website's admin"
    );
  }
  console.log("Program finished");
}

main();
