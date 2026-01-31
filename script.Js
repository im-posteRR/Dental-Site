let products = {
  data: [
    {
      productName: "Sensodyne Toothpaste",
      category: "Toothpaste",
      price: "3000",
      image: "Sensodyne.png",
    },
    {
      productName: "Colgate Toothbrush",
      category: "Brushes",
      price: "460",
      image: "Colgate Toothbrush.Jpeg",
    },
    {
      productName: "Kids Mouthwash",
      category: "Kids",
      price: "990",
      image: "Kids Mouthwash.Jpeg",
    },
    {
      productName: "Dental Floss",
      category: "Accessories",
      price: "390",
      image: "Accessories1.Jpeg",
    },
    {
      productName: "Electric Toothbrush",
      category: "Brushes",
      price: "12900",
      image: "Electric Brush.Jpeg",
    },
    {
      productName: "Stim Floss",
      category: "Accessories",
      price: "2890",
      image: "Accessories2.Jpeg",
    },
    {
      productName: "Wooden Toothbrush",
      category: "Brushes",
      price: "2090",
      image: "Wooden Toothbrush.Jpeg",
    },
    {
      productName: "Kids Toothpaste",
      category: "Kids",
      price: "1000",
      image: "Kids.Jpeg",
    },
    {
      productName: "Pepsodent",
      category: "Toothpaste",
      price: "3000",
      image: "Pepsodent.Jpeg",
    },
  ],
};
for (let i of products.data) {
  let card = document.createElement("div");

  card.classList.add("card", i.category, "hide");

  let imgContainer = document.createElement("div");

  imgContainer.classList.add("image-container");

  let image = document.createElement("img");
  image.setAttribute("src", i.image);
  imgContainer.appendChild(image);
  card.appendChild(imgContainer);

  document.getElementById("products").appendChild(card);

  let container = document.createElement("div");
  container.classList.add("container");

  let name = document.createElement("h5");
  name.classList.add("product-name");
  name.innerText = i.productName.toUpperCase();
  container.appendChild(name);

  let price = document.createElement("h6");
  price.innerText = `₦${i.price}`;
  container.appendChild(price);

  card.appendChild(container);
  document.getElementById("products").appendChild(card);
}

window.onload = () => {
  filterProducts("all");
};

function filterProducts(value) {
  let buttons = document.querySelectorAll(".button-value");
  buttons.forEach((button) => {
    if (value.toUpperCase() == button.innerText.toUpperCase()) {
      button.classList.add("active");
    } else {
      button.classList.remove("active");
    }
  });

  //select all cards
  let elements = document.querySelectorAll(".card");
  elements.forEach((element) => {
    if (value == "all") {
      element.classList.remove("hide");
    } else {
      if (element.classList.contains(value)) {
        element.classList.remove("hide");
      } else {
        element.classList.add("hide");
      }
    }
  });
}
//search button click
document.getElementById("search").addEventListener("click", () => {
  let searchInput = document.getElementById("search-input").value;
  let elements = document.querySelectorAll(".product-name");
  let cards = document.querySelectorAll(".card");
  console.log(searchInput);

  //looop through all elements
  elements.forEach((element, index) => {
    if (element.innerText.includes(searchInput.toUpperCase())) {
      cards[index].classList.remove("hide");
    } else {
      cards[index].classList.add("hide");
    }
  });
});

// form
const allStar = document.querySelectorAll(".rating .star");
const ratingValue = document.querySelector(".rating input");

allStar.forEach((item, idx) => {
  item.addEventListener("click", function () {
    let click = 0;
    ratingValue.value = idx + 1;

    allStar.forEach((i) => {
      i.classList.replace("bxs-star", "bx-star");
      i.classList.remove("active");
    });
    for (let i = 0; i < allStar.length; i++) {
      if (i <= idx) {
        allStar[i].classList.replace("bx-star", "bxs-star");
        allStar[i].classList.add("active");
      } else {
        allStar[i].style.setProperty("--i", click);
        click++;
      }
    }
  });
});
function sent() {
  alert("Your Reviews are appreciated!");
}
