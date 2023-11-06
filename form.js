const subform = document.querySelector("#sub-form");
const aText = document.querySelector(".alert");

subform.addEventListener("submit", (e) => {
	e.preventDefault();

	// Check if the form fields are filled
	const nameInput = document.querySelector("#name");
	const subPlansSelect = document.querySelector("#sub-plans");

	if (nameInput.value.trim() !== "" && subPlansSelect.value !== "0") {
		aText.style.display = "flex";
		subform.reset();
	} else {
		alert("Please fill in all the required fields.");
	}
});
