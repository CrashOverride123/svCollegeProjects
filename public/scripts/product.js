const getAllProductsToUser = () => {
  fetch('/productsFromDb')
    .then((res) => res.json())
    .then((data) => {
      let sortBtn = document.getElementById('sortBtn');
      let temp = data;

      sortBtn.addEventListener('click', () => {
        let mySortArr = [...temp];
        let mainDiv = document.getElementById('main');
        mainDiv.innerHTML = ''; // Clear previous content
        let choose = document.getElementById('select').value;

        if (choose == 'name') {
          mySortArr.sort((a, b) => a.product - b.product);
        } else if (choose == 'price') {
          mySortArr.sort((a, b) => a.price - b.price);
        } else {
          return;
        }

        let orders = [];
        let user = localStorage.getItem('userName');
        mySortArr.forEach((val) => {
          let div = document.createElement('div');
          div.style.border = '1.5px blue solid';
          div.style.margin = '10px';
          div.innerHTML = val.product;
          div.innerHTML += val.price;
          div.addEventListener('click', () => {
            orders.push(val);
          });
          mainDiv.append(div); // Append new element to main div
        });
      });
    });
};
