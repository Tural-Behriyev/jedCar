const addCarForm = document.getElementById("addCarForm");

const makraInput = document.getElementById("makraInput");
const modelInput = document.getElementById("modelInput");
const engineInput = document.getElementById("engineInput");
const yearInput = document.getElementById("yearInput");
const priceInput = document.getElementById("priceInput");
const currencyInput = document.getElementById("currencyInput");
const mileageInput = document.getElementById("mileageInput");
const imageInput = document.getElementById("imageInput");
const url = "http://localhost:3000";

addCarForm.addEventListener("submit", (e) => {
  e.preventDefault();
  
  const randomId = Date.now();

  const newCar = {
    id: randomId,
    marka: makraInput.value,
    model: modelInput.value,
    year: yearInput.value,
    engine: engineInput.value,
    price: priceInput.value,
    currency: currencyInput.value,
    mileage: mileageInput.value,
    date: "bu gun 17:00",
    image: imageInput.value,
    likes: 0,
  };

  const params = new URL(document.location).searchParams;
  const username = params.get("username");

  axios.post(url + "/allCars", newCar);

  axios(url + "/users").then(({ data }) => {
    const currentUser = data.find((user) => user.username === username);
    axios.patch(url + `/users/${currentUser.id}`, {
      cars: [...currentUser.cars, newCar],
    });
  });

  makraInput.value = "";
  modelInput.value = "";
  yearInput.value = "";
  engineInput.value = "";
  priceInput.value = "";
  currencyInput.value = "";
  mileageInput.value = "";
  imageInput.value = "";
});
