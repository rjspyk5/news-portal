//Create Catagory Section
const catagorySection = document.getElementById("catagorySection");
const makeCatagoriesSection = (datas) => {
  const data = datas.data.news_category;

  data.forEach((datum) => {
    const span = document.createElement("span");
    span.innerHTML = `<button onclick="handleButton(id)"  id=${datum.category_id} class="btn btn-ghost focus:bg-blue-600 focus:text-white text-black">${datum.category_name}</button> `;
    catagorySection.appendChild(span);
  });
  handleButton("08");
};

// Shown data when someone click on catagory
const newsContainer = document.getElementById("news-container");
const showDataWithCatagory = (datas) => {
  const data = datas.data;
  data.forEach((el) => {
    const div = document.createElement("div");
    div.innerHTML = `
  <div class="card lg:card-side bg-base-100 shadow-xl">
  <figure><img class="w-96" src=${el?.image_url} alt="Album"/></figure>
  <div class="card-body">
    <h2 class="card-title">New album is released!</h2>
    <p>Click the button to listen on Spotiwhy app.</p>
    <div class="card-actions justify-end">
      <button class="btn btn-primary">Listen</button>
    </div>
  </div>
</div> 
  `;
    newsContainer.appendChild(div);
  });
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
