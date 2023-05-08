const getAllProductsToUser = () => {


    fetch('/productsFromDb')
        .then(res => res.json())
        .then((data) => {
            let sortBtn = document.getElementById('sortBtn');//לצורך האזנה לכפתור
            let temp = data;


            sortBtn.addEventListener('click', () => {
                let mySortArr = [...temp];//מקבל את המערך המקורי כל פעם מחדש
                document.getElementById('main').innerHTML = '';
                let choose = document.getElementById('select').value;


                if (choose == 'name') {
                    mySortArr.sort((a, b) => a.product - b.product);
                }
                else if (choose == 'price') {
                    mySortArr.sort((a, b) => a.price - b.price)
                } else {

                    return;

                }
                let orders = []
                let user = localStorage.getItem('userName')
                mySortArr.forEach((val) => {
                    let div = document.createElement('div');
                    div.style.border = '1.5px blue solid'
                    div.style.margin = '10px';
                    div.innerHTML = val.product;
                    div.innerHTML += val.price;
                    div.addEventListener('click', () => {
                        orders.push(val);
                    })
                    document.getElementById('main').append(div)


                })



            })

        })



}
