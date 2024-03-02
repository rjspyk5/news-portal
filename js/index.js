const loadData=async (url)=>{
    const promisedObject=await fetch(url);
    const allData=await promisedObject.json();
    const catagories=allData.data.news_category
   makeCatagoriesSection(catagories);

}

const catagorySection=document.getElementById("catagorySection")
const makeCatagoriesSection=(data)=>{
    data.forEach(datum => {
        const span=document.createElement("span");
        span.innerHTML=`
        <button id=${
            datum.category_id
            } class="btn btn-ghost text-black">${datum.category_name
            }</button>
        `;
       catagorySection.appendChild(span);

        console.log(datum);
    });
}


loadData("https://openapi.programming-hero.com/api/news/categories");