data.forEach((element, i) => {
    var container = document.querySelector('.card-container');
    console.log(container);

    var carddiv = document.createElement('div');

    carddiv.classList = 'card';

    const card =
        `
        <img src="${data[i].image}">
        <h3>${data[i].title}</h3>
        <h4>MRP: Rs ${data[i].price}/-</h4>
        <button>Buy</button>
    `
    carddiv.innerHTML += card;

    container.appendChild(carddiv);
});