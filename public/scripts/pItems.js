let user = sessionStorage.getItem('cUser');
let cOrder = JSON.parse(localStorage.getItem('oArr'));
document.getElementById('name').innerHTML = `User:${user}`;
document.getElementById('tProduct').innerHTML = `totalProduct:${cOrder.length}`;
let tPrice = 0;
cOrder.forEach((val) => {
  tPrice += val.price;
});
document.getElementById('tPrice').innerHTML = tPrice;
console.log(cOrder);
const pItem = () => {
  fetch('/admitToUser', {
    headers: { Accept: 'application/json', 'Content-Type': 'application/json' },
    method: 'post',
    body: JSON.stringify({
      user,
      cOrder,
    }),
  })
    .then((res) => res.json())
    .then((data) => {
      if (data == true) {
        location.href = '/';
      }
    })
    .catch((err) => {
      console.log(err);
    });
};
