// Get the products and display them
const getAllProductsToUser = async () => {
  const products = await fetch('/products', { method: 'GET' }).then((res) =>
    res.json()
  );
  const productsContainer = document.getElementById('main');
  productsContainer.innerHTML = '';
  products.forEach((product) => {
    const productElem = document.createElement('div');
    productElem.classList.add('product');

    const productImage = document.createElement('img');
    productImage.src = product.image;

    const productInfo = document.createElement('div');
    productInfo.classList.add('info');

    const productName = document.createElement('h3');
    productName.innerText = product.name;

    const productDescription = document.createElement('p');
    productDescription.innerText = product.description;

    const productPrice = document.createElement('div');
    productPrice.classList.add('price');
    productPrice.innerText = `$${product.price}`;

    productInfo.appendChild(productName);
    productInfo.appendChild(productDescription);
    productInfo.appendChild(productPrice);

    productElem.appendChild(productImage);
    productElem.appendChild(productInfo);

    productsContainer.appendChild(productElem);
  });
};

// Sort the products by name or price
const sortProducts = async (sortBy) => {
  const products = await fetch(`/products?sort=${sortBy}`, {
    method: 'GET',
  }).then((res) => res.json());

  const productsContainer = document.getElementById('main');
  productsContainer.innerHTML = '';

  products.forEach((product) => {
    const productElem = document.createElement;
  });
};
