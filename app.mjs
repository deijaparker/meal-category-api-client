document.querySelector(".getMeal").addEventListener("click", async () => {
  let x = prompt("Enter a number");
  if (x <= 14) {
    let response = await axios(
      "https://www.themealdb.com/api/json/v1/1/categories.php"
    );
    let info = response.data.categories;
    console.log(response.data);
    let name = info[x].strCategory;
    let imgUrl = info[x].strCategoryThumb;
    let description = info[x].strCategoryDescription;

    const main = document.querySelector(".main");
    const div = document.createElement("div");

    const meal = document.createElement("h1");
    const image = document.createElement("img");
    const mealInfo = document.createElement("p");

    image.setAttribute("src", imgUrl);
    meal.innerText = name;
    mealInfo.innerHTML = description;
    main.appendChild(meal);
    main.appendChild(div);

    div.appendChild(image);
    div.appendChild(mealInfo);
  }
});
