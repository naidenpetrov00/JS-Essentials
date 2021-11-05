function createArticle() {
	let titleElement = document.getElementById('createTitle');
	let titleElementValue = titleElement.value;
	let contentElement = document.getElementById('createContent');
	let contentElementValue = contentElement.value;


	if (titleElementValue && contentElementValue) {
		let titleElement = document.createElement('h3');
		titleElement.textContent = titleElementValue;

		let contentElement = document.createElement('p');
		contentElement.textContent = contentElementValue;

		let articleElement = document.createElement('article');
		articleElement.appendChild(titleElement);
		articleElement.appendChild(contentElement);

		let articlesListElement = document.getElementById('articles');
		articlesListElement.appendChild(articleElement);
	}

	titleElement.value = "";
	contentElement.value = "";

}