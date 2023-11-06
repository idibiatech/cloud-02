const storedData = JSON.parse(localStorage.getItem("cartPlans"));
// console.log(storedData);
// if (storedData) {
// 	// Loop through the stored data and use it as needed
// 	storedData.forEach((card) => {
// 		console.log("Name: " + card.plan);
// 		console.log("Price: " + card.price);
// 	});
// }

if (storedData) {
	const container = document.querySelector(".cartWrapper");
	// Clear the container before adding new data to avoid duplication
	container.innerHTML = "";

	storedData.forEach((card) => {
		const cardElement = document.createElement("div");
		cardElement.className = "cartItemWrapper";

		const nameElement = document.createElement("div");
		nameElement.className = "planName";
		nameElement.textContent = card.plan;

		const priceElement = document.createElement("div");
		priceElement.textContent = card.price;
		priceElement.className = "planPrice";

		cardElement.appendChild(nameElement);
		cardElement.appendChild(priceElement);

		container.appendChild(cardElement);
	});
}
