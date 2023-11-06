const storedData = JSON.parse(localStorage.getItem("cartPlans"));

const total = document.querySelector(".total");
// total.textContent = `$ ${

// }`
let itemTotal = 0;
const totalFunc = () => {
	// console.log(itemTotal);
	total.textContent = `Total: $ ${itemTotal.toFixed(2)}`;
};

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

		const deleteElement = document.createElement("div");
		deleteElement.innerHTML =
			'<i class="fa fa-trash deleteItem" aria-hidden="true" style="color: #ff0000;" ></i>';

		deleteElement.className = "deleteItem";

		cardElement.appendChild(nameElement);
		cardElement.appendChild(priceElement);
		cardElement.appendChild(deleteElement);

		container.appendChild(cardElement);
		// totalFunc();
		itemTotal += parseFloat(card.price);
		itemTotal = parseFloat(itemTotal.toFixed(2)); // Round to 2 decimal places

		// total.textContent = `Total: $ ${itemTotal}`;
	});
	totalFunc();
	// Add an event listener to the container for the delete action
	container.addEventListener("click", (event) => {
		if (event.target.classList.contains("deleteItem")) {
			// If the clicked element has the "deleteItem" class (i.e., the delete button), proceed to remove the item
			const cardElement = event.target.closest(".cartItemWrapper");
			if (cardElement) {
				// Retrieve the stored data from local storage
				const storedData = JSON.parse(localStorage.getItem("cartPlans")) || [];

				// Find the index of the item to be removed within the stored data
				const index = storedData.findIndex((item) => {
					return (
						item.plan === cardElement.querySelector(".planName").textContent &&
						item.price === cardElement.querySelector(".planPrice").textContent
					);
				});

				if (index !== -1) {
					// Remove the item at the specified index from the stored data
					storedData.splice(index, 1);

					// Update local storage with the modified data
					localStorage.setItem("cartPlans", JSON.stringify(storedData));

					// Remove the card element from the DOM
					cardElement.remove();
				}
			}
			location.reload();
		}
	});
}

// console.log(itemTotal);
totalFunc();
