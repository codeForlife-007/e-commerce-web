const wrapper = document.querySelector(".sliderWrapper");
const menuItems = document.querySelectorAll(".menuItem");

const products = [
  {
    id: 1,
    title: "Air force",
    price: 119,
    colors: [
      {
        code: "whitesmoke",
        img: "./images/nike air white.png",
      },
      {
        code: "gray",
        img: "./images/nike air gray.png",
      },
    ],
  },
  {
    id: 2,
    title: "Air Jordan",
    price: 149,
    colors: [
      {
        code: "black",
        img: "./images/jordan black.png",
      },
      {
        code: "red",
        img: "./images/jordan red.png",
      },
    ],
  },
  {
    id: 3,
    title: "Blazer",
    price: 109,
    colors: [
      {
        code: "black",
        img: "./images/blazer black.png",
      },
      {
        code: "green",
        img: "./images/blazer green.png",
      },
    ],
  },
  {
    id: 4,
    title: "Crater",
    price: 129,
    colors: [
      {
        code: "black",
        img: "./images/crater black.png",
      },
      {
        code: "rgb(237, 89, 89)",
        img: "./images/crater orange.png",
      },
    ],
  },
  {
    id: 5,
    title: "Hippie",
    price: 99,
    colors: [
      {
        code: "darkgreen",
        img: "./images/hippie black.png",
      },
      {
        code: "beige",
        img: "./images/hippie skin.png",
      },
    ],
  },
];

const currProdImg = document.querySelector(".productImg");
const currProdTitle = document.querySelector(".productTitle");
const currProdPrice = document.querySelector(".productPrice");
const currProdColors = document.querySelectorAll(".color");
const currProdSizes = document.querySelectorAll(".size");

menuItems.forEach((item, index) => {
  item.addEventListener("click", () => {
    // change the current slide
    wrapper.style.transform = `translateX(${-100 * index}vw)`;

    // change the choosen product
    choosenProduct = products[index];

    // change the text of currentProduct
    currProdTitle.textContent = choosenProduct.title;

    // change the price of currentProduct
    currProdPrice.textContent = "$" + choosenProduct.price;
    currProdImg.src = choosenProduct.colors[0].img;

    currProdColors.forEach((color, index) => {
      color.style.backgroundColor = choosenProduct.colors[index].code;
    });
  });
});

currProdColors.forEach((color, index) => {
  color.addEventListener("click", () => {
    console.log("Hello world!");
    currProdImg.src = choosenProduct.colors[index].img;
  });
});

currProdSizes.forEach((size, index) => {
  size.addEventListener("click", () => {
    currProdSizes.forEach((size) => {
      console.log("I'm here!");
      size.style.backgroundColor = "white";
      size.style.color = "black";
    });
    size.style.backgroundColor = "black";
    size.style.color = "white";
  });
});

const productButton = document.querySelector(".productButton");
const payment = document.querySelector(".payment");
const close = document.querySelector(".close");

productButton.addEventListener("click", () => {
  payment.style.transition = "all 0.3s ease";
  payment.style.display = "flex";
});

close.addEventListener("click", () => {
  payment.style.display = "none";
});
