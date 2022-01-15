function getData() {
	const [peopleInAction, peopleOutAction, blackListAction] = ["peopleIn", "peopleOut", "blacklist"];
	const firstNameProperty = "firstName";
	const lastNameProperty = "lastName";
	const actionProperty = "action";
	const criteriaProperty = "criteria";

	const textAreaElementValue = JSON.parse(document.getElementsByTagName("textarea")[0].value);
	const peopleInELement = document.querySelector("#peopleIn p");
	const peopleOutELement = document.querySelector("#peopleOut p");
	const blacklistELement = document.querySelector("#blacklist p");

	const sortInfo = textAreaElementValue.slice(textAreaElementValue.length - 1)[0];

	let peopleInList = [];
	let peopleOutList = [];
	let blacklistList = [];

	textAreaElementValue.forEach(person => {

		if (person[actionProperty] === peopleInAction) {
			const personCopy = { ...person };
			delete personCopy[actionProperty];

			peopleInList.push(JSON.stringify(personCopy));
		}
		else if (person[actionProperty] === peopleOutAction) {
			peopleInChecker(person);
		}
		else if (person[actionProperty] === blackListAction) {

			if (!peopleInChecker(person)) {
				blacklistList.push(JSON.stringify(person));
			}
		}

	})

	function peopleInChecker(person) {

		for (let i = 0; i < peopleInList.length; i++) {

			if (peopleInList[i].includes(person[firstNameProperty]) && peopleInList[i].includes(person[lastNameProperty])) {
				peopleOutList.push(peopleInList[i])
				peopleInList.splice(i, 1);

				return true;
			}
		}

		return false;
	}

	function sorter(list) {

	}
}