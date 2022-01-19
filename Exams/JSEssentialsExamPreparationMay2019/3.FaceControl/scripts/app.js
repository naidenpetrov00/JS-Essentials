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

	const sortInfo = textAreaElementValue.splice(textAreaElementValue.length - 1)[0];

	let peopleLists = {
		peopleIn: [],
		peopleOut: [],
		blacklist: []
	};

	textAreaElementValue.forEach(person => {

		if (person[actionProperty] === peopleInAction &&
			peopleLists['blacklist'].includes) {
			const personCopy = { ...person };
			delete personCopy[actionProperty];

			peopleLists['peopleIn'].push(JSON.stringify(personCopy));
		}
		else if (person[actionProperty] === peopleOutAction) {
			peopleInChecker(person);
		}
		else if (person[actionProperty] === blackListAction) {
			if (peopleInChecker(person)) {
			}
			else {
				peopleLists['blacklist'].push(JSON.stringify(person));
			}
		}

	})

	console.log(peopleLists);

	if (sortInfo[actionProperty] !== '' && sortInfo[criteriaProperty] !== '') {
		sorter();
	}

	function peopleInChecker(person) {
		for (let i = 0; i < peopleLists.peopleIn.length; i++) {

			if (peopleLists['peopleIn'][i].includes(person[firstNameProperty]) && peopleLists['peopleIn'][i].includes(person[lastNameProperty])) {
				peopleLists['peopleOut'].push(peopleLists['peopleIn'][i]);
				peopleLists['peopleIn'].splice(i, 1)

				return true;
			}
		}

		return false;
	}

	function blacklistChecker(person) {
		for (let i = 0; i < peopleLists.peopleIn.length; i++) {

			if (peopleLists['peopleIn'][i].includes(person[firstNameProperty]) && peopleLists['peopleIn'][i].includes(person[lastNameProperty])) {
				peopleLists['peopleOut'].push(peopleLists['peopleIn'][i]);
				peopleLists['peopleIn'].splice(i, 1)

				return true;
			}
		}

		return false;
	}

	function sorter() {

	}
}