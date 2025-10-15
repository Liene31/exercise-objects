const containerDiv = document.getElementById("container");

const products = [
  {
    productName: "Banana",
    productDescription: "Yellow Bananas",
    productPrice: 1.5,
    isPromo: true,
    priceDiscount: 0.9,
    productImg: "./image/banana.jpg",
  },

  {
    productName: "Mango",
    productDescription: "Green Mango",
    productPrice: 2.5,
    isPromo: false,
    priceDiscount: 0,
    productImg: "./image/mango.jpg",
  },

  {
    productName: "Mandarin",
    productDescription: "Orange Mandarin",
    productPrice: 3.5,
    isPromo: true,
    priceDiscount: 3.25,
    productImg: "./image/mandarin.jpg",
  },
];

products.forEach((product) => {
  const productContainerPara = document.createElement("div");
  productContainerPara.classList.add("product-container");

  const productImg = document.createElement("img");
  productImg.src = product.productImg;

  const productTitle = document.createElement("h1");
  productTitle.textContent = product.productName;

  const productDescriptionPara = document.createElement("p");
  productDescriptionPara.textContent = product.productDescription;

  const productPricePara = document.createElement("p");
  productPricePara.textContent = "€ ";

  const productPriceSpan = document.createElement("span");
  productPriceSpan.textContent = product.productPrice;
  productPricePara.append(productPriceSpan);

  const productDiscountPara = document.createElement("p");

  if (product.isPromo) {
    productPricePara.classList.add("line-through");
    productDiscountPara.textContent = "€ ";
    const productDiscountSpan = document.createElement("span");
    productDiscountSpan.textContent = product.priceDiscount;
    productDiscountPara.append(productDiscountSpan);

    //create promo-icon div with class of promo
    const promoIconDiv = document.createElement("div");
    promoIconDiv.textContent = "promo";
    promoIconDiv.classList.add("promo-icon");
    containerDiv.append(promoIconDiv);
  }

  productContainerPara.append(
    productImg,
    productTitle,
    productDescriptionPara,
    productPricePara,
    productDiscountPara
  );

  containerDiv.append(productContainerPara);
});
