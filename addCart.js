const addCartBtns = document.querySelectorAll(".add-cart ");

addCartBtns.forEach((cartBtn) => {
	cartBtn.addEventListener("click", () => {
		// console.log(cartBtn.parentElement);
		const price = cartBtn.parentElement.querySelector(".price").textContent;
		const plan = cartBtn.parentElement.querySelector(".plan-name").textContent;
		let cartPlans = JSON.parse(localStorage.getItem("cartPlans")) || [];
		cartPlans.push({ plan, price });
		localStorage.setItem("cartPlans", JSON.stringify(cartPlans));

		// console.log(cartPlans);
		alert("item added to cart");
	});
});
