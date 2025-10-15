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
    isPromo: true,
    priceDiscount: 0.9,
    productImg: "./image/mango.jpg",
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
    productDiscountPara.textContent = "€ ";
    const productDiscountSpan = document.createElement("span");
    productDiscountSpan.textContent = product.priceDiscount;
    productDiscountPara.append(productDiscountSpan);
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
