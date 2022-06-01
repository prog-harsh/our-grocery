$(document).ready(function() {
	$.ajax({
		url: "https://ourgrocery.herokuapp.com/api/top-offers",
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