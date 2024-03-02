//Create Catagory Section
const catagorySection = document.getElementById("catagorySection");
const makeCatagoriesSection = (datas) => {
  const data = datas.data.news_category;

  data.forEach((datum) => {
    const span = document.createElement("span");
    span.innerHTML = `<button onclick="handleButton(id)"  id=${datum.category_id} class="btn btn-ghost focus:bg-blue-600 focus:text-white text-black">${datum.category_name}</button> `;
    catagorySection.appendChild(span);
  });
  handleButton("01");
};

// Shown data when someone click on catagory
const newsContainer = document.getElementById("news-container");
const showDataWithCatagory = (datas) => {
  const data = datas.data;
  console.log(data[0]);
  data.length > 0
    ? data.forEach((el) => {
        const div = document.createElement("div");
        div.innerHTML = `
  <div class="card py-5 lg:card-side bg-base-100 shadow-xl">
  <img class="w-96" src=${el?.image_url} alt="Album"/>
  <div class="px-8" >
    <h2 class="card-title">${el.title}</h2>
    <p>${el.details}</p>
    
    <div class="flex justify-between"><div className="flex space-x-2"></div>
    <div className="flex space-x-2">
    <p>${el.total_view}</p>
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
  <path stroke-linecap="round" stroke-linejoin="round" d="M2.036 12.322a1.012 1.012 0 0 1 0-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178Z" />
  <path stroke-linecap="round" stroke-linejoin="round" d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
    </svg>
    </div>
    
    </div>
    <div className="flex space-x-2">
    <div class="rating">
    <input type="radio" name="rating-2" class="mask mask-star-2 bg-orange-400" />
    <input type="radio" name="rating-2" class="mask mask-star-2 bg-orange-400" />
    <input type="radio" name="rating-2" class="mask mask-star-2 bg-orange-400" />
    <input type="radio" name="rating-2" class="mask mask-star-2 bg-orange-400" />
    <input type="radio" name="rating-2" class="mask mask-star-2 bg-orange-400" />
  </div>
   
    </div>
    
  </div>
</div> 
  `;
        newsContainer.appendChild(div);
      })
    : (newsContainer.innerHTML = `no news available`);
};
// Clear previous
const clearPrev = () => {
  newsContainer.innerHTML = "";
};

// Data fetching
const loadData = async (url, fun) => {
  const promisedObject = await fetch(url);
  const allData = await promisedObject.json();
  fun(allData);
};

// handle when someone click on catagories
const handleButton = (id) => {
  clearPrev();
  loadData(
    `https://openapi.programming-hero.com/api/news/category/${id}`,
    showDataWithCatagory
  );
};
// Default call
loadData(
  "https://openapi.programming-hero.com/api/news/categories",
  makeCatagoriesSection
);
