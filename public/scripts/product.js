let arr = [];
let oArr = [];
const aDivs = (n, price) => {
  const div = document.createElement('div');
  const p = document.createElement('p');
  const p1 = document.createElement('p');
  div.addEventListener('click', () => {
    let temp = {
      name: n,
      price: price,
    };
    oArr.push(temp);
    console.log(oArr);
  });
  p.innerHTML = `price: ${price}`;
  p1.innerHTML = `name: ${n}`;
  div.append(p);
  div.append(p1);
  document.getElementById('main').appendChild(div); // append the div to the body of the HTML document
};
const sorting = () => {
  const btn = document.getElementById('sort').value;
  if (btn === 'name') {
    arr.sort((a, b) => (b.name.toUpperCase() < a.name.toUpperCase() ? 1 : -1));
    document.getElementById('main').innerHTML = '';
    arr.forEach((val) => {
      aDivs(val.name, val.price);
    });
  } else {
    arr.sort((a, b) => b.price - a.price);
    document.getElementById('main').innerHTML = '';
    arr.forEach((val) => {
      aDivs(val.name, val.price);
    });
  }
};
const iAdded = () => {
  if (oArr.length != 0) {
    localStorage.setItem('oArr', JSON.stringify(oArr));
    location.href = '/checkOut';
  }
};
fetch('/productsFromDb')
  .then((res) => res.json())
  .then((data) => {
    arr = data;
    arr.forEach((val) => {
      aDivs(val.name, val.price);
    });
  });
