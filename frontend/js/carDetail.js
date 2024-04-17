const params = new URL(document.location).searchParams
const id = params.get("id")

const url = "http://localhost:3000/allCars/";
const carsContainer = document.getElementById('carsContainer')

fetch(url + id).then((res) => {
    return res.json()
}).then(({id,image,price,currency,year,engine,mileage,marka,model,date}) => {
    carsContainer.innerHTML += `<div class="col-12 my-3">
    <div class="border p-0 rounded car_box position-relative">
    <img class="car_image rounded-top carDetailImage" src="${image}">
   
    <div class="p-2">
      <h3 class="price">${price} ${currency}</h3>
      <p class="model">${marka} ${model}</p>
      <p class="info">${year} ${engine} ${mileage}</p>
      <p class="date">${date}</p>
    </div>
    </div>
  </div>`;
})