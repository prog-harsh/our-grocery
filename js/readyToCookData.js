// const data = [{
//         "image": "https://cdn.shopify.com/s/files/1/0173/7644/4470/products/ChickenChettinad-01_44fc519d-e42e-4022-adc7-792d2b1bf417_1024x1024.jpg?v=1605611013",
//         "title": "Ready to Eat Chicken Chettinad",
//         "price": "180"
//     },
//     {
//         "image": "https://rukminim1.flixcart.com/image/416/416/khwbde80-0/popcorn/v/p/i/hot-fresh-microwave-microwave-act-ii-original-imafxstmnffbve6z.jpeg?q=70",
//         "title": "ACT II Hot & Fresh Microwave Butter Lovers Popcorn",
//         "price": "99"
//     },
//     {
//         "image": "https://www.bigbasket.com/media/uploads/p/l/1214117_1-id-fresho-idly-dosa-batter-1-kg-whole-wheat-parota-350-g.jpg",
//         "title": "Idly Dosa Batter, 1 Kg + Whole Wheat Parota",
//         "price": "149"
//     },
// ]

$(document).ready(function() {
	$.ajax({
		url: "https://ourgrocery.herokuapp.com/api/ready-to-cook",
		type: "GET",
		success: function(res) {
			res.forEach((element, i) => {
				var container = document.querySelector('.card-container');
				console.log(container);
			
				var carddiv = document.createElement('div');
			
				carddiv.classList = 'card';
			
				const card =
					`
					<img src="${res[i].image}">
					<h3>${res[i].title}</h3>
					<h4>MRP: Rs ${res[i].price}/-</h4>
					<button>Buy</button>
				`
				carddiv.innerHTML += card;
			
				container.appendChild(carddiv);
			});
		},
		error: function(error) {
			console.log(error);
		}

	});
});