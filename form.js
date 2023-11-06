const subform = document.querySelector("#sub-form");
const aText = document.querySelector(".alert");

subform.addEventListener("submit", (e) => {
	e.preventDefault();

	// Check if the form fields are filled
	const nameInput = document.querySelector("#fname");
	// const subPlansSelect = document.querySelector("#sub-plans");
	const lname = document.querySelector("#lname");
	const email = document.querySelector("#email");

	if (
		nameInput.value.trim() !== "" &&
		lname.value.trim() !== "" &&
		email.value.trim() !== ""
	) {
		aText.style.display = "flex";
		subform.reset();
	} else {
		alert("Please fill in all the required fields.");
	}
});

const storedData = JSON.parse(localStorage.getItem("cartPlans"));

const total = document.querySelector(".total");
// total.textContent = `$ ${

// }`
let itemTotal = 0;
storedData.forEach((card) => {
	itemTotal += parseFloat(card.price);
	itemTotal = parseFloat(itemTotal.toFixed(2)); // Round to 2 decimal places
});
const totalFunc = () => {
	// console.log(itemTotal);
	total.textContent = `Total: $ ${itemTotal.toFixed(2)}`;
};

totalFunc();
